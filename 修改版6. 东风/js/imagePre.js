//预加载项目图片
var imgSrcArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "371_1453779101.png", "912_1453779104.png", "1093_1453854255.png", "1536_1453779105.png", "2062_1453779100.png", "2115_1453779103.png", "2214_1453779105.png", "2407_1453779106.png", "2488_1453779103.png", "2740_1453779102.png", "3046_1453779101.png", "3375_1453854403.png", "4169_1453779106.png", "4505_1453779105.png", "4536_1453779106.png", "4575_1453779105.png", "4814_1453854252.png", "5844_1453779104.png", "5865_1453779098.png", "6240_1453779101.png", "6253_1453779102.png", "7030_1453856838.png", "7705_1453779100.png", "8268_1453779103.png", "8279_1453779085.png", "8696_1453854253.png", "9228_1453779104.png", "commen_close.png", "layer_info_checked.png", "layer_info_select.jpg", "layer_info_submit.png", "layer_prize_none.png", "layer_prize.png", "layer_select_bg.png", "layer_share_tip.png", "loading_bg.jpg", "loading_clock.png", "loading_pointer.png", "page1_btn_next.png", "page1_btn_pic_active.png", "page1_btn_pic.png", "page1_btn_prev.png", "page1_btn_share.png", "page1_btn_video_active.png", "page1_btn_video.png", "page1_k4.png", "page1_main_bg.jpg", "page1_nav_active.png", "page1_tab_bg.jpg", "page1_top_bg.jpg", "page1_video_poster.png", "page2_bg.jpg", "page2_btn_intro.png", "page2_btn_start.png", "page3_bg.jpg", "page3_btn_start.png", "page3_choosed_bg.png", "page4_tip.png", "page5_bg.jpg", "share.jpg"];


//盛放对象
var imgBox =[];

//用来显示加载速度
var preProgress = 0;
var preSpeed = 100/imgSrcArr.length;
var preSpeArr = [];

for(var i = 0; i < imgSrcArr.length; i ++){
	var imgs = new Image();
	imgs.index = i;
	imgs.src = "img/"+imgSrcArr[i];
	imgBox.push(imgs);
	imgs.onload = function(){
		
	}
	
	
//	加载速度查看
	if(i == imgSrcArr.length - 1){
		preSpeed = 100;
//		console.log("加载："+preSpeed+"%;");
		preSpeArr.push(preSpeed);
	}else{
//		console.log("加载："+preSpeed*i+"%;");
		preSpeArr.push(preSpeed*i);
	}
	
}
