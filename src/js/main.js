$(document).ready(function() {
	
	$('.hamburger').on('click', function() {
		$(this).toggleClass('hamanimate');
		$('.header__menu').toggleClass('hamactive');
	});
	
});