const addBookForm = document.querySelector("#add-book-form");
const bookTitleInput = document.querySelector("#book-title-input");
const bookAuthorInput = document.querySelector("#book-author-input");
const bookCategorySelect = document.querySelector("#book-category-select");
const noBooksText = document.querySelector("#no-books-text");
const myBooksList = document.querySelector("#my-books-list");


addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const myBookItem = document.createElement("li");
  myBookItem.classList.add("my-book-item");
  myBooksList.appendChild(myBookItem);

  const bookTitle = bookTitleInput.value;
  const myBookTitle = document.createElement("h4");
  myBookTitle.classList.add("my-book-title");
  myBookTitle.textContent = `📚 ${bookTitle}`;
  myBookItem.appendChild(myBookTitle);
  bookTitleInput.value = "";

  const bookAuthor = bookAuthorInput.value;
  const myBookAuthor = document.createElement("p");
  myBookAuthor.classList.add("my-book-author");
  myBookAuthor.textContent = bookAuthor;
  myBookItem.appendChild(myBookAuthor);
  bookAuthorInput.value = "";

  const bookCategory = bookCategorySelect.value;
  const myBookCategory = document.createElement("p");
  myBookCategory.classList.add("my-book-category");
  myBookCategory.textContent = bookCategory;
  myBookItem.appendChild(myBookCategory);
  bookCategorySelect.value = "";

  noBooksText.classList.add("hide");
  myBooksList.classList.remove("hide");
});