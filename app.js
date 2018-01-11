// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor 
function UI() {}

// Method to add book to list 
UI.prototype.addBookToList = function (book) {
  // Get list element
  const list = document.getElementById('book-list');
  // Create tr element 
  const row = document.createElement('tr');
  // Insert row columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  // Append to list 
  list.appendChild(row);
}

// Method to show alert
UI.prototype.showAlert = function (message, className) {
  // Create div 
  const div = document.createElement('div');
  // Add classes 
  div.className = `alert ${className}`;
  // Add text 
  div.appendChild(document.createTextNode(message));
  // Get parent and sibling
  const container = document.querySelector('.content');
  const form = document.querySelector('#book-form');
  // Insert alert before form
  container.insertBefore(div, form);
  // Timeout after 3 sec 
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Method to delete book 
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Method to clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Listener for add book submit
document.getElementById('book-form')
  .addEventListener('submit', function (e) {
    // Get form values 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
  
    // Instantiate book object
    const book = new Book(title, author, isbn);
    
    // Instantiate UI object
    const ui = new UI(); 

    // Validate 
    if (title === '' || author === '' || isbn === '') {
      // Error alert 
      ui.showAlert('Please fill in all fields', 'error') 
    } else {
      // Add book to list 
      ui.addBookToList(book);
      // Success alert 
      ui.showAlert('Book Added', 'success');
      // Clear input fields 
      ui.clearFields();
  }  
  
    e.preventDefault();
  });

// Listener for delete book 
document.getElementById('book-list')
  .addEventListener('click', function (e) {
    // Instantiate ui
    const ui = new UI();
    // Call delete book method
    ui.deleteBook(e.target);
    // Show alert 
    ui.showAlert('Book Deleted', 'success');
    
    e.preventDefault();
  });
