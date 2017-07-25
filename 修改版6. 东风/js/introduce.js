//第一个按钮的点击事件
var firstBtn = document.querySelector(".choose_first");
firstBtn.addEventListener("touchstart", first_btn, false);

function first_btn() {
	$(".choose_first").css('background-image', 'url("img/page3_choosed_bg.png")');
	$(".choose_second").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_third").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_fourth").css('background-image', 'url("img/4575_1453779105.png")');
	$(".parts").css({
		'width': '4.7rem',
		'height': '5.3rem',
		'background-image': 'url("img/7705_1453779100.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'left': '0.5rem',
		'top': '5.5rem',
		'animation': 'parts1_move 1s linear forwards'
	});
	$(".instruction").css({
		'width': '9rem',
		'height': '7rem',
		'background-image': 'url("img/2062_1453779100.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'right': '0',
		'top': '4rem',
		'animation': 'instruction1_move 1s linear forwards'
	})
	$(".detail_point").css({
		'left': '4.7rem',
		'top': '13.3rem',
		'width': ' 0.7rem',
		'height': '0.7rem',
		'background-image': 'url("img/1536_1453779105.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'z-index': '99',
		'animation': 'point_size 1s linear infinite'
	})
}

//第二个按钮的点击事件
var secondBtn = document.querySelector(".choose_second");
secondBtn.addEventListener("touchstart", second_btn, false);

function second_btn() {
	$(".choose_second").css('background-image', 'url("img/page3_choosed_bg.png")');
	$(".choose_first").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_third").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_fourth").css('background-image', 'url("img/4575_1453779105.png")');
	$(".parts").css({
		'background-image': 'url("img/6240_1453779101.png")',
		'height': '8rem',
		'top': '4rem',
		'width': '4.7rem',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'left': '0.5rem',
		'animation': 'parts2_move 1s linear forwards'
	});
	$(".instruction").css({
		'background-image': 'url("img/2740_1453779102.png")',
		'width': '7rem',
		'height': '5rem',
		'right': '1rem',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'top': '4rem',
		'animation': 'instruction2_move 1s linear forwards'
	})
	$(".detail_line").css({
		'height': '2.4rem',
		'width': '12rem',
		'background-image': 'url("img/2115_1453779103.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'right': '0',
		'top': '5rem'
	});
	$(".detail_point").css({
		'left': '7.5rem',
		'top': '12.5rem',
		'width': ' 0.7rem',
		'height': '0.7rem',
		'background-image': 'url("img/1536_1453779105.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'z-index': '99',
		'animation': 'point_size 1s linear infinite'
	})
}

//第三个按钮的点击事件
var thirdBtn = document.querySelector(".choose_third");
thirdBtn.addEventListener("touchstart", third_btn, false);

function third_btn() {
	$(".choose_third").css('background-image', 'url("img/page3_choosed_bg.png")');
	$(".choose_first").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_second").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_fourth").css('background-image', 'url("img/4575_1453779105.png")');
	$(".parts").css({
		'background-image': 'url("img/2488_1453779103.png")',
		'height': '7rem',
		'top': '4rem',
		'width': '4.7rem',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'left': '0.5rem',
		'animation': 'parts3_move 1s linear forwards'
	})
	$(".instruction").css({
		'background-image': 'url("img/8268_1453779103.png")',
		'width': '9rem',
		'height': '7rem',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'right': '0',
		'top': '4rem',
		'animation': 'instruction3_move 1s linear forwards'
	})
	$(".detail_point").css({
		'left': '8.5rem',
		'top': '13.8rem',
		'width': ' 0.7rem',
		'height': '0.7rem',
		'background-image': 'url("img/1536_1453779105.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'z-index': '99',
		'animation': 'point_size 1s linear infinite'
	})
}

//第四个按钮的点击事件
var fourthBtn = document.querySelector(".choose_fourth");
fourthBtn.addEventListener("touchstart", fourth_btn, false);

function fourth_btn() {
	$(".choose_fourth").css('background-image', 'url("img/page3_choosed_bg.png")');
	$(".choose_first").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_second").css('background-image', 'url("img/4575_1453779105.png")');
	$(".choose_third").css('background-image', 'url("img/4575_1453779105.png")');
	$(".parts").css({
		'background-image': 'url("img/912_1453779104.png")',
		'height': '4rem',
		'top': '6.5rem',
		'width': '4.7rem',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'left': '0.5rem',
		'animation': 'parts4_move 1s linear forwards'
	});
	$(".instruction").css({
		'background-image': 'url("img/9228_1453779104.png")',
		'width': '7rem',
		'height': '4rem',
		'right': '1rem',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'top': '4rem',
		'animation': 'instruction4_move 1s linear forwards'
	})
	$(".detail_point").css({
		'left': '7.5rem',
		'top': '15.5rem',
		'width': ' 0.7rem',
		'height': '0.7rem',
		'background-image': 'url("img/1536_1453779105.png")',
		'background-size': '100% 100%',
		'background-repeat': 'no-repeat',
		'position': 'absolute',
		'z-index': '99',
		'animation': 'point_size 1s linear infinite'
	})
}

//每次点击执行动画

//启动K4按钮的点击事件
$(".start_btn").click(function() {
	$(".wrapIntroduce").css('display', 'none');
	self.location='K4_play.html';
})