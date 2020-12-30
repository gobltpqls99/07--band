$(".w3s").mouseenter(function(){
	$(".visit").show();
});
$(".w3s").mouseleave(function(){
	$(".visit").hide();
});

$(".blog-text h2").click(function(){
	$(this).removeClass("on");
	$(this).addClass("on").siblings().removeClass("on");
	$(this).next("ul").addClass("on");
});

$(".main-round").click(function(){
	$(this).next("ul.name-p").slideToggle();
});


 
var swiper = new Swiper('.swiper-container', {
	loop: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	pagination: {
	  el: '.swiper-pagination'
	}
  });