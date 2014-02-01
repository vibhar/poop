var windowHeight = window.innerHeight;
var windowWidth =  window.innerWidth;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = windowWidth;
ctx.canvas.height = windowHeight;
var velocityX = 1;
var velocityY = 1;
var dx = -3;
var dy = 3;
var radius = 1;
var score = 100;
var shouldMove = false;

var blueball = function(){
    this.x = Math.round(Math.random() * windowWidth);
    this.y = Math.round(Math.random() * windowHeight);
    this.color = "blue";
}

var redball = function(){
    this.x = Math.round(Math.random() * windowWidth);
    this.y = Math.round(Math.random() * windowHeight);
    this.color = "red";
}

var blue = new(blueball);
var red = new(redball);

function drawScore() {
    ctx.fillStyle = "blue";
    ctx.font = "bold 16px Arial";
    ctx.fillText("Score: " + score, 50, 50);
}

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 45, 0, 2 * Math.PI, false);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function moveBall(ball, dx, dy) {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    if (((blue.x - 45) <= ball.x) && (ball.x <= (blue.x + 45)) &&
    ((blue.y - 45) <= ball.y) && (ball.y <= (blue.y + 45))) {
        red = new(redball);
        blue = new(blueball);
        score = score + 10;
        drawBall(red);
        drawBall(blue);
        drawScore();
    }

    else {

    if (shouldMove == true) {
        if (ball.x < 45) {
            ball.x = 45;
            //dx = -dx;
        }

        if (ball.x > (windowWidth - 45)) {
            ball.x = windowWidth - 45;
            //dx = -dx;
        }

        if (ball.y < 45) {
            ball.y = 45;
            //dy = -dy;
        }

        if (ball.y > windowHeight - 45) {
            ball.y = windowHeight - 45;
            //dy = -dy;
        }

            ball.x = velocityX*(dx) + ball.x;
            ball.y = velocityY*(dy) + ball.y;
        }

        drawBall(blue);
        drawBall(ball);
    }
    drawScore();
}

function onTimer() {
    score = score -1;
}

function move() {
    moveBall(red, 3, 3);
}

window.addEventListener('devicemotion', function(event) {
    // the event object will contain acceleration and rotation values if available

    // I ONLY GOT IT TO WORK ON FIREFOX FOR ANDROID, PLS DON'T TEST ON ANYTHING ELSE. 

    // Android specific orientation. Will be shitty on iPhone. 
    velocityX = -1 * event.accelerationIncludingGravity.x;
    velocityY = event.accelerationIncludingGravity.y;


    if (velocityX > 1 || velocityY > 1) {
        shouldMove = true;
    } 

    if (velocityX < 1 || velocityY < 1) {
        shouldMove = true;
    } 

    else {
        shouldMove = false;
    }

    console.log(event);
});

$(document).ready(function() {
    window.setInterval(onTimer, 1000);
    window.setInterval(move, 10);
});