/*global alert, console*/

var bookCount = localStorage.getItem('count') || 0;



function WriteFromFile(file) {
    'use strict';
    
    var reader = new FileReader();
    
    reader.onload = function () {
        var image = new Image();
        image.src = reader.result;
        
        document.querySelector('#dropZone').appendChild(image);
    };
    reader.onerror = function () {
        alert("There was an error reading the file");
    };
    
    reader.readAsDataURL(file);
}

document.querySelector('#btnStore').addEventListener('click', function () {
    'use strict';
    
    var title = document.querySelector('#title').value,
        publisher = document.querySelector('#pub').value,
        publisherDate = document.querySelector('#datePub').value,
        isbn = document.querySelector('#isbn').value,
        newBook,
        image = document.querySelector('#dropZone img').getAttribute('src');

    if (title !== "" || publisher !== "" || publisherDate !== "" || isbn !== "") {
        
        newBook = {
            Title: title,
            Publisher: publisher,
            PubDate: publisherDate,
            ISBN: isbn,
            Image: image
        };
        
        localStorage.setItem('book[' + bookCount + ']', JSON.stringify(newBook));
        localStorage.setItem('count', (parseInt(bookCount, 10) + 1));
        
        console.log(localStorage.getItem('count'));
        console.log(image);
        
        location.reload();
        
        alert("Stored");
        
    } else {
        
        alert("Fill In All Blank Fields");
    }
}, false);



window.addEventListener('load', function () {
    'use strict';
    
    document.querySelector('#dropZone').addEventListener('drop', function (e) {
        
        e.preventDefault();
        document.querySelector('#span').parentNode.removeChild(document.querySelector('#span'));
        WriteFromFile(e.dataTransfer.files[0]);
    }, false);
    
    document.querySelector('#dropZone').addEventListener('dragover', function (e) {
        
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }, false);
}, false);


window.addEventListener("dragover", function (e) {
    'use strict';
    
    e = e || event;
    e.preventDefault();
}, false);

window.addEventListener("drop", function (e) {
    'use strict';
    
    e = e || event;
    e.preventDefault();
}, false);







