let myLibrary = [];

// Working
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Working
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

// Working
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
      const para = document.createElement('p');
      
      para.textContent = (`${myLibrary[key]}`);
      if (key === 'pages') para.textContent += ' pages';
      card.appendChild(para);
    }
  });
}





/***** MODAL STUFF  *****/
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

const submitButton = document.querySelector('.submit-book-btn');
submitButton.addEventListener('click', getFormData);

function getFormData() {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('is-read').checked ? 'Read' : 'Unread';
  //document.getElementById("myCheck").checked = false;
  
  if (title == '' || author == '' || pages == '' || read == ''){
    return;
  }
  addBookToLibrary(title, author, pages, read);
  
  // Reset and hide the form once it's been submitted
  document.getElementById('add-book-form').reset();
  modal.style.display = "none";
}

const resetFormButton = document.querySelector('.reset-form-btn');
resetFormButton.onclick = () => {
  document.getElementById('add-book-form').reset();
}