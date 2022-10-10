let myLibrary = [];

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

  // Loop through the myLibrary and create a new card
  myLibrary.forEach(myLibrary => {
    const card = document.createElement('div');
    card.classList.add('card');
    books.appendChild(card);
    for (let key in myLibrary) {
      //console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement('p');
      if(typeof(myLibrary[key]) === "number"){
        para.textContent = (`${myLibrary[key]} pages`);  
      } else {
        para.textContent = (`${myLibrary[key]}`);
      }
      card.appendChild(para);
    }
  });
}

const submitButton = document.querySelector('.submit-book');
submitButton.addEventListener('click', () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('isRead').value;
  console.log(title);
  console.log(author);
  console.log(pages);
  console.log(read);
  console.log("Hello there!");
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
/*
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/