	jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 960,
				position: 'right',
				phoneBtn: '18009997788',
				locationBtn: 'https://www.google.com/maps'
			});
		});

	$(window).scroll(function(){
		if ($(this).scrollTop()>400){
			$("#scroll-top").fadeIn();
		}else{
			$("#scroll-top").fadeOut();
		}
	});
	$("#scroll-top").click(function(){
		$("html, body").animate({scrollTop:0}, 500)
	});

 

 