jQuery(document).ready(function(){

	$('.head_tab_language li').click(function(){
		var a = $(this);
		a.parent('ul').find('.active').removeClass('active');
		a.addClass('active');
		var b  = a.attr('tab');
		var c = a.parents('.wrap_for_enter_data').find('.active_tab').removeClass('active_tab');
		a.parents('.wrap_for_enter_data').find('.'+b).addClass('active_tab');
	});

	$('.wrap_for_settings_page, .wrap_for_enter_data').find('.choose_file').click(function(){
		$(this).parent('li').prev().children('input').click();
	});


	//____add new fields
	$(document).on('click','.add-new-schedule',function(){
		var a = $(this).parents('tbody').children('tr:first');
		var b = a.clone().addClass('copy_line');
		var c = $(this).parents('tbody').children('tr:last').after(b);
		var z = b.find('.input-group.date').attr('id','datepicker'+($(this).parents('tbody').children('tr').length+3));
		b.find('input').val("");
		b.each(function() {
			var x = $(this).find('.input-group.date').attr('id');
			jQuery(z).datetimepicker({
				pickTime: false, 
				language: 'ru'
			});
		});

		// console.log(z);
	});


	//____remove fields
	$(document).on('click','.remove-schedule',function(){
		var a = $(this).parents('tr').remove();
	});
	//____/add new fields

	jQuery(".valid_this_field").each(function(){
		jQuery(this).bind("change keyup input click", function(){
			if (this.value.match(/[^a-zA-Z ]/g)) {
				this.value = this.value.replace(/[^a-zA-Z ]/g, '');
			}
		});
	});
	jQuery(".only_text").each(function(){
		jQuery(this).bind("change keyup input click", function(){
			if (this.value.match(/[0-9 ]/g)) {
				this.value = this.value.replace(/[0-9 ]/g, '');
			}
		});
	});

	$(function(){
		var a = $('.header_language_list  li.lang-ua');
		var b = $('.header_language_list  li.lang-ru');
		var c = $('.header_language_list  li:last');
		if(a.hasClass('current')) {
			$('#add-person').text('добавити ще одного туриста');
			$('#sidebar-menu').find('span.massage').text('Повідомлення');
		}
		if(b.hasClass('current')) {
			$('#add-person').text('добавить еще одного туриста');
			$('#sidebar-menu').find('span.massage').text('Сообщение');
		}
		if(c.hasClass('current')) {
			$('#add-person').text('add another tourist');
			$('#add-child').text('Add another child');
			$('#sidebar-menu').find('span.massage').text('Message');
		}
	});

// dropdown menu 	
$(function(){
	var a = $('.dropdown-menu .reset-ul li').length;
	if(a > 1) {
		$('#page-header .user-account-btn>a.user-profile .dropdown-icon').css({'display': 'block'});
	}
	else {
		$('.user-account-btn').find('a.user-profile').css({'cursor' : 'text'}).removeAttr('href');
		$('#page-header .user-account-btn>a.user-profile .dropdown-icon').css({'display': 'none'});
		$('#page-header .user-account-btn .dropdown-menu').removeClass('dropdown-menu');
	}
});
// dropdown menu 	

	// calendar validation	
	$('.date input').keyup(function(){
		console.log("ffvdfvdf");
		var a  = $(this).val();
		if(a.match(/([A-Za-z0-9-]+)/)){
			$(this).val(' ');
		}
		if(a.match(/([А-Яа-я0-9-]+)/)){
			$(this).val(' ');
		}
	});
// calendar validation	

//slider  for excursion page
$(function(){
	var a  = $('.small_img').find('.open').attr('src');
	$('.small_img').find('.open').parents('.left').find('.big_img').attr('src',a);
});
$(document).on('click','.small_img  img',function(){
	$('.small_img').find('.open').removeClass('open');
	var a  = $(this).addClass('open').attr('src');
	$(this).parents('.left').find('.big_img').attr('src',a);
});


$(document).on('click','.bottom_line  .glyphicon-chevron-right',function(){
	var a  = $(this).parents('.bottom_line').find('.small_img');
	var c = a.find('.active');
	var b = c.removeClass('active').next('div');
	var next_arrow = b.addClass('active');
	if (!next_arrow.length) {
		next_arrow =  $(this).parents('.bottom_line').find('.small_img div:first-child').addClass('active');
	}
});

$(document).on('click','.bottom_line  .glyphicon-chevron-left',function(){
	var a  = $(this).parents('.bottom_line').find('.small_img');
	var c = a.find('.active');
	var b = c.removeClass('active').prev('div');
	var next_arrow = b.addClass('active');
	if (!next_arrow.length) {
		next_arrow = $(this).parents('.bottom_line').find('.small_img div:last-child').addClass('active');
	}
});


$('.block_with_excursions .central_block:first').addClass('first_block');


//slider  for excursion page


$('.header_language_list.for_mobil_hide li').click(function(){
	$(this).closest('ul').find('.current').removeClass('current');
	$(this).addClass('current');
});


// for page gid_search - table input:checkbox
$('#example1').find('.tourist_name').prev('input').addClass('this_tourist');
$(document).on('click','input.this_tourist',function(){
	$(this).addClass('check');
	var a = $('#example1').find('input.check').length;
	$('.number_tourists').text(a);
	var z = $('input.hidden_number').val(a);
	var num = z.val();
	if(num >= 1){
		$('.tourists_selected').find('button').addClass('open_modal');
	}
	else {
		$('.tourists_selected').find('button').removeClass('open_modal');
	}
});
$(document).on('click','input.check',function(){
	$(this).removeClass('check');
	var a = $('#example1').find('input.check').length;
	$('.number_tourists').text(a);
	$('.hidden_number').val(a);
	var z = $('input.hidden_number').val(a);
	var num = z.val();
	var num = z.val();
	if(num >= 1){
		$('.tourists_selected').find('button').addClass('open_modal');
	}
	else {
		$('.tourists_selected').find('button').removeClass('open_modal');
	}
});


$('.close_modal').click(function(){
	$('.modal_box').removeClass('active');
});

$(document).on('click','.open_modal',function(){
	$('.modal_box').addClass('active');
});





// number_tourists





});