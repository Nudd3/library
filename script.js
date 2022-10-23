class Book{

  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this._read = this._read === 'Read' ? 'Unread' : 'Read';
  }
}

class Library {
  constructor(){
    this.myLibrary = [];
  }

  addBook(book){
    this.myLibrary.push(book);
  }

  removeBook(book){
    this._myLibrary.splice
  }
}

const library = new Library();

const cardsDiv = document.querySelector('.cards');
const cardDivs = document.querySelectorAll('.card');
const modal = document.getElementById('my-modal');
const addButton = document.getElementById("add-btn");
const closeModalSpan = document.getElementsByClassName("close-modal")[0];
const submitButton = document.querySelector('.submit-book-btn');

// Working
const displayBooks = () => {

  for(let i = 0; i < cardDivs.length; i++){
    removeDivs[i].remove();
  }
  
  let index = 0; 
  library.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card');
    cardsDiv.appendChild(card);

    for (let key in book) {
      if (key == 'toggleRead') continue 
      if (key === 'read') {
        
        const toggleReadButton = document.createElement('button');
        toggleReadButton.classList.add('read-btn');
        toggleReadButton.textContent = book.read;
        if(book.read === 'Read'){
          toggleReadButton.classList.toggle('read');
        }

        toggleReadButton.addEventListener('click' , () => {
          book.toggleRead();
          toggleReadButton.textContent = book.read;
          toggleReadButton.classList.toggle('read');
        });
        card.appendChild(toggleReadButton);
      } else {
        const cardElement = document.createElement('p');
      
        cardElement.textContent = (`${book[key]}`);
        if (key === 'pages') cardElement.textContent += ' pages';
        card.appendChild(cardElement);
      }
      

      

      
    }

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('remove-btn');
    deleteButton.textContent = 'Remove';

    card.dataset.index = index;    
    index++;

    deleteButton.addEventListener('click', () => {
      myLibrary.splice(parseInt(card.dataset.index), 1);
      // To keep indices correctly lined up I need to 're-assign' the cards
      // since splice may mess up the indexing of the cards.
      displayBooks();
    });

    card.appendChild(deleteButton);
  });
}



const closeModal = () => {
  modal.style.display = "none";
  
}
closeModalSpan.addEventListener('click', closeModal);


addButton.onclick = () => {
  modal.style.display = 'block';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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
  let book = new Book(title, author, pages, read);
  library.addBook(title, author, pages, read);
  
  // Reset and hide the form once it's been submitted
  document.getElementById('add-book-form').reset();
  modal.style.display = "none";
}

const resetFormButton = document.querySelector('.reset-form-btn');
resetFormButton.onclick = () => {
  document.getElementById('add-book-form').reset();
}


