/*global alert, console*/

var bookCount = localStorage.getItem('count') || 0;




function StoreBook() {

    var title = document.querySelector('#title').value,
        publisher = document.querySelector('#pub').value,
        publisherDate = document.querySelector('#datePub').value,
        isbn = document.querySelector('#isbn').value,
        newBook = {},
        image = document.querySelector('#dropZone').innerHTML;

    if (title !== "" || publisher !== "" || publisherDate !== "" || isbn !== "") {
        
        newBook.Title = title;
        newBook.Publisher = publisher;
        newBook.PublisherDate = publisherDate;
        newBook.ISBN = isbn;
        newBook.Image = image;
        
        localStorage.setItem('book[' + bookCount + ']', JSON.stringify(newBook));
        localStorage.setItem('count', bookCount += 1);
        
        console.log(localStorage.getItem('count'));
    } else {
        
        alert("Fill In All Blank Fields");
    }
}




function WriteFromFile(file) {
    
    var reader = new FileReader();
    
    reader.onload = function () {
        var image = new Image();
        image.src = reader.result;
        
        document.querySelector('#dropZone').appendChild(image);
        console.log(reader.result);
    };
    reader.onerror = function () {
        alert("There was an error reading the file");
    };
    
    reader.readAsDataURL(file);
}





window.addEventListener('load', function () {

    document.querySelector('#btnStore').addEventListener('click', StoreBook, false);
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


window.addEventListener("dragover",function(e){
    
  e = e || event;
  e.preventDefault();
},false);

window.addEventListener("drop",function(e){
    
  e = e || event;
  e.preventDefault();
},false);







