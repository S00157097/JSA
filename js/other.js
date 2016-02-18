document.querySelector('#btnRetrieve').addEventListener('click', function () {
    'use strict';
    
    var item, ul, image, check, li = [];
    
    if (document.querySelectorAll('.item').length === 0) {
        for (var i = 0; i < localStorage.length - 1; i++) {
            
            var data = JSON.parse(localStorage.getItem(localStorage.key(i))); /**/
            item = document.createElement('div');
            item.setAttribute('data-key', localStorage.key(i));
            item.setAttribute('data-title', data.Title);
            item.classList.add('item');
            item.style.position = 'relative';
            
            ul = document.createElement('ul');

            image = document.createElement('img');
            image.setAttribute('src', data.Image);
            image.setAttribute('alt', 'Image'+ (i + 1));

                
            for(var k = 0; k < 4; k++) {
                li[k] = document.createElement('li');
                ul.appendChild(li[k]);
            }

            li[0].innerHTML = "Title: " + data.Title;
            li[1].innerHTML = "Publisher: " + data.Publisher;
            li[2].innerHTML = "Published Date: " + data.PubDate;
            li[3].innerHTML = "ISBN: " + data.ISBN; 
            
            check = document.createElement('input');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('name', 'item');
            check.setAttribute('value', 'book' + (i));
            check.style.position = 'absolute';
            check.style.bottom = '20px';
            check.style.left = '20px';
            
            item.appendChild(ul);
            item.appendChild(check);
            item.appendChild(image);
            document.querySelector('#content').appendChild(item);
        }           
    }
}, false);


document.querySelector('#btnClear').addEventListener('click', function () {
    'use strict';
    
    localStorage.clear();
    alert("Storage Cleared");
    location.reload();
}, false);


document.querySelector('#btnRemove').addEventListener('click', function () {
    'use strict';
    
    var c = document.querySelectorAll('input[type="checkbox"]');
    var toDelete = [];
    var counter = 0;
    
    for (var i = 0; i < c.length; i++) {
        if(c[i].checked === true) {
            toDelete[counter] = c[i].parentNode.getAttribute('data-key');
            counter++;
            
            c[i].parentNode.parentNode.removeChild(c[i].parentNode);
        }
    }
    
    for (var i = 0; i < toDelete.length; i++)
        localStorage.removeItem(toDelete[i]);

}, false);


document.querySelector('#btnRem').addEventListener('click', function () {
    'use strict';
    
    var text = document.querySelector('#txtRemove').value;
    var items = document.querySelectorAll('.item');
    
    
    for(var i = 0; i < items.length; i++) {
        if(items[i].getAttribute('data-title') === text) {
            localStorage.removeItem(items[i].getAttribute('data-key'));
            items[i].parentNode.removeChild(items[i]); 
        }
    }
    
}, false);


