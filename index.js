// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', { speed: 1800 });

//navbar list
const navList = document.getElementById("navbarList");

//contact me bar
const env = document.getElementById("spinningEnvelope");
const hiddenContact = document.getElementById("contactMeRowHidden");

env.addEventListener("click", function () {
	hiddenContact.style.display = "block";
	hiddenContact.setAttribute(
		"class",
		"animate__animated animate__slideInRight"
	);
	env.style.display = "none";
});
// close contact me bar
const cross = document.getElementById("cross");

cross.addEventListener("click", function () {
	// hiddenContact.style.display = "none";
	$("#contactMeRowHidden").fadeOut(800);
	$("#spinningEnvelope").animate({
		display: "block",
	}),
		$("#spinningEnvelope").fadeIn(1300);
});

//----------------- line qr-------------------//

const lineContainer = document.getElementById("hiddenLineQR");
const lineIcon = document.getElementById("lineIcon");
const lineQR = document.getElementById("line");

lineIcon.addEventListener("click", function () {
	lineContainer.style.display = "block";
});

lineQR.addEventListener("click", function () {
	lineContainer.style.display = "none";
});

//----------------- expand email-------------------//

function emailMe() {
	var expandEmailBtn = document.getElementById("emailBtn");
	var expandEmailBox = document.getElementById("emailPopUp");
	var expandEmailForm = document.getElementById("emailForm");
	var closeBtn = document.getElementById("closeBtn");

	expandEmailBtn.addEventListener("click", function () {
		expandEmailBox.style.display = "block";
		expandEmailForm.style.display = "block";
		closeBtn.style.display = "block";
	});
}
emailMe();
