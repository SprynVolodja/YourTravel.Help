jQuery(document).ready(function(){
	// Menu
	jQuery('#sidebar-menu > li').click(function(){
		if (jQuery(this).find('.sidebar-submenu').length > 0) {
			if (!jQuery(this).hasClass('active')){
				jQuery(this).addClass('active');
				jQuery(this).find('.sidebar-submenu').slideDown(200);
			} else {
				jQuery(this).removeClass('active');
				jQuery(this).find('.sidebar-submenu').slideUp(200);
			}
		}
	});
	jQuery('.duplicate-click').click(function(){
		jQuery(this).prev('.upload-photo').find('input').click();
	});
	jQuery('#close-sidebar').click(function(){
		jQuery('body').toggleClass('closed-sidebar');
	});
	
	// Mobile Menu
	jQuery('.mob-btn').click(function(){
		if(jQuery('.lines-button').hasClass('close')){
			jQuery('.lines-button').removeClass('close');
			jQuery('ul.menu, .sidenav-overlay').removeClass('active');
		} else {
			jQuery('.lines-button').addClass('close');
			jQuery('ul.menu, .sidenav-overlay').addClass('active');
		}
		if(jQuery('body').hasClass('closed-sidebar')) {
			jQuery('body').removeClass('closed-sidebar');
		} else {
			jQuery('body').addClass('closed-sidebar');
		}
	});
	jQuery('ul.menu li a, .sidenav-overlay').click(function(){
		jQuery('.lines-button').removeClass('close');
		jQuery('body').removeClass('closed-sidebar');
	});
	
	// Uploaded image preview
	function photoUpload() {
		 jQuery(".uploader").on('change', function () {
			var that = jQuery(this);

			 //Get count of selected files
			 var countFiles = jQuery(this)[0].files.length;

			 var imgPath = jQuery(this)[0].value;
			 var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();

			 if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
				 var reader = new FileReader();
				 reader.onload = function (e) {
					that.parents('.upload-photo').css('background-image', 'url(' + e.target.result + ')');
					that.parents('.upload-photo').addClass('with-img');
			 }
				 reader.readAsDataURL($(this)[0].files[0]);
			 } else {
				 alert("Будь ласка, завантажуйте лише картинки");
			 }
		 });
		jQuery('.clear-img').click(function(){
			jQuery(this).parents('.uploader').val('');
			jQuery(this).parents('.upload-photo').removeClass('with-img');
			jQuery(this).parents('.upload-photo').css('background-image', 'none');
		}) ;
	}
	photoUpload();
	
	// DataTable
	if (jQuery('#example').length > 0) {
		jQuery('#example').DataTable({
			columnDefs: [
			   { orderable: false, targets: [-1, -2, -3]}
			]
		});
	}
	if (jQuery('#example-payment').length > 0) {
		jQuery('#example-payment').DataTable({});
	}
	
	if (jQuery('.add-moder-btn').length > 0) {
		jQuery('.add-moder-btn').insertAfter('.dataTables_length > label');
	}
	
	// Add/Remove additional email
	jQuery('.add-email').click(function(){
		jQuery('.additioonal-email.hidden-email').removeClass('hidden-email');
	});
	jQuery('.remove-email').click(function(){
		jQuery(this).parents('.additioonal-email').addClass('hidden-email');
	});
	
	// block reason validate
	jQuery('.block-reason-btn').click(function(){
		if(jQuery('.choose-reason label input:checked').length < 1) {
			jQuery('.choose-reason-validate').removeClass('visible-r');
		} else {
			jQuery('.choose-reason-validate').addClass('visible-r');
		}
	});
	
	// Add/Remove hotel
	jQuery('.add-hotel').click(function(){
		jQuery(this).parents('.divider-block').clone().insertAfter('.hotel-booking-container .divider-block:last-child');
		jQuery('.remove-hotel').click(function() {
			jQuery(this).parents('.divider-block').remove();
		});
	});
	
	// Add/Remove living place
	jQuery('.add-living-place').click(function(){
		jQuery(this).parents('.divider-block').prev('.living-block-cont').find('.living-block:last-child').clone().insertAfter('.living-block:last-child');
		jQuery(".living-block:last-child .date-from input").val("");
		jQuery(".living-block:last-child .date-to input").val("");
		/* var name = jQuery(this).parents('.divider-block').prev('.living-block-cont').find('input').attr('name');
				   jQuery(this).parents('.divider-block').prev('.living-block-cont').find('input').attr('name', name + '1'); */
		jQuery(".living-block:last-child").each(function(){
			jQuery(this).find('input').each(function(){
				var name = jQuery(this).attr('name');
				jQuery(this).attr('name', name + '[1]');
			});
			jQuery(this).find('select').each(function(){
				var name = jQuery(this).attr('name');
				jQuery(this).attr('name', name + '[1]');
			});
		});
		jQuery("[name^=field]").each(function () {
			jQuery(this).rules("add", {
				required: true,
				messages: {
					required: "це поле обов'язкове"
				}
			});
		});
		jQuery(function () {
			jQuery(".living-block .date-from").datetimepicker({pickTime: false, language: 'ru'});
			jQuery(".living-block .date-to").datetimepicker({pickTime: false, language: 'ru'});

			jQuery(".living-block .date-from").on("dp.change",function (e) {
			  jQuery(".living-block .date-to").data("DateTimePicker").setMinDate(e.date);
			});

			jQuery(".living-block .date-to").on("dp.change",function (e) {
			  jQuery(".living-block .date-from").data("DateTimePicker").setMaxDate(e.date);
			});
		});
		
		jQuery('.remove-living-place').click(function() {
			jQuery(this).parents('.living-block').remove();
		});
	});
	
	// Add/Remove child-person
	jQuery('.add-child-person-btns > span').click(function(){
		jQuery(this).parents('.divider-block').prev('.add-child-person-block-cont').find('.add-child-block:first-child').clone().insertAfter('.add-child-block:last-child');
		jQuery(".add-child-block:last-child .date input").val("");
		jQuery(this).parents('.uploader').val('');
		jQuery(this).parents('.upload-photo').removeClass('with-img');
		jQuery(this).parents('.upload-photo').css('background-image', 'none');
		jQuery('.add-child-block:last-child').removeClass('no-validation');
		jQuery('.add-child-block:last-child').addClass('children-cont');
		jQuery('.add-child-block:last-child .child-or-person').text('Дитина');
		jQuery(".add-child-block:first-child").each(function(){
			jQuery(this).find('input').each(function(){
				var name = jQuery(this).attr('name');
				jQuery(this).attr('name', name + '[1]');
			});
			jQuery(this).find('select').each(function(){
				var name = jQuery(this).attr('name');
				jQuery(this).attr('name', name + '[1]');
			});
		});
		jQuery("[name^=field]").each(function () {
			jQuery(this).rules("add", {
				required: true,
				messages: {
					required: "це поле обов'язкове"
				}
			});
		});
		jQuery('.add-child-person-block-cont .date').datetimepicker({
			pickTime: false, 
			language: 'ru'
		});
		photoUpload();
		jQuery('.remove-child-person').click(function() {
			jQuery(this).parents('.add-child-block').remove();
		});
	});
	jQuery('#add-person').click(function(){
		jQuery('.add-child-block:last-child').addClass('person-cont');
		jQuery('.add-child-block:last-child .child-or-person').text('Людина');
	});
	jQuery('#add-child').click(function(){
		jQuery('.add-child-block:last-child').addClass('children-cont');
		jQuery('.add-child-block:last-child .child-or-person').text('Дитина');
	});
	
	
	//Dropdown init
	jQuery('#page-header').removeClass('loading');
	jQuery('.dropdown-menu').slideUp(0);
	jQuery('.dropdown').click(function(e) {
        jQuery(this).toggleClass('active');
		if(jQuery(this).hasClass('active')) {
			jQuery(this).find('.dropdown-menu').slideDown();
		} else {
			jQuery(this).find('.dropdown-menu').slideUp();
		}
    }).on('click','.dropdown-menu', function(e) { 
       e.stopPropagation(); 
    });
	jQuery(document).click( function(event){
		if(jQuery('.dropdown-menu').length > 0) {
			jQuery('.dropdown-menu').slideUp();
			jQuery('.dropdown').removeClass('active');
		}
	});
	//Popover
	jQuery('#main-example').popSelect({title: 'Виберіть Тур-оператора'});
	
	//Select color
	jQuery( "#page-content-wrapper.agency-create .main-content-item select" ).change(function() {
		jQuery(this).addClass('black-text');
	});
	
	//Phone mask
	// var maskList = $.masksSort($.masksLoad("js/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
	// var maskOpts = {
	// 	inputmask: {
	// 		definitions: {
	// 			'#': {
	// 				validator: "[0-9]",
	// 				cardinality: 1
	// 			}
	// 		},
	// 		showMaskOnHover: false,
	// 		autoUnmask: true,
	// 		clearMaskOnLostFocus: false
	// 	},
	// 	match: /[0-9]/,
	// 	replace: '#',
	// 	list: maskList,
	// 	listKey: "mask",
	// 	onMaskChange: function(maskObj, determined) {
	// 		if (determined) {
	// 			var hint = maskObj.name_en;
	// 			if (maskObj.desc_en && maskObj.desc_en != "") {
	// 				hint += " (" + maskObj.desc_en + ")";
	// 			}
	// 			$(".telephone").html(hint);
	// 		} else {
	// 			$(".telephone").html("Mask of input");
	// 		}
	// 	}
	// };

	// $('.telephone').focus(function() {
	// 	$(this).inputmask("remove");
	// 	$(this).inputmasks(maskOpts);
	// });

	//Carousel init
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		autoplay: false
	});
	
	sidebarHeightfunc();
	titleToHeader();
	largeBlockTitle();
});

