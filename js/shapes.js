function PartStore() {
    'use strict';

    document.querySelector('#btnRender').addEventListener('click', function () {

        var inputs = document.querySelectorAll('form input');

        var info = {
            Center: document.querySelector('#center').value,
            SWidth: document.querySelector('#sw').value,
            LWidth: document.querySelector('#lw').value,
            Colors: [
                document.querySelector('#cl1').value,
                document.querySelector('#cl2').value,
                document.querySelector('#cl3').value,
                document.querySelector('#cl4').value
            ],
            Instances: document.querySelector('#inst').value
        };

        localStorage.setItem('info', JSON.stringify(info));
        window.location = "render.html";


    }, false);
}

function Start() {
    'use strict';

    var inf = JSON.parse(localStorage.getItem('info'));
    var c = document.querySelector('#can');
    var d = c.getContext('2d');
    var lw = parseInt(inf.LWidth);
    var cx = 0;
    var bam = parseInt(inf.Instances);
    var center = parseInt(inf.Center);
    var sw = parseInt(inf.SWidth);
    

    for (var i = bam; i > 0; i--) {

        cx += 10 / bam * i;

        d.strokeStyle = inf.Colors[Math.floor(Math.random() * inf.Colors.length)];
        d.lineWidth = lw;

        if (i % 2 == 0) {
            d.beginPath();
            d.moveTo(center + cx, center - sw);
            d.lineTo(center + sw, center + cx);
            d.lineTo(center - cx, center + sw);
            d.lineTo(center - sw, center - cx);
            d.closePath();
        } else {
            d.beginPath();
            d.moveTo(center - cx, center - sw);
            d.lineTo(center + sw, center - cx);
            d.lineTo(center + cx, center + sw);
            d.lineTo(center - sw, center + cx);
            d.closePath();
        }

        lw += .09;
        d.stroke();
        d.save();
    }
}
