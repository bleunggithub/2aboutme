// smooth scroll ----------------------------------------//
var scroll = new SmoothScroll('a[href*="#"]', { speed: 1800 });

// navbar text color change ---------------------------------------//

const navbar1 = document.getElementById("navbarLink1");
const navbar2 = document.getElementById("navbarLink2");
const navbar3 = document.getElementById("navbarLink3");

window.addEventListener("scroll", function () {
	if (window.scrollY > 550) {
		navbar1.setAttribute(
			"class",
			"nav-link navbarDown animate__animated animate__fadeIn animate__slow"
		);
	} else {
		navbar1.setAttribute("class", "nav-link");
	}
});

window.addEventListener("scroll", function () {
	if (window.scrollY > 550) {
		navbar2.setAttribute(
			"class",
			"nav-link navbarDown animate__animated animate__fadeIn animate__slow"
		);
	} else {
		navbar2.setAttribute("class", "nav-link");
	}
});
window.addEventListener("scroll", function () {
	if (window.scrollY > 550) {
		navbar3.setAttribute(
			"class",
			"nav-link navbarDown animate__animated animate__fadeIn animate__slow"
		);
	} else {
		navbar3.setAttribute("class", "nav-link");
	}
});

//more text ramble---------------------------------------//
var $el, $ps, $up, totalHeight;

$(".textCol .rambleText").click(function () {
	totalHeight = 0;

	$el = $(this);
	$p = $el.parent();
	$up = $p.parent();
	$ps = $up.find("p:not('.ramble')");

	$ps.each(function () {
		totalHeight += $(this).outerHeight();
	});

	$up
		.css({
			height: $up.height(),
			"max-height": 9999,
		})
		.animate({
			height: totalHeight,
		});

	$p.fadeOut();

	return false;
});

// rows animation--------------------------------------------//

const row1PopUp = document.getElementById("row1");

window.addEventListener("scroll", function () {
	if (window.scrollY > 100) {
		row1PopUp.setAttribute(
			"class",
			"row justify-content-center animate__animated animate__fadeInUp"
		);
	}
});

const row2PopUp = document.getElementById("row2");

window.addEventListener("scroll", function () {
	if (window.scrollY > 200) {
		row2PopUp.setAttribute(
			"class",
			"row justify-content-center animate__animated animate__fadeInUp"
		);
	}
});

const upTopPopUp = document.getElementById("upTop");

window.addEventListener("scroll", function () {
	if (window.scrollY > 250) {
		upTopPopUp.setAttribute(
			"class",
			"animate__animated animate__bounceInDown animate__slow"
		);
	}
});
