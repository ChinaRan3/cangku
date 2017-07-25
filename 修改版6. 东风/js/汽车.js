var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.timer = null;
var num = 0;
document.getElementsByTagName("html")[0].style.fontSize = window.innerWidth / 20 + "px";

var pincarr = [];
var a = 0;
var pinc = ["img/video/che_1.jpg", "img/video/che_2.jpg", "img/video/che_3.jpg", "img/video/che_4.jpg", "img/video/che_5.jpg", "img/video/che_6.jpg", "img/video/che_7.jpg", "img/video/che_8.jpg", "img/video/che_9.jpg"];
for(var i = 0; i < pinc.length; i++) {
	var img = new Image;
	img.src = pinc[i];
	img.index = i;
	pincarr.push(img);
	img.onload = function() {
		a++
		if(a == pincarr.length) {
//			window.addEventListener("touchstart", function(e) {
//				e.preventDefault();
//				ctx.timer = setInterval(function() {
//					ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//					num++;
//					ctx.drawImage(pincarr[num], 0, 0, window.innerWidth, window.innerHeight);
//					if(num == 8) {
//						ctx.drawImage(pincarr[num], 0, 0, window.innerWidth, window.innerHeight);
//						clearInterval(ctx.timer);
//
//					}
	touch.on(canvas, "touchstart", function(e) {
		e.preventDefault();
		ctx.timer = setInterval(function() {
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			imgNum++;
			ctx.drawImage(pincarr[imgNum], 0, 0, window.innerWidth, window.innerHeight);
		if(imgNum == 235) {
			clearInterval(ctx.timer);
		}
				}, 1000 / 24)

			}, false);

		}

	}
}

//function dddd() {
//	touch.on("canvas", "touchstart", function(e) {
//		e.preventDefault();
//		ctx.timer = setInterval(function() {
//			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//			imgNum++;
//			ctx.drawImage(pincarr[imgNum], 0, 0, window.innerWidth, window.innerHeight);
//			//			if(imgNum == 235) {
//			//				clearInterval(ctx.timer);
//			//			}
//		}, 1000 / 24)
//	})
//
//}
//
//touch.on(ctx, "touchend", function() {
//	clearInterval(ctx.timer);
//});