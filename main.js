function drawPoint(ctx) {
	var inside = 0;
	var outside = 0;
	var arr = [];

	for (var i = 0; i < Math.pow(10,5); i++) {
		ctx.beginPath();
		var x = (Math.random()*1800).toFixed(0);
		var y = (Math.random()*900).toFixed(0);
		if (Math.pow(x-900,2)+Math.pow(y-450,2) > Math.pow(450,2)) {
			ctx.arc(x,y, 0.1, 0, 2 * Math.PI);
			ctx.strokeStyle = "#ff0000";
			ctx.stroke();
			outside++;
			arr.push([x,y]);
		} else {
			ctx.arc(x,y, 0.1, 0, 2 * Math.PI);
			ctx.strokeStyle = "#000000";
			ctx.stroke();
			inside++;
		}		
		arr.push([x,y]);
	}
	return [inside, outside];
}


function drawCircle(ctx) {
	ctx.beginPath();
	ctx.arc(900, 450, 450, 0, 2 * Math.PI);
	ctx.strokeStyle = "#9d9d9d";
	ctx.stroke();
}


function main() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	drawCircle(ctx);
	var result = drawPoint(ctx);

	var inside = result[0];
	var outside = result[1];

	var pi = 8*(inside/(inside+outside));
	var text = document.getElementById("inside").innerHTML = "inside: " + inside.toString(); 
	var text = document.getElementById("outside").innerHTML = "outside: " + outside.toString(); 
	var text = document.getElementById("pi").innerHTML = pi.toString(); 
}

main()