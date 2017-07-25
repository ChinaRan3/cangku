//加载页面图片
		var circleBackground = document.querySelector(".circle");
		circleBackground.style.backgroundImage = "url(img/page5_bg.jpg)"

		var succeedImage = document.querySelector(".succeed img");
		succeedImage.src = "img/7030_1453856838.png";

		var circleT = document.querySelector(".cirCir");

		var circleRunning = document.querySelector(".running .runningCir");
		circleRunning.src = "img/8696_1453854253.png";

		var selectYellow = document.querySelector(".cirCir .runningYel");
		selectYellow.src = "img/3375_1453854403.png";

		var selsctIm = document.querySelector(".selecImge");
		selsctIm.src = "img/1093_1453854255.png";

		//祝贺中奖页面
		var rewardD = document.querySelector(".reward");
		rewardD.style.backgroundImage = "url(img/layer_prize.png)";
		
		rewardD.addEventListener("touchstart",function(){
			window.location.href = "firstPage.html";
		},false);

		selsctIm.addEventListener("touchstart",function(){
			rotate();
		},false);
		// selsctIm.onclick = function() {
		// 	rotate();
		// }

		//获取下拉选择数字
		var circleOption = document.querySelector(".circle form select");
		var rotateCirN = 10.8;
		var timerTwo = null;

		var i = 0;
		var roN = 0;

		function rotate() {
			timerTwo = setInterval(function() {
				i++;
				if(circleOption.value == 06) {
					roN = 55;
				} else if(circleOption.value == 12) {
					roN = 42;
				} else if(circleOption.value == 18) {
					roN = 72;
				} else if(circleOption.value == 24) {
					roN = 64;
				} else if(circleOption.value == 30) {
					roN = 60;
				} else if(circleOption.value == 36) {
					roN = 58;
				} else {
					roN = 0;
				}
				
				if(i < roN ) {
					circleT.style.transform = "rotate(" + rotateCirN * i + "deg)";
				} else if(i > roN + 20){
					if(roN == 0){
						clearInterval(timerTwo);
						timerTwo = null;
					}else{
						rewardD.style.display = "block";
						
						}
						return false;
					}
						
				
			}, 50)
		}
