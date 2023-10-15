/* CLICK MENU */

$('.menu-open').on('click', function(){

	$('.overlay.scroll').addClass('open');
	$('.menu-content').addClass('open');
	$('.c-scrollbar').addClass('open');
	$('.menu-content .follow').addClass('open');
	$('.menu-content .coordonnees').addClass('open');
	$('.menu-content .menu-links').addClass('open');
	$('.menu-open').addClass('disable');
	$('.menu-close').addClass('disable');
	
});

$('.menu-close').on('click', function(){
	
	$('.overlay.scroll').removeClass('open');
	$('.menu-content').removeClass('open');
	$('.c-scrollbar').removeClass('open');
	$('.menu-content .follow').removeClass('open');
	$('.menu-content .coordonnees').removeClass('open');
	$('.menu-content .menu-links').removeClass('open');
	$('.menu-open').removeClass('disable');
	$('.menu-close').removeClass('disable');
	
});