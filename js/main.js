$(function(){
    $('.modal__open').on('click' , function() {
        $('.modal').addClass('modal--active');
        $("body").css('overflow-y' , 'hidden');
    })
    $('.modal__cross').on('click' , function() {
        $('.modal').removeClass('modal--active');
        $("body").css('overflow-y' , 'scroll');
    })
    $('.modal').on('click'  , function(e) {
        let container = $('.modal__box');
        if(container.has(e.target).length ===0) {
            container.parent().removeClass('modal--active');
            $("body").css('overflow-y' , 'scroll');
        }
    })
    $(".modal__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    $('.add__slider').slick({
        dots:false ,
        slidesToShow: 3 ,
        slidesToScroll: 2
    });
    $('.vacancy__slider').slick({
        dots:false ,
        slidesToShow: 3 ,
        slidesToScroll: 2
    });
    $('.hero__bottom-box').on('click' , function() {
       $('.hero__bottom-circle').toggleClass('hero__bottom-circle--active');
        $('.hero__bottom-box').toggleClass('hero__bottom-box--active')
    });
    $('.know__item-head').on('click' , function() {
        $(this).parent().toggleClass('know__item--active');
    });
    // $('.know__item-head').on('click' , function() {
    //     $('.know__item').removeClass('know__item--active')
    //     $(this).parent().toggleClass('know__item--active');
    // });
    $('.add__item-btn').on('click' , function() {
        $(this).parent().toggleClass('add__item--active')
    });
    $('.vacansy__item-btn').on('click' , function() {
        $(this).parent().toggleClass('vacancy__item--active')
    });
 
})