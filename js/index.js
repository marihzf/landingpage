$(document).ready(function() {


$('.rslides').responsiveSlides({
		speed:500
}); 

$(".owl-carousel").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 3000,
  	items:3,
  	loop:true,
 });

$(".inline").colorbox({
 inline:true,
 width: "450",

});

$("#scroll").mCustomScrollbar({
	scrollButtons:{
		enable: true
	},
	theme:"dark-2",
});

$(".sticky-menu").sticky({topSpacing:0});
 

 $(".nav-bar").click(function(){
 	$('.responsive-nav ul').toggle(200);
 });


});