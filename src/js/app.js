// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add Book To List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create tr Element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="fa fa-remove delete"</a></td>
  `;
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

// Even Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get Form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  //Validate
  if(title === '' || author === '' || isbn === ''){
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add to Book List
    ui.addBookToList(book);

    // Show Success
    ui.showAlert('Book Added!', 'success');

    // Clear Fields
    ui.clearFields();
  }



  e.preventDefault();
});