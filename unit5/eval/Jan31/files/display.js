import Update, { Delete } from "./update.js";
export function AddData() {
  const cInput = document.createElement("input");
  cInput.placeholder = "Enter Here to add comment";
  cInput.id = `commentInput${id}`;
  const upBtn = document.createElement("button");
  upBtn.textContent = "Update Comment";
  upBtn.onclick = () => Update(comments, id);
}

export default function displayData(res) {
  console.log(res);
  let resDiv = document.createDocumentFragment();
  for (let x of res) {
    const { book, author, id, comments } = x;
    let div = document.createElement("div");
    div.className = "resultsDiv";
    div.id = id;
    let name = document.createElement("h3");
    name.textContent = `Book : ${book}`;
    let authorN = document.createElement("h5");
    authorN.textContent = `Author : ${author}`;
    let comment = document.createElement("p");
    comment.textContent = `comments: ${[...comments]}`;
    const upBtn = document.createElement("button");
    upBtn.textContent = "Update Comment";
    upBtn.onclick = () => Update(comments, id);
    const cInput = document.createElement("input");
    cInput.placeholder = "Enter Here to add comment";
    cInput.id = `commentInput${id}`;
    const deBtn = document.createElement("button");
    deBtn.textContent = "Delete Book";
    deBtn.onclick = Delete;
    div.append(name, authorN, comment, cInput, upBtn);
    resDiv.appendChild(div);
  }

  return resDiv;
}
