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
createAddBook("The way of making enemies", "Sun Tzu", myLibrary);

for (let i=0; i<myLibrary.length; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "bookCard";
    newDiv.setAttribute("data-id", myLibrary[i].id);
    let title = document.createElement("span");
    title.className = "weighted";
    let lineBreak = document.createElement("br");
    let authorName = document.createElement("span");

    title.textContent = "Title: " +  myLibrary[i].name;
    authorName.textContent = "Author name: " + myLibrary[i].author;


    gridContainer.appendChild(newDiv);
    newDiv.appendChild(title);
    newDiv.appendChild(lineBreak);
    newDiv.appendChild(authorName);
    newDiv.insertAdjacentHTML('beforeend' , '<svg xmlns="http://www.w3.org/2000/svg" class="svgResize" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>');

    const svgClickable = newDiv.querySelector(".svgResize");
    const bookId = myLibrary[i].id;
    svgClickable.addEventListener("click", () => {
        for (let j=0; j<myLibrary.length; j++){
            if (myLibrary[j].id === bookId){
                myLibrary.splice(j, 1);
                newDiv.remove();
                break;
            }
        }
    });
}


