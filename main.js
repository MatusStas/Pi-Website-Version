
function drawCircle(ctx) {
	ctx.beginPath();
	ctx.arc(250, 250, 240, 0, 2 * Math.PI);
	ctx.strokeStyle = "#9d9d9d";
	ctx.stroke();
}


function main() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	drawCircle(ctx);

}

main()