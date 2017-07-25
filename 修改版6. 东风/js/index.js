var tHleft = document.querySelector(".tHleft");
var tHright = document.querySelector(".tHright");
var tHleft2 = document.querySelector(".tHleft2");
var tHleft1 = document.querySelector(".tHleft1");
var tHr1 = document.querySelector(".tHr1");
var tHr2 = document.querySelector(".tHr2");
var showImg = document.querySelector(".showImg");
var showtv = document.querySelector(".showtv");
var swiper = document.querySelector(".swiper-container");
var actionExp = document.querySelector(".actionExp");
var start = document.body.scrollTop;
var end = 400;
var timer = null;
var nation = document.querySelector(".nation");
var father = document.querySelector(".father");
var luck = document.querySelector(".luck");
var p1 = document.querySelector(".p1");
var p2= document.querySelector(".p2");
var p3 = document.querySelector(".p3");
var img1=document.querySelector(".img1");
//试试运气
luck.onclick=function(){
	window.location.href = "layer_info.html";
}

document.getElementsByTagName("html")[0].style.fontSize = window.innerWidth / 20 + "px";
tHleft.onclick=function(){
	tHleft2.style.display = "block";
	tHleft1.style.display = "none";
	tHr2.style.display = "none";
	tHr1.style.display = "block";
	showImg.style.display = "block";
}
tHright.onclick=function(){
	tHr2.style.display = "block";
	tHr1.style.display = "none";
	tHleft2.style.display = "none";
	tHleft1.style.display = "block";
	showImg.style.display = "none";
	showtv.style.display = "none";
}
p1.onclick=function(){
	actionExp.style.display = "block";
}
img1.onclick=function(){
	actionExp.style.display = "none";
}
showImg.onclick=function(){
	showImg.style.display = "none";
	showtv.style.display = "block";
		showtv.play();
	showtv.onended = function() {
		showImg.style.display = "block";
		showtv.style.display = "none";
	}
}
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationClickable: true,
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: 2500,
	autoplayDisableOnInteraction: false
});

p2.onclick=function(){
	clearTimer();
	timer = setInterval(function() {
		start += 25;
		console.log(start);
		if(start >= end) {

			start = end;
			clearTimer();
		}
		document.body.scrollTop = start;
	}, 30);
}

function clearTimer() {
	clearInterval(timer);
	timer = null;
}
p3.onclick=function(){
	nation.style.display = "block";
	timer = setInterval(function() {
		nation.style.display = "none";
	}, 2000);
}

//touch事件
//当前块的状态
var disX = 0;
var disY = 0;
//变化量
var x = 0;
var y = 0;

//取消默认事件
touch.on(father, "touchStart touchmove", function(e) {
	e.preventDefault();
})

//三个参数 对象  方式  回调
touch.on(father, "drag", function(e) {
	//获取偏移量
	y = disY + e.y;
	father.style.transform = "translateY(" + y + "px)";
	father.style.translate = "all 0 linear";
});

//修正d的初始状态
touch.on(father, "dragend", function() {
	//修正d的初始状态
	if(y > 0) {
		father.style.transform = "translateY(" + 0 + "px)";
		father.style.translate = "all 0.2s linear";
		y = 0;
	} else if(y < -1500) {
		father.style.transform = "translateY(" + 0 + "px)";
		father.style.translate = "all 0.2s linear";
		y = 0;
	}
	disY = y;
});



















