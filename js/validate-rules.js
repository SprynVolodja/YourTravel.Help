jQuery(document).ready(function(){
	jQuery.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});
	jQuery('#form').validate({
		rules: {
			new_password: {
				required: false,
				minlength: 5
			},
			confirm_password: {
				required: false,
				minlength: 5,
				equalTo: "input[name='new_password']"
			},
			reg_password: {
				required: true,
				minlength: 5
			},
			confirm_reg_password: {
				required: true,
				minlength: 5,
				equalTo: "input[name='reg_password']"
			},
			additional_email: {
				required: false
			}
		},
		messages: {
			new_password: {
				required: "Please provide a password",
				minlength: "введіть пароль не менше 5 символів"
			},
			confirm_password: {
				required: "Please provide a password",
				minlength: "введіть пароль не менше 5 символів",
				equalTo: "невірний пароль"
			},
			reg_password: {
				required: "Будь ласка, введіть пароль",
				minlength: "введіть пароль не менше 5 символів"
			},
			confirm_reg_password: {
				required: "Будь ласка, введіть пароль",
				minlength: "введіть пароль не менше 5 символів",
				equalTo: "Ваші паролі не співпадають."
			},
			additional_email: {
				email: "Будь ласка, введіть вірний Email"
			}
		}
	});
	jQuery("[name^=firstname]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, введіть Ваше ім'я",
				minlength: "ім'я повинно містити не менше 2 букв"
			}
		});
	});
	jQuery("[name^=lastname]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, введіть Ваше прізвище",
				minlength: "прізвище повинно містити не менше 2 букв"
			}
		});
	});
	jQuery("[name^=telephone]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, введіть номер телефону",
				minlength: "Номер телефону повинен містити не менше 10 цифр"
			}
		});
	});
	jQuery("[name^=gender]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, виберіть стать"
			}
		});
	});
	jQuery("[name^=operatot_type]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, виберіть тип"
			}
		});
	});
	jQuery("[name^=operatot_name]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, вкажіть оператора"
			}
		});
	});
	jQuery("[name^=tax_num]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, вкажіть номер платника податків",
				minlength: "номер платника податків містить 10 цифр",
				maxlength: "номер платника податків містить 10 цифр"
			}
		});
	});
	jQuery("[name^=license_num]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "це поле обов'язкове"
			}
		});
	});
	jQuery("[name^=country]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, виберіть країну"
			}
		});
	});
	jQuery("[name^=city]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, виберіть місто"
			}
		});
	});
	jQuery("[name^=address]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, виберіть адресу"
			}
		});
	});
	jQuery("[name^=email]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			email: true,
			messages: {
				required: "Будь ласка, введіть Email",
				email: "Будь ласка, введіть вірний Email"
			}
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
	jQuery("[name^=telephone]").each(function () {
		jQuery(this).rules("add", {
			required: true,
			messages: {
				required: "Будь ласка, введіть номер телефону",
				minlength: "Номер телефону повинен містити не менше 10 цифр"
			}
		});
	});

	
	
	// Num/Text validate
	jQuery(".num-only").each(function(){
		jQuery(this).bind("change keyup input click", function(){
			if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
	});
	jQuery(".text-only").each(function(){
		jQuery(this).bind("change keyup input click", function(){
			if (this.value.match(/[^а-яА-Яa-zA-ZїЇєЄіІёЁ ]/g)) {
				this.value = this.value.replace(/[^а-яА-Яa-zA-ZїЇєЄіІёЁ ]/g, '');
			}
		});
	});
});