jQuery(window).resize(function(){
	sidebarHeightfunc();
	titleToHeader();
	largeBlockTitle();
});
jQuery('html, body').scroll(function(){
	sidebarHeightfunc();
});
jQuery(window).scroll(function(){
	sidebarHeightfunc();
});

function sidebarHeightfunc() {
	var windowHeight = jQuery(window).outerHeight(false);
	var sidebarHeight = jQuery('#page-content-wrapper').outerHeight( false )
	
	jQuery('#page-wrapper').css('min-height', windowHeight);
	jQuery('#page-sidebar').css({'min-height': windowHeight, 'height': sidebarHeight});
}
function titleToHeader() {
	if (jQuery('.moved-title').length == 1) {
		var title = jQuery('.moved-title');
		if (jQuery(window).width() <= 768) {
			title.insertAfter('.user-page .mob-btn');
		} else {
			title.prependTo('.moved-title-cont');
		}
	}
}

function largeBlockTitle() {
	if (jQuery('.user-page #page-content > .container.no-shadow .large-cont .ws-item .carousel-block .title-before-img').length > 0) {
		jQuery('.user-page #page-content > .container.no-shadow .large-cont .ws-item .carousel-block').each(function(){
			if (jQuery(window).width() <= 480) {
				jQuery(this).find('.title-before-img').insertBefore(jQuery(this).find('.cb-left'));
			} else {
				jQuery(this).find('.title-before-img').prependTo(jQuery(this).find('.cb-right'));
			}
		});
	}
}


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.anchore-cont a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.anchore-cont a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-80
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.anchore-cont a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.anchore-cont a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


