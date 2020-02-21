window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// SLIDER

	let slideIndex = 1,
		wrap = document.querySelectorAll('.reviews__item'),
		slide = document.querySelector('.reviews__item'),
		next = document.querySelector('.reviews__next'),
		prev = document.querySelector('.reviews__prev');
	console.log(wrap);
	
	showSlides(slideIndex);

	function showSlides (n) {
		if (n > wrap.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = wrap.length;
		}
		wrap.forEach((item) => item.classList.remove('active'));

		wrap[slideIndex - 1].classList.add('active');
	}

	function plusSliders(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	
	next.addEventListener('click', function(){
		plusSliders(1);
	});

	prev.addEventListener('click', function(){
		plusSliders(-1);
	});
});