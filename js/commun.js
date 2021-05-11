/*$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});*/

// Select all »a« elements with a parent class »links« and add a function that is executed on click
$( '.links a' ).on( 'click', function(e){
	
	// Define variable of the clicked »a« element (»this«) and get its href value.
	var href = $(this).attr( 'href' );
	var speed = 750;
	
	// Run a scroll animation to the position of the element which has the same id like the href value.
	$( 'html, body' ).animate({
		  scrollTop: $( href ).offset().top
	}, speed );
	  
	// Prevent the browser from showing the attribute name of the clicked link in the address bar
	e.preventDefault();
  
  });

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 10) {
        $("#header-sroll").addClass("small")
    } else {
        $("#header-sroll").removeClass("small")
    }
});

$(window).scroll(function() {

	$('.fondu_left, .fondu_right').each(function() {
		if($(document).scrollTop() >= parseInt($(this).offset().top - 700)) {
			$(this).addClass('fondu_revele');
		}
	});

	$('.fondu_top').each(function() {
		if($(document).scrollTop() >= parseInt($(this).offset().top - 700)) {
			$(this).addClass('fondu_revele');
		}
	});

	$('.fade').each(function() {
		if($(document).scrollTop() >= parseInt($(this).offset().top - 500)) {
			$(this).addClass('fondu_revele');
		}
	});
	
	if($('#agence-karactere').length > 0) {
		if($(document).scrollTop() >= parseInt($('#agence-karactere').offset().top - 800)) {
			$('#agence-karactere').addClass('active');
		}
	}

	$('.parallax_div').each(function() {
		if($(document).scrollTop() >= parseInt($(this).offset().top - 700)) {
			$(this).css('margin-top', 100 + $(document).scrollTop() / -10);
		}
	});

});

$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 1000);
	
});