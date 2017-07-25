//获取屏幕宽高
var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;

//获取预加载指针信息
var clockPre = document.querySelector(".clockPre");
var clockClock = document.querySelector(".clockClock");
var clockPointer = document.querySelector(".clockPointer");
var clockP = document.querySelector(".clockPre p");

clockPre.innerHeight = screenHeight;
clockPre.innerWidth = screenWidth;

clockPre.style.backgroundImage = "url(img/loading_bg.jpg)";

//转动
var rotaten = 0;
var rotateRes = 290 / (imgSrcArr.length);
var clockArr = Math.ceil(preSpeArr);
var rotateDeg = 0;

//指针转动函数
function rotateM() {
	rotaten++;
		if(rotaten < imgSrcArr.length - 1) {
			rotateDeg = rotaten * rotateRes - 140;
			clockPointer.style.transform = "rotate(" + rotateDeg + "deg)";
			clockP.innerHTML = Math.ceil(preSpeArr[rotaten]) +2+ "%";
		} else {
			clockP.innerHTML = "100%";
			if(rotaten < imgSrcArr.length + 20){
				window.location.href = "firstPage.html";
				clockPre.style.display = "none";
			}
			return false;
		}
	
}

//给指针加图片
clockClock.src = imgBox[41].src;
clockPointer.src = imgBox[42].src;

	//指针转动
	var timer = setInterval(rotateM,10);

	