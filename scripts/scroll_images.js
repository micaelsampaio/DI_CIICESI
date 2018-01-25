var imgs = [];
var timer;
var oldTime;
var mouse = { x: 0, y: 0 };

var screen = {
    height: window.innerHeight,
    width: window.innerWidth
};
var img0 = document.getElementById("img0");
var img1 = document.getElementById("img1");
var img = img0;

img0.height = screen.height * 2;
img1.height = screen.height * 1.5;

window.addEventListener("mousemove", function (event) {
    myFunction(event);
});

function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    mouse.x = x;
    mouse.y = y;

    moveImage();
}
function moveImage() {
    screen.height = window.innerHeight;
    screen.width = window.innerWidth;

    var xp = 100 - (mouse.x * 100 / screen.width);
    var yp = 100 - (mouse.y * 100 / screen.height);

    var w = img.width;
    var h = img.height;

    var ratiox = (w - screen.width);
    var ratioy = (h - screen.height);

    var ny = (ratioy * yp) / 100 * -1;
    var nx = (ratiox * xp) / 100 * -1;

    //var coor = "Coordinates: (" + x + "," + y + ") (" + ratiox + "," + ratioy + "%) (" + round(nx, 2) + ", " + round(ny, 2) + ") (" + w + "," + h + ")";

    if (nx > 0) {
        nx = 0;
    }
    if (nx < (screen.width - w)) {
        nx = (screen.width - w);
    }
    if (ny > 0) {
        ny = 0;
    }
    if (ny < (screen.height - h)) {
        ny = (screen.height - h);
    }

    img.style.top = ny + "px";
    img.style.left = nx + "px";

    //var coor = "Coordinates: (" + x + "," + y + ") (" + w + "%," + ratiox + ") (" + nx + "," + ny + ") (" + w + "," + h + ")";
    //document.getElementById("demo").innerHTML = coor;
}

window.onclick = function () {
    console.log("click")
    startGrow();
}
function startGrow() {
    oldTime = new Date().getTime();
    imgs.push({ img, grow: 1, x: toPx(img.style.left), y: toPx(img.style.top), width: img.width, height: img.height });
    img.style.zIndex = 2;
    img.style.opacity = 1;

    img = (img == img1) ? img0 : img1;
    img.style.zIndex = 1;
    img.style.opacity = 1;

    img0.height = screen.height * 2;
    img1.height = screen.height * 1.5;

    moveImage();
    grow();
}
function grow() {
    var currentTime = new Date().getTime();
    var deltaTime = (currentTime - oldTime) / 1000;

    for (var i = 0; i < imgs.length; i++) {
        var im = imgs[i];
        im.grow += deltaTime * 5;

        var nw = im.width * im.grow;
        var nh = im.height * im.grow;

        var x = im.x - (nw - im.width) / 2;
        var y = im.y - (nh - im.height) / 2;

        im.img.style.left = x + "px";
        im.img.style.top = y + "px";
        im.img.height = nh;
        im.img.style.opacity = 2 - im.grow;

        if (im.grow >= 2) {
            imgs.splice(i, 1);
            i--;
        }
        console.log(deltaTime + " " + x + " " + y + " " + im.grow);
    }

    oldTime = currentTime;
    if (imgs.length > 0) {
        setTimeout(function () { grow() }, 1000 / 60);
    }
}
function round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};
function toPx(str) {
    return Number(str.substring(0, str.indexOf("p")))
}