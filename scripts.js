const myLibrary = [];
const gridContainer = document.querySelector("#gridcontainer");
const buttonDialog = document.querySelector("#showDialog");
const buttonConfirm = document.querySelector("#confirmForm");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const bookNameUser = document.querySelector("#bookName");
const bookAuthorUser = document.querySelector("#bookAuthor");

function Book(name, author){
    this.name = name;
    this.author = author;
    this.id = crypto.randomUUID();
    this.read = false;
}   

Book.prototype.read = function() {
    return this.read = true;
}

function createAddBook(name, author, arrayName){
    const book = new Book(name, author);
    arrayName.push(book);
}


createAddBook("The way of making friends", "justin", myLibrary);
createAddBook("The way of making enemies", "Sun Tzu", myLibrary);
createAddBook("The way of making friends", "justin", myLibrary);
createAddBook("The way of making enemies", "Sun Tzu", myLibrary);
createAddBook("The way of making friends", "justin", myLibrary);
createAddBook("The way of making enemies", "Sun Tzu", myLibrary);
addingtoDom();


function addingtoDom(){
    for (let i=0; i<myLibrary.length; i++){
        if (document.querySelector(`[data-id="${myLibrary[i].id}"]`) != null){
            continue;
        }
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
        newDiv.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" class="svgResize readed" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>')
        newDiv.insertAdjacentHTML('beforeend' , '<svg xmlns="http://www.w3.org/2000/svg" class="svgResize delete" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>');

        const deleteItem = newDiv.querySelector(".delete");
        const bookId = myLibrary[i].id;
        deleteItem.addEventListener("click", () => {
            for (let j=0; j<myLibrary.length; j++){
                if (myLibrary[j].id === bookId){
                    myLibrary.splice(j, 1);
                    newDiv.remove();
                    break;
                }
            }
        });

        const eyeRead = newDiv.querySelector(".readed");
        eyeRead.addEventListener("click", ()=> {
            myLibrary[i].read;
            newDiv.style.backgroundColor = "gray";
        })
    }
}

buttonDialog.addEventListener("click", () => {
    document.querySelector("dialog").showModal();
})

buttonConfirm.addEventListener("click", (event) => {
    if (!form.checkValidity()){
        return;
    }


    event.preventDefault();
    myLibrary.push(new Book(bookNameUser.value, bookAuthorUser.value));
    addingtoDom();
    console.log(myLibrary);
    dialog.close();
})




