jQuery(document).ready(function(){
	jQuery(".header_language_current").on("click", function() {
		var _this = $(this),
		container = _this.closest(".header_language"),
		langList = container.find(".header_language_list");
		langList.toggleClass("active");
	});
	jQuery(".header_language_list li").on("click", function() {
		var _this = $(this),
		listItemClick = _this.text(),
		container = _this.closest(".header_language"),
		selectCustom = container.find(".header_language_current_"),
		selectCustomList = _this.closest('.header_language_list');
		jQuery(".header_language_list li").removeClass('current');
		createCookie( "language="+_this.attr('class')+";" );
		_this.addClass('current');
		selectCustomList.removeClass("active");
		selectCustom.text(listItemClick);
		location.reload();
	});


	



	jQuery("#show-video").on("click", function() {
		jQuery("#show-video iframe").attr("src", jQuery("#show-video iframe").attr("src"));
	});
	$('.loop').owlCarousel({
		center: true,
		items:2,
		responsive:{
			600:{
				loop:true,
				margin:20,
				items:2
			},
			0:{
				items:1,
				loop:false
			}
		}
	});
});






