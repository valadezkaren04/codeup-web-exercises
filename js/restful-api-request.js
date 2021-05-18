"use strict";
let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getBooks = () => {
    fetch('https://omniscient-glacier-meal.glitch.me/books')
        .then(resp => resp.json())
        .then(books => {
            let htmlStr = "";
            for (let book of books) {
                htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $("#container").html(htmlStr);
        });
}

fetch('https://omniscient-glacier-meal.glitch.me/books/1') //gets single object from an array of object (one specific book) that is specified in the url by '/1'
    .then(resp => resp.json())
    .then(book => console.log(book));

//POST
// newBook is the object
let newBook = {
    "title": "Percy Jackson & The Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook) //
}

$('#addPercy').click(() => {
    fetch('https://omniscient-glacier-meal.glitch.me/books', postOptions)
        // .then(resp => resp.json())
        .then(getBooks); //getBooks was added to the books API for the button's purpose
});

//PUT
let putThis = {
    "title": "Percy Jackson & the Sea of Monsters", //does a modification to put info in '/6' ; PUT is more like an override. This example is technically incorrect with title only.
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    } //author is needed b.c PUT just puts the info provided.
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis) //
}
fetch('https://omniscient-glacier-meal.glitch.me/books/6', putOptions).then(getBooks);

//PATCH
let patchThis = {
    "title": "Percy Jackson & the Titan's Curse",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis) //
}
fetch('https://omniscient-glacier-meal.glitch.me/books/7', patchOptions).then(getBooks);
getBooks();

//DELETE
let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
}

$("#uniqueBooks")
fetch('https://omniscient-glacier-meal.glitch.me/books/8', deleteOptions).then(getBooks);


