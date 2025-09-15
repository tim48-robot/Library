const myLibrary = [];
const gridContainer = document.querySelector("#gridcontainer");

function Book(name, author){
    this.name = name;
    this.author = author;
    this.id = crypto.randomUUID();
}   

function createAddBook(name, author, arrayName){
    const book = new Book(name, author);
    arrayName.push(book);
}

createAddBook("The way of making friends", "justin", myLibrary);
createAddBook("The way of making enemies", "Sun Tzu", myLibrary)

for (let i=0; i<myLibrary.length; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "bookCard";
    let span = document.createElement("span");
    let lineBreak = document.createElement("br");
    let authorName = document.createElement("span");

    gridContainer.appendChild(newDiv);
    span.textContent = myLibrary[i].name;
    newDiv.appendChild(span);
    newDiv.appendChild(lineBreak);
    authorName.textContent = myLibrary[i].author;
    newDiv.appendChild(authorName);

}

