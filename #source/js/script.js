$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu__list').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

// @append dynamicAdapt.js

// $(function () {
// 	$('.slider').slick({
// 		arrows: false,
// 		dots: true,
// 		speed: 2000,
// 		infinite: true,
// 		autoplay: true,
// 		autoplaySpeed: 1500,
// 		pauseOnDotHover: true,
// 		pauseOnFocus: true,
// 		pauseOnHover: true
// 	});
// });

// $(function () {
// 	$('.slider-one').slick({
// 		speed: 2000,
// 		autoplay: true,
// 		autoplaySpeed: 1500,
// 		pauseOnFocus: true,
// 		pauseOnHover: true
// 	});
// });
