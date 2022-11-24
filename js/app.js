document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript loaded");

  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteButton = document.querySelector("#delete-all");
  deleteButton.addEventListener("click", handleDeleteClick);
});

const handleFormSubmit = function (event) {
  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;
  const newLi = document.createElement("li");
  const newTitleDiv = document.createElement("div");
  const newAuthorDiv = document.createElement("div");
  const newCategoryDiv = document.createElement("div");
  newLi.className = `reading-item ${category}`;
  newTitleDiv.className = "title";
  newAuthorDiv.className = "author";
  newCategoryDiv.className = "category";
  newLi.appendChild(newTitleDiv).textContent = `Title: ${title}`;
  newLi.appendChild(newAuthorDiv).textContent = `Author: ${author}`;
  newLi.appendChild(newCategoryDiv).textContent = `Category: ${category}`;
  document.querySelector("#reading-list").appendChild(newLi);
  event.preventDefault();
  this.reset();
};

const handleDeleteClick = function (event) {
  const readingList = document.querySelector("#reading-list")
  while (readingList.hasChildNodes()) {
    readingList.removeChild(readingList.firstChild)
  }
}
