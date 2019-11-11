$(window).ready( function(){

    // Slick.js slideshow    
    $(".slideDisplay").slick({
        dots: false,
        arrows: true,
        // prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        // nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1
    });
    
    // Calculates section's offset for navigation dots AFTER THE SLIDESHOW has been created for accurate offset data. 
    initDotNavigation();

    //Animation
    // Triggers scroll event when page gets refreshed. 
    window.scrollTo(window.scrollX, window.scrollY - 1);
    // Header animation
    $('.title').css('animation-name', 'fadeInLeft');
    // Scrolling animation
    $(window).on('scroll', function(e) {
        var scrolled = $(this).scrollTop();
        var target = [];
        target.push($('#dot1').data('position'));
        target.push($('#dot3').data('position'));
        var offset = target[1] / 5;
        // Home section animation
        if (scrolled >= target[0] - offset){
            $('.portrait').css('animation-name', 'fadeInLeft');
        }
        // Contact section animation
        if (scrolled >= target[1] - offset) {
            $('.contactGrid > div').css('animation-name', 'fadeInLeft');
        }

    });



});
