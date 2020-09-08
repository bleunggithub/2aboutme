// smooth scroll ----------------------------------------//
var scroll = new SmoothScroll('a[href*="#"]', { speed: 1800 });

//showcase
//
//---------thumbnails
//#aboutMe1Thumbnail, #mujifitsThumbnail, #matrixThumbnail
//
//---------showcase containers
//#showcaseDefaultContainer
//#showcase1
//#showcase2
//#showcase3
//
//---------showcase zoom pic
//#showcaseDefault
//#aboutMe1Zoom
//#mujifitMockupZoom
//#matrixZoom
//
//----------showcase thumbnails
//----div----tn-1 tn-2 tn-3
//#tn-1-1 //tn-1-2 //tn-1-3
//#tn-2-1 //tn-2-2
//#tn-3-1 //tn-2-3
//
//---------text
//#textDefault
//tn-1-text
//tn-2-text
//tn-3-text
const showcaseCon = document.getElementById("showcaseDefaultContainer");
const aboutMeTN = document.getElementById("aboutMe1Thumbnail");
const mjfTN = document.getElementById("mujifitsThumbnail");
const matrixTN = document.getElementById("matrixThumbnail");
const textDefault = document.getElementById("textDefault");

aboutMeTN.addEventListener("click", function () {
	showcaseCon.style.display = "none";
	textDefault.style.display = "none";

	$("#showcase1").animate({
		display: "block",
	}),
		$("#showcase1").fadeIn(1300);

	$("#tn-1").animate({
		display: "block",
	}),
		$("#tn-1").fadeIn(1300);

	$("#tn-1-text").animate({
		display: "block",
	}),
		$("#tn-1-text").fadeIn(1300);
});

mjfTN.addEventListener("click", function () {
	showcaseCon.style.display = "none";
	textDefault.style.display = "none";

	$("#showcase2").animate({
		display: "block",
	}),
		$("#showcase2").fadeIn(1300);

	$("#tn-2").animate({
		display: "block",
	}),
		$("#tn-2").fadeIn(1300);

	$("#tn-2-text").animate({
		display: "block",
	}),
		$("#tn-2-text").fadeIn(1300);
});
matrixTN.addEventListener("click", function () {
	showcaseCon.style.display = "none";
	textDefault.style.display = "none";

	$("#showcase3").animate({
		display: "block",
	}),
		$("#showcase3").fadeIn(1300);

	$("#tn-3").animate({
		display: "block",
	}),
		$("#tn-3").fadeIn(1300);

	$("#tn-3-text").animate({
		display: "block",
	}),
		$("#tn-3-text").fadeIn(1300);
});

///////
const showcase1 = document.getElementById("showcase1");
const showcase2 = document.getElementById("showcase2");
const showcase3 = document.getElementById("showcase3");
const showcaseTxt1 = document.getElementById("tn-1-text");
const showcaseTxt2 = document.getElementById("tn-2-text");
const showcaseTxt3 = document.getElementById("tn-3-text");

aboutMeTN.addEventListener("click", function () {
	if (
		showcase2.style.display == "block" ||
		showcase3.style.display == "block"
	) {
		showcase2.style.display = "none";
		showcaseTxt2.style.display = "none";
		showcase3.style.display = "none";
		showcaseTxt3.style.display = "none";

		$("#showcase1").animate({
			display: "block",
		}),
			$("#showcase1").fadeIn(1300);

		$("#tn-1").animate({
			display: "block",
		}),
			$("#tn-1").fadeIn(1300);

		$("#tn-1-text").animate({
			display: "block",
		}),
			$("#tn-1-text").fadeIn(1300);
	}
});

//////
mjfTN.addEventListener("click", function () {
	if (
		showcase1.style.display == "block" ||
		showcase3.style.display == "block"
	) {
		showcase1.style.display = "none";
		showcaseTxt1.style.display = "none";
		showcase3.style.display = "none";
		showcaseTxt3.style.display = "none";

		$("#showcase2").animate({
			display: "block",
		}),
			$("#showcase2").fadeIn(1300);

		$("#tn-2").animate({
			display: "block",
		}),
			$("#tn-2").fadeIn(1300);

		$("#tn-2-text").animate({
			display: "block",
		}),
			$("#tn-2-text").fadeIn(1300);
	}
});
//////
matrixTN.addEventListener("click", function () {
	if (
		showcase1.style.display == "block" ||
		showcase2.style.display == "block"
	) {
		showcase1.style.display = "none";
		showcaseTxt1.style.display = "none";
		showcase2.style.display = "none";
		showcaseTxt2.style.display = "none";

		$("#showcase3").animate({
			display: "block",
		}),
			$("#showcase3").fadeIn(1300);

		$("#tn-3").animate({
			display: "block",
		}),
			$("#tn-3").fadeIn(1300);

		$("#tn-3-text").animate({
			display: "block",
		}),
			$("#tn-3-text").fadeIn(1300);
	}
});
