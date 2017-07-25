document.getElementsByTagName("html")[0].style.fontSize = window.innerWidth / 20 + "px";
var power = document.querySelector(".power");
var power1 = document.querySelector(".power1");
var power2 = document.querySelector(".power2");
var power3 = document.querySelector(".power3");

var imgcar5 = document.querySelector(".imgcar5");
var imgcar6 = document.querySelector(".imgcar6");
var imgcar7 = document.querySelector(".imgcar7");
var imgcar8 = document.querySelector(".imgcar8");
//.imgpage
var imgpage = document.querySelector(".imgpage");
var imgpage1 = document.querySelector(".imgpage1");
var imgpage2 = document.querySelector(".imgpage2");
var imgpage3 = document.querySelector(".imgpage3");

//启动K4
function page1() {
	imgpage.style.display = "block";
	imgpage1.style.display = "none";
	imgpage2.style.display = "none";
	imgpage3.style.display = "none";

	power1.style.display = "none";
	imgcar6.style.display = "none";
	power2.style.display = "none";
	imgcar7.style.display = "none";
	power3.style.display = "none";
	imgcar8.style.display = "none";

	power.className = "power animated bounceInRight";
	power.style.display = "block";

	imgcar5.className = "imgcar5 animated bounceInLeft";
	imgcar5.style.display = "block";

	imgcar6.style.display = "none";
	imgcar7.style.display = "none";
	imgcar8.style.display = "none";
}

function page2() {
	imgpage.style.display = "none";
	imgpage1.style.display = "block";
	imgpage2.style.display = "none";
	imgpage3.style.display = "none";

	power.style.display = "none";
	imgcar5.style.display = "none";
	power2.style.display = "none";
	imgcar7.style.display = "none";
	power3.style.display = "none";
	imgcar8.style.display = "none";

	power1.className = "power1 animated bounceInRight";
	power1.style.display = "block";

	imgcar6.className = "imgcar6 animated bounceInLeft";
	imgcar6.style.display = "block";
}

function page3() {
	imgpage.style.display = "none";
	imgpage1.style.display = "none";
	imgpage2.style.display = "block";
	imgpage3.style.display = "none";

	power1.style.display = "none";
	imgcar6.style.display = "none";
	power.style.display = "none";
	imgcar5.style.display = "none";
	power3.style.display = "none";
	imgcar8.style.display = "none";

	power2.className = "power2 animated bounceInRight";
	power2.style.display = "block";

	imgcar7.className = "imgcar7 animated bounceInLeft";
	imgcar7.style.display = "block";

	imgcar5.style.display = "none";
	imgcar6.style.display = "none";
	imgcar8.style.display = "none";
}

function page4() {
	imgpage.style.display = "none";
	imgpage1.style.display = "none";
	imgpage2.style.display = "none";
	imgpage3.style.display = "block";

	power1.style.display = "none";
	imgcar6.style.display = "none";
	power.style.display = "none";
	imgcar5.style.display = "none";
	power2.style.display = "none";
	imgcar7.style.display = "none";

	power3.className = "power3 animated bounceInRight";
	power3.style.display = "block";

	imgcar8.className = "imgcar8 animated bounceInLeft";
	imgcar8.style.display = "block";

	imgcar5.style.display = "none";
	imgcar6.style.display = "none";
	imgcar7.style.display = "none";

}