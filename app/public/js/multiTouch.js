// Worked and tested on Android Chrome, mainly for the awesome remote debugging. 

var canvas;
var ctx;
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
var h = window.innerHeight;
var w =  window.innerWidth;
ctx.canvas.width  = w;
ctx.canvas.height = h;
var start = false;

// Each element in this array is in the form 
// (x-coord, y-coord, selected (bool))
var balls = [];

function draw(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2*Math.PI, true);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.strokeStyle = "black";
	ctx.stroke();
}

function update() {

	ctx.clearRect(0, 0, w, h);

	for (var b = 0; b < balls.length; b++) {
		if (balls[b] == undefined) {
			continue;
		}
		var coord1 = balls[b].x;
		var coord2 = balls[b].y;
		var shouldDraw = balls[b].s;
		draw(coord1, coord2);
	}
}

function check() {
	t = touches[0]
	for (var b = 0; b < balls.length; b++) {
		var coord1 = balls[b].x;
		var coord2 = balls[b].y;
		if (((t.pageX < (coord1 + 40)) && t.pageX > (coord1 - 40)) &&
			((t.pageY > (coord2 - 40)) && t.pageY < (coord2 + 40))) {
			delete(balls[b]);
			balls[b] = {x : t.pageX, y : t.pageY, s : true};
			return true;
		}
	}

	balls.push({x : t.pageX, y : t.pageY, s : false});
	return false;
}

$(document).ready(function() {
	setInterval(update, 15);

	canvas.addEventListener('touchend', function() {
		for (var c = 0; c < balls.length; c++) {
			balls[c] = {x : balls[c].x, y : balls[c].y, s : false};
		}
	});

	canvas.addEventListener('touchmove', function(event) {
  		event.preventDefault();
  		touches = event.targetTouches;
  		check();
	});

	canvas.addEventListener('touchstart', function(event) {
		event.preventDefault();;
		touches = event.targetTouches;
		check();
	});
})