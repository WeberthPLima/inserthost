$(function() {
	// entrar em contato
	$('.contact-open').click(function() {
		$(this).next('.box-form').slideToggle();
	});

	$( ".portifolio-home .web" ).mouseenter(function() {
		$(this).addClass('ativo');
		$('.portifolio-home .graphic').addClass('mini');
		// $('.grid-img').show();
		// $('.grid-img').css('width','100%');
	});
	$( ".portifolio-home .web" ).mouseout(function() {
		$(this).removeClass('ativo');
		$('.portifolio-home .graphic').removeClass('mini');
	// 	$('.grid-img').fadeOut( 100 );
	// 	$('.grid-img').css('width','1%');
	});
	$( ".portifolio-home .graphic" ).mouseenter(function() {
		$(this).addClass('ativo');
		$('.portifolio-home .web').addClass('mini');
		// $('.grid-img').show();
		// $('.grid-img').css('width','100%');
	});
	$( ".portifolio-home .graphic" ).mouseout(function() {
		$(this).removeClass('ativo');
		$('.portifolio-home .web').removeClass('mini');
	// 	$('.grid-img').fadeOut( 100 );
	// 	$('.grid-img').css('width','1%');
	});
});