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

// Method to clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
  
// Event listeners 
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

    // Add book to list 
    ui.addBookToList(book);
    
    // Clear input fields 
    ui.clearFields();
    
    e.preventDefault();
  });

