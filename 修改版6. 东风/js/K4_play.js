var keep_timer = null;
var play_timer = null;

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

keep_timer = setTimeout(function() {
	$(".rule").css('display', 'none');
	context.drawImage(imgs[0], 0, 0, canvas.width, canvas.height);
}, 3000)


var imgPlayArr = ['che_1.jpg', 'che_2.jpg', 'che_3.jpg', 'che_4.jpg', 'che_5.jpg', 'che_6.jpg', 'che_7.jpg', 'che_8.jpg', 'che_9.jpg', 'che_10.jpg', 'che_11.jpg', 'che_12.jpg', 'che_13.jpg', 'che_14.jpg', 'che_15.jpg', 'che_16.jpg', 'che_17.jpg', 'che_18.jpg', 'che_19.jpg', 'che_20.jpg', 'che_21.jpg', 'che_22.jpg', 'che_23.jpg', 'che_24.jpg', 'che_25.jpg', 'che_26.jpg', 'che_27.jpg', 'che_28.jpg', 'che_29.jpg', 'che_30.jpg', 'che_31.jpg', 'che_32.jpg', 'che_33.jpg', 'che_34.jpg', 'che_35.jpg', 'che_36.jpg', 'che_37.jpg', 'che_38.jpg', 'che_39.jpg', 'che_40.jpg', 'che_41.jpg', 'che_42.jpg', 'che_43.jpg', 'che_44.jpg', 'che_45.jpg', 'che_46.jpg', 'che_47.jpg', 'che_48.jpg', 'che_49.jpg', 'che_50.jpg', 'che_51.jpg', 'che_52.jpg', 'che_53.jpg', 'che_54.jpg', 'che_55.jpg', 'che_56.jpg', 'che_57.jpg', 'che_58.jpg', 'che_59.jpg', 'che_60.jpg', 'che_61.jpg', 'che_62.jpg', 'che_63.jpg', 'che_64.jpg', 'che_65.jpg', 'che_66.jpg', 'che_67.jpg', 'che_68.jpg', 'che_69.jpg', 'che_70.jpg', 'che_71.jpg', 'che_72.jpg', 'che_73.jpg', 'che_74.jpg', 'che_75.jpg', 'che_76.jpg', 'che_77.jpg', 'che_78.jpg', 'che_79.jpg', 'che_80.jpg', 'che_81.jpg', 'che_82.jpg', 'che_83.jpg', 'che_84.jpg', 'che_85.jpg', 'che_86.jpg', 'che_87.jpg', 'che_88.jpg', 'che_89.jpg', 'che_90.jpg', 'che_91.jpg', 'che_92.jpg', 'che_93.jpg', 'che_94.jpg', 'che_95.jpg', 'che_96.jpg', 'che_97.jpg', 'che_98.jpg', 'che_99.jpg', 'che_100.jpg', 'che_101.jpg', 'che_102.jpg', 'che_103.jpg', 'che_104.jpg', 'che_105.jpg', 'che_106.jpg', 'che_107.jpg', 'che_108.jpg', 'che_109.jpg', 'che_110.jpg', 'che_111.jpg', 'che_112.jpg', 'che_113.jpg', 'che_114.jpg', 'che_115.jpg', 'che_116.jpg', 'che_117.jpg', 'che_118.jpg', 'che_119.jpg', 'che_120.jpg', 'che_121.jpg', 'che_122.jpg', 'che_123.jpg', 'che_124.jpg', 'che_125.jpg', 'che_126.jpg', 'che_127.jpg', 'che_128.jpg', 'che_129.jpg', 'che_130.jpg', 'che_131.jpg', 'che_132.jpg', 'che_133.jpg', 'che_134.jpg', 'che_135.jpg', 'che_136.jpg', 'che_137.jpg', 'che_138.jpg', 'che_139.jpg', 'che_140.jpg', 'che_141.jpg', 'che_142.jpg', 'che_143.jpg', 'che_144.jpg', 'che_145.jpg', 'che_146.jpg', 'che_147.jpg', 'che_148.jpg', 'che_149.jpg', 'che_150.jpg', 'che_151.jpg', 'che_152.jpg', 'che_153.jpg', 'che_154.jpg', 'che_155.jpg', 'che_156.jpg', 'che_157.jpg', 'che_158.jpg', 'che_159.jpg', 'che_160.jpg', 'che_161.jpg', 'che_162.jpg', 'che_163.jpg', 'che_164.jpg', 'che_165.jpg', 'che_166.jpg', 'che_167.jpg', 'che_168.jpg', 'che_169.jpg', 'che_170.jpg', 'che_171.jpg', 'che_172.jpg', 'che_173.jpg', 'che_174.jpg', 'che_175.jpg', 'che_176.jpg', 'che_177.jpg', 'che_178.jpg', 'che_179.jpg', 'che_180.jpg', 'che_181.jpg', 'che_182.jpg', 'che_183.jpg', 'che_184.jpg', 'che_185.jpg', 'che_186.jpg', 'che_187.jpg', 'che_188.jpg', 'che_189.jpg', 'che_190.jpg', 'che_191.jpg', 'che_192.jpg', 'che_193.jpg', 'che_194.jpg', 'che_195.jpg', 'che_196.jpg', 'che_197.jpg', 'che_198.jpg', 'che_199.jpg', 'che_200.jpg', 'che_201.jpg', 'che_202.jpg', 'che_203.jpg', 'che_204.jpg', 'che_205.jpg', 'che_206.jpg', 'che_207.jpg', 'che_208.jpg', 'che_209.jpg', 'che_210.jpg', 'che_211.jpg', 'che_212.jpg', 'che_213.jpg', 'che_214.jpg', 'che_215.jpg', 'che_216.jpg', 'che_217.jpg', 'che_218.jpg', 'che_219.jpg', 'che_220.jpg', 'che_221.jpg', 'che_222.jpg', 'che_223.jpg', 'che_224.jpg', 'che_225.jpg', 'che_226.jpg', 'che_227.jpg', 'che_228.jpg', 'che_229.jpg', 'che_230.jpg', 'che_231.jpg', 'che_232.jpg', 'che_233.jpg', 'che_234.jpg', 'che_235.jpg'];

var imgs = [];
for(var i = 0; i < imgPlayArr.length; i++) {
	var img = new Image();
	img.src = "img/video/" + imgPlayArr[i];
	imgs.push(img);
}
//长按播放
var timeOutEvent = 0;
$(function() {
	$("canvas").on({
		touchstart: function(e) {
			timeOutEvent = setTimeout(longPress, 500);
			e.preventDefault();
		},
		touchmove: function() {
			clearTimeout(timeOutEvent);
			timeOutEvent = 0;
		},
		touchend: function() {
			clearTimeout(timeOutEvent);
			if(timeOutEvent != 0) {
				clearInterval(play_timer);
			}
			window.location.href = "circle.html";
			return false;
		}
	})
});

var pic_num = -1;
function longPress() {
	play_timer = setInterval(function() {
		pic_num == 234 ? 234 : pic_num++;
		context.save();		
		context.drawImage(imgs[pic_num], 0, 0, canvas.width, canvas.height);
		context.restore();
		if(pic_num==234) {
			setTimeout(function() {
				$("canvas").css('display','none')
			},1000)
		}
	}, 100)
}