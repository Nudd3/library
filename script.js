let myLibrary = [];


for(let i = 0; i < myLibrary.length; i++){
  console.log(myLibrary[i]);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  // Get the books div
  const books = document.querySelector(".cards");

  // Need to delete the 'currently showed cards' or else,
  // the same card will be shown more than once. 
  const removeDivs = document.querySelectorAll('.card');
  for(let i = 0; i < removeDivs.length; i++){
    removeDivs[i].remove();
  }

  // Loop through the myLibrary and create a new card
  myLibrary.forEach(myLibrary => {
    const card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);
    for (let key in myLibrary) {
      console.log(key);
      const para = document.createElement('p');
      para.textContent = (`${myLibrary[key]}`);
      card.appendChild(para);
    }
  });
}


const submitButton = document.querySelector('.submit-book');
submitButton.addEventListener('click', () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('is-read').value;
  //addBookToLibrary(title, author, pages, read);
});


// Get the modal
let modal = document.getElementById("my-modal");
// Get the button that opens the modal
let btn = document.getElementById("add-btn");
btn.onclick = () => {
  modal.style.display = 'block';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addBookToLibrary('he Hobbit', 'J.R.R Tolkien', 399, false);

addBookToLibrary('A Study In Scarlet', 'Arthur Conan Doyle', 200, false);