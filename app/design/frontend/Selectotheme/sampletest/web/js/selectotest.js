require(["jquery","drc/slick"], function ($) {
   	$(document).ready(function(){ 
 	// product slider
		$(".product-container").each(function (slider) { 		
			var productSlider = $(this).find(".product-slider");
			var productNav = $(this).find(".product-nav");
			var productArrow = $(this).find(".slick-for-arrow");	

			// product slider
			productSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				appendArrows: productArrow,
				fade: false,
				asNavFor: productNav
			}); 

			// product nav
			productNav.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: productSlider,
				dots: false,
				arrows: false,
				centerMode: false,
				focusOnSelect: true,
				responsive: [				
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 2,
					  }
					}
				  ]
			});
		});	 
	 	$('.banner-slider').slick({	  	
		  	infinite: true,
		  	speed: 300,
		  	dots: true, 
		   	fade: false,
	       	autoplay:true,
		   slidesToShow: 1,
		  adaptiveHeight: true,
		  prevArrow: $(".pp2"),
		  nextArrow: $(".nn2"),
		  appendDots:$(".banner-dots"), 
		});  



	// scroll to item
	$("#campaign-tab a").on('click', function(e) {		
		if (this.hash !== "") {			
			e.preventDefault();

			var hash = this.hash;	  

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		} 
	});


	// Category Tabs / Campaign Tabs
	$('#campaign-tab .nav-item a').on('click', function (e) {
		e.preventDefault();
		$('.product-slider').slick('refresh');
	});

	// Winner Slider
	$('.winner-slider').slick({
		arrows: true,
		appendArrows: $(".our-winner .custom-slider-arrow"),
		dots: false,
	});

	// Winner Slider
	$('.testimonial-slider').slick({
		arrows: true,
		appendArrows: $(".testimonial-wrapper .custom-slider-arrow"),
		dots: false,
	}); 


	$('.navimg img').on('click',function(){
		var clickImgDiv = $(this).closest('.filter-block').parent().attr('id');
		var colorer = parseInt($(this).parent().attr('id'));
		$('#'+clickImgDiv+' .progress-bar').removeClass('yellow');
		$('#'+clickImgDiv+' .progress-bar').removeClass('red');
		$('#'+clickImgDiv+' .progress-bar').removeClass('green');

		if(colorer >= 0 && colorer <= 49){ $('#'+clickImgDiv+' .progress-bar').addClass('green'); }
		if(colorer >= 50 && colorer <= 74){ $('#'+clickImgDiv+' .progress-bar').addClass('yellow'); }
		if(colorer >= 75){ $('#'+clickImgDiv+' .progress-bar').addClass('red'); }

		$('#'+clickImgDiv+' .progress-bar').css('width',colorer+'%');
		//alert('#'+clickImgDiv+' .progress-bar'); 

	});	 
}); 
   	$(window).on('load',function () {
		$('.cms-home .campaigns .progress-bar').removeClass('yellow');
		$('.cms-home .campaigns .progress-bar').removeClass('red');
		$('.cms-home .campaigns .progress-bar').removeClass('green');		

		var automotive = parseInt($('#automotive .slick-slide.slick-current.slick-active .navimg.automotive').attr('id'));
		if(automotive >= 0 && automotive <= 49){ $('#automotive .progress-bar').addClass('green');}
		if(automotive >= 50 && automotive <= 74){ $('#automotive .progress-bar').addClass('yellow');}
		if(automotive >= 75){ $('#automotive .progress-bar').addClass('red'); }

		var cash = parseInt($('#cash .slick-slide.slick-current.slick-active .navimg.cash').attr('id'));
		if(cash >= 0 && cash <= 49){ $('#cash .progress-bar').addClass('green');}
		if(cash >= 50 && cash <= 74){ $('#cash .progress-bar').addClass('yellow');}
		if(cash >= 75){ $('#cash .progress-bar').addClass('red'); }

		var electronics = parseInt($('#electronics .slick-slide.slick-current.slick-active .navimg.electonics').attr('id'));
		if(electronics >= 0 && electronics <= 49){ $('#electronics .progress-bar').addClass('green');}
		if(electronics >= 50 && electronics <= 74){ $('#electronics .progress-bar').addClass('yellow');}
		if(electronics >= 75){ $('#electronics .progress-bar').addClass('red'); }

		var seeall = parseInt($('#see-all .slick-slide.slick-current.slick-active .navimg').attr('id'));
		if(seeall >= 0 && seeall <= 49){ $('#see-all .progress-bar').addClass('green');}
		if(seeall >= 50 && seeall <= 74){ $('#see-all .progress-bar').addClass('yellow');}
		if(seeall >= 75){ $('#see-all .progress-bar').addClass('red'); }

		$('#automotive .progress-bar').css('width',$('#automotive .filter-nav .slick-slide.slick-current.slick-active .navimg.automotive').attr('id')+'%');	
		$('#cash .progress-bar').css('width',$('#cash .filter-nav .slick-slide.slick-current.slick-active .navimg.cash').attr('id')+'%');	
		$('#electronics .progress-bar').css('width',$('#electronics .filter-nav .slick-slide.slick-current.slick-active .navimg.electonics').attr('id')+'%');	
		$('#see-all .progress-bar').css('width',$('#see-all .filter-nav .slick-slide.slick-current.slick-active .navimg').attr('id')+'%');
	});	

 
});