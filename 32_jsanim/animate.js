var c = document.getElementById("playground"); 
var dotButton = document.getElementById("buttonCircle"); 
var stopButton = document.getElementById("buttonStop");
var dvdButton = document.getElementById("dvd")

var ctx = c.getContext("2d");
ctx.fillStyle = "#3EB489";
var requestID; 

var clear = (e) => {
    e.preventDefault(); //what dis?
    ctx.clearRect(0, 0, 500, 500);
};

var dvdLogoSetup = function() {
    window.cancelAnimationFrame(requestID);

    var rectWidth = 600;
    var rectHeight = 400;

    //make sure the picture doesn't spill out
    var rectX = Math.random()*500;
    var rectY = Math.random()*500;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
        ctx.clearRect(0,0,c.width,c.height);
        //ctx.fillRect(rectX,rectY,rectWidth,rectHeight);
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectheight);
        if (rectX == 0) {
            xVel = 1;
        }
        if (rectX == c.width) {
            xVel = -1;
        }
        if (rectY == 0 || rectY == c.height) {
            yVel = 1;
        }
        rectX = rectX + xVel;
        rectY = rectY + yVel;
    };
    dvdLogo();
 };
        
        
var drawDot = () => {
    window.cancelAnimationFrame(requestID);
    clear();
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.fill();
    if (growing) {
        if (radius < 250) {
            radius = radius+1;
        }
        else { growing = false; }
    } else {
        if (radius > 0) {
            radius = radius-1;
        }
        else { growing = true; }
    }
    requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdLogoSetup);
stopButton.addEventListener("click", stopIt);