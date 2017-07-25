var province = data[0];
var submitTimer = null;

//添加省份
$(".whichConvince").children('option').remove();
$(".whichConvince").append($("<option>请选择</option>"));
for(key in province) {
	$(".whichConvince").append($("<option value=" + key + ">" + province[key] + "</option>"));;
}
//添加市
$(".whichConvince").change(function() {
	$(".whichCity").children('option').remove();
	$(".whichCity").append($("<option>请选择</option>"));
	var provinceIndex = document.querySelector(".whichConvince");
	var seIndex = provinceIndex.options[provinceIndex.selectedIndex].value;
	var cityNum = "0," + seIndex;
	for(key in data[cityNum]) {
		$(".whichCity").append($("<option value=" + key + ">" + data[cityNum][key] + "</option>"));
	}

})

//添加经销商
$(".whichCity").change(function() {
	$(".whichDealer").children('option').remove();
	$(".whichDealer").append($("<option>请选择</option>"));
	var provinceIndex = document.querySelector(".whichConvince");
	var seIndex = provinceIndex.options[provinceIndex.selectedIndex].value;
	var cityIndex = document.querySelector(".whichCity");
	var seleIndex = cityIndex.options[cityIndex.selectedIndex].value;
	console.log(seleIndex);
	var dealerNum = "0," + seIndex + "," + seleIndex;
	console.log(dealerNum)
	for(key in data[dealerNum]) {
		$(".whichDealer").append($("<option value=" + dealerNum + ">" + data[dealerNum][key] + "</option>"));
	}
})

//提交信息的一系列操作
var submitIntfo = document.querySelector(".submitInfo");
submitIntfo.addEventListener("touchstart", submit_info, false);

function submit_info() {
	//	姓名正则表达式检测
	var nameInp = document.querySelector(".userName input");
	var nameStr = nameInp.value;
	var nameReg = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
	var isTrueName = nameReg.test(nameStr);
	//	if(!isTrueName) {
	//		var errorName=$("<p class=" + "tipsName" + ">" + "请填写正确姓名" + "</p>");
	//		errorName.css({
	//			'background-color': 'rgba(0,0,0,0.8)',
	//			'width': '8rem',
	//			'height': '2.8rem',
	//			'color': 'white',
	//			'position': 'absolute',
	//			'left': '4.5rem',
	//			'top': '9rem',
	//			'text-align': 'center',
	//			'line-height': '2.8rem'
	//		})
	//		$(".wrapInfo").append(errorName);
	//	} else {
	//		console.log(1);
	//	}
	//	手机号正则表达式检测
	var phoneInp = document.querySelector(".phoneNumber input");
	var phoneStr = phoneInp.value;
	var phoneReg = /^1([358][0-9]|4[57]|7[06-8])\d{8}$/;
	var isTruePhone = phoneReg.test(phoneStr);
	//		if(!isTruePhone) {
	//			var errorNum=$("<p class=" + "tipsNum" + ">" + "请填写正确手机号" + "</p>");
	//			errorNum.css({
	//				'background-color': 'rgba(0,0,0,0.8)',
	//				'width': '8rem',
	//				'height': '2.8rem',
	//				'color': 'white',
	//				'position': 'absolute',
	//				'left': '4.5rem',
	//				'top': '9rem',
	//				'text-align': 'center',
	//				'line-height': '2.8rem',
	//				'animation': 'tip 2s linear forwards'
	//			})
	//			$(".wrapInfo").append(errorNum);
	//		} else {
	//			console.log(2);
	//		}
	//	监测信息是否填写完整
	var provinceText = document.querySelector(".whichConvince").options[document.querySelector(".whichConvince").selectedIndex].innerHTML;
	var cityText = document.querySelector(".whichCity").options[document.querySelector(".whichCity").selectedIndex].innerHTML;
	var dealerText = document.querySelector(".whichDealer").options[document.querySelector(".whichDealer").selectedIndex].innerHTML;
	var sizeText = document.querySelector(".whichSize").options[document.querySelector(".whichSize").selectedIndex].innerHTML;
	var timeText = document.querySelector(".whenBuy").options[document.querySelector(".whenBuy").selectedIndex].innerHTML;
	//	console.log(nameStr,phoneStr,provinceText,cityText,dealerText,sizeText,timeText);
	//	console.log(nameStr=="");
	if(nameStr == "" || phoneStr == "" || provinceText == "请选择" || cityText == "请选择" || sizeText == "请选择" || timeText == "请选择" || dealerText == "请选择") {
		var tipsShow = $("<p class=" + "tips" + ">" + "请填写正确信息" + "</p>");
		tipsShow.css({
			'background-color': 'rgba(0,0,0,0.8)',
			'width': '8rem',
			'height': '2.8rem',
			'color': 'white',
			'position': 'absolute',
			'left': '4.5rem',
			'top': '9rem',
			'text-align': 'center',
			'line-height': '2.8rem',
			'animation': 'tip 2s linear forwards'
		})
		$(".wrapInfo").append(tipsShow);
	} else {
		var tipShow = $("<p class=" + "tipss" + ">" + "信息提交成功" + "</p>");
		tipShow.css({
			'background-color': 'rgba(0,0,0,0.8)',
			'width': '8rem',
			'height': '2.8rem',
			'color': 'white',
			'position': 'absolute',
			'left': '4.5rem',
			'top': '9rem',
			'text-align': 'center',
			'line-height': '2.8rem',
			'animation': 'tip 2s linear forwards'
		})
		$(".wrapInfo").append(tipShow);
		submitTimer = setTimeout(function() {
			$(".wrapInfo").css('display', 'none');
		}, 2000)
	}
	self.location='startK4.html';
}