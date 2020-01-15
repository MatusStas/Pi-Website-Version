function drawPoint(ctx) {
	ctx.beginPath();
	var x = Math.random()*900;
	var y = Math.random()*900;
	if (Math.pow(x-450,2)+Math.pow(y-450,2) > Math.pow(440,2)) {
		ctx.arc(x,y, 0.2, 0, 2 * Math.PI);
		ctx.strokeStyle = "#ff0000";
		ctx.stroke();
	} else {
		ctx.arc(x,y, 0.2, 0, 2 * Math.PI);
		ctx.strokeStyle = "#000000";
		ctx.stroke();
	}
}


function drawCircle(ctx) {
	ctx.beginPath();
	ctx.arc(450, 450, 440, 0.1, 2 * Math.PI);
	ctx.strokeStyle = "#9d9d9d";
	ctx.stroke();
}


function main() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	drawCircle(ctx);
	for (var i = 0; i < 50000; i++) {
		drawPoint(ctx);
	}
}

main()