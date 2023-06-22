const container = document.querySelector('.container');
const myLibrary = [];
const shelve = document.createElement('div');
shelve.className = 'shelve';

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  shelve.innerHTML = '';

  myLibrary.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';
    bookElement.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read}</p>`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      removeBookFromLibrary(book);
    });

    const readBtn = document.createElement('button');
    readBtn.textContent = 'Change Read';
    readBtn.addEventListener('click', () => {
      book.read = !book.read;
      displayBooks();
    });

    bookElement.appendChild(removeBtn);
    bookElement.appendChild(readBtn);

    shelve.appendChild(bookElement);
  });
}

function removeBookFromLibrary(book) {
  const bookIndex = myLibrary.indexOf(book);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    displayBooks();
  }
}

const button = document.createElement('button');
button.textContent = 'Add Book';
button.style.display = 'block';
button.style.margin = '0 auto';

const form = document.querySelector('.form');
button.addEventListener('click', () => {
  form.style.display = 'flex';
  button.style.display = 'none';
});

const submit = document.querySelector('.submit');
submit.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.style.display = 'none';
  button.style.display = 'block';

  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const pages = document.querySelector('.pages');
  const read = document.querySelector('.read');

  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  addBookToLibrary(newBook);
});

for (let i = 0; i < 5; i++) {
  const newBook = new Book(`title${i}`, `author${i}`, i, false);
  myLibrary.push(newBook);
}

displayBooks();

container.appendChild(shelve);
container.appendChild(button);
