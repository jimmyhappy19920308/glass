$(document).ready(function() {
	$('.hamburger-menu').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('menu-show');
	});
});