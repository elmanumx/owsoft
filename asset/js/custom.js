$(document).ready(function() {

	$('.mn').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});

/*
var ligas = $('nav li');
$('nav li').click(function() {
	ligas.filter(function(elem) {
		$(ligas[elem]).removeClass('active');
	})
	$(this).addClass('active');
});

*/
	var ancho = $(window).width();
	$(window).scroll(function(){
		if ($(window).scrollTop()===0 && ancho >= 767 ){
			$('nav').removeClass('scroll');
		}
		else{
			$('#nav').addClass('scroll');    
		}
	});

 
var owl = $("#owl-demo");
owl.owlCarousel({
  items : 5, //10 items above 1000px browser width
  itemsDesktop : [1000,5], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0
  itemsMobile : [300,1] // itemsMobile disabled - inherit from itemsTablet option
});
owl.trigger('owl.play',2000); //owl.play event accept autoPlay speed as second parameter

});