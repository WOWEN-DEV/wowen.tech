
/* PRÊT */

$(document).ready(function(){
	
	$(this).scrollTop(0);
	setTimeout(function(){$('html').addClass('is-ready');}, 1000);
	$('main').addClass('overflow');
	setTimeout(function(){$('#loader').addClass('loading');}, 300);
	setTimeout(function(){$('main').removeClass('overflow');}, 1000);
	
});

$(window).on('beforeunload', function(){

	$('body').addClass('unload');

});

$('.overlay-menu--cta').hover(function () {$('.container').addClass('menu');}, function () {$('.container').removeClass('menu');});



/* SCROLLER */
	
if (window.matchMedia("(min-width: 790px)").matches) {
	
	setTimeout(() => {
		
		const map = (x, a, b, c, d) => clamp((x - a) * (d - c) / (b - a) + c, Math.min(c,d), Math.max(c,d));
		const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
		const images = [...document.querySelectorAll('.scale')];
			
		const scroller = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			inertia:.75,
			smartphone: {smooth: true},
			tablet: {smooth: true}
		});
		
		scroller.on('scroll', (position) => {
			
		  if ((position.scroll.y) > 200) {
			  
			document.querySelector('.overlay').classList.add('scroll');
			
		  } else {
			  
			document.querySelector('.overlay').classList.remove('scroll');
		  
		  }
		  
		});

		scroller.on('scroll', (position) => {
			
		  if ((position.scroll.y) > 0) {
			  
			document.querySelector('.rounded svg').style.transform = 'rotate(' + position.scroll.y/3 + 'deg)';
			
		  } else {
			  
			document.querySelector('.rounded svg').style.transform = 'rotate(0deg)';
			
		  }
			
		});
		
		document.querySelector('.footer-top').addEventListener('click', (function(){scroller.scrollTo(0)}));

		scroller.update();
		
	}, 1000)
	
} else {
	
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

		if (scroll > 80) {
			$(".overlay").addClass("scroll");
			
		} else {
			  
			$(".overlay").removeClass("scroll");
		  
		 }
	});
	
}



/* CAROUSSEL */

const caroussel = new Swiper('.caroussel', {
	
	direction: 'horizontal',
	slidesPerView: 1,
	speed:700,
	spaceBetween:50,
	
	pagination: {
		el: '.galerie-pagination',
		type: 'fraction',
	},
	
	navigation: {
	nextEl: '.nav-right',
	prevEl: '.nav-left',
	},
	
	breakpoints: {
		790: {slidesPerView: 2,},
		1290: {slidesPerView: 1.3,},
	}

});

const realisations = new Swiper('.realisations-caroussel', {
	
	direction: 'horizontal',
	slidesPerView: 1,
	speed:500,
	spaceBetween:50,
	
	pagination: {
	  el: ".navigation-pagination",
	  type: "progressbar",
	},
	
	breakpoints: {
		790: {slidesPerView: 2, spaceBetween: 50, speed:1000,},
		1090: {slidesPerView: 3, spaceBetween: 100, speed:1000,},
	}

});





