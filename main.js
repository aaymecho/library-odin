// Get container element
const container = document.querySelector('.container');

// Initialize library array
let myLibrary = [];

// Create a shelve element
const shelve = document.createElement('div');
shelve.className = 'shelve';

// Book constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add book to library
function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Display books
function displayBooks() {
  // Clear shelve
  shelve.replaceChildren();

  // Iterate through each book in the library
  myLibrary.forEach(bookElement => {
    // Create a book element
    const book = document.createElement('div');
    book.className = 'book';
    book.textContent = `
      Title: ${bookElement.title}
      Author: ${bookElement.author}
      Pages: ${bookElement.pages}
      Read: ${bookElement.read}`;

    //Remove button to pop out from shelve
    removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      shelve.removeChild(book);
    })

    //Read change status button
    readBtn = document.createElement('button');
    readBtn.textContent = 'Change Read';
    readBtn.addEventListener('click', () => {
      book.read = true;
    });
    book.appendChild(removeBtn);
    book.appendChild(readBtn);

    // Append book element to shelve
    shelve.appendChild(book);
  });
}

// Create an "Add Book" button
const button = document.createElement('button');
button.textContent = 'Add Book';

// Get form element
const form = document.querySelector('.form');

// Show form on button click
button.addEventListener('click', () => {
  form.style.display = 'flex';
  button.style.display = 'none';
});

// Get submit button
const submit = document.querySelector('.submit');

// Handle form submission
submit.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.style.display = 'none';
  button.style.display = 'block';

  // Get form inputs
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const pages = document.querySelector('.pages');
  const read = document.querySelector('.read');

  // Create a new book object
  Book.prototype.changeRead = function() {
    this.read = !(this.read);
  }
  const newBook = new Book(title.value, author.value, pages.value, read.checked);

  // Add book to library and display books
  addBookToLibrary(newBook);
});

// Add some initial books to the library
for (let i = 0; i < 5; i++) {
  const newBook = new Book(`title${i}`, `author${i}`, i, false);
  myLibrary.push(newBook);
}

// Display the books
displayBooks();

// Append shelve and button to container
container.appendChild(shelve);
container.appendChild(button);
