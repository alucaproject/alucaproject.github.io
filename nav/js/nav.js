
// Navigation
// Open/Close navButton
var flag = false;
$('.navIcon').on("click", function (e) {
    if (flag == false) {
        $('.navMenu').addClass('navMenuOPEN');
        flag = true;
    } else if (flag == true) {
        $('.navMenu').removeClass('navMenuOPEN');
        flag = false;
    }
});
$('.navItem a').on('click', function (e) {
    if (flag == true) {
        $('.navMenu').removeClass('navMenuOPEN');
        flag = false;
        // navIcon reset
        $('.navAnimatedIcon').toggleClass('open');
    }
});

// Scroll Effect - Scrolls smoothly to the anchored <section> tag.
$('a[href*=\\#]').on('click', function (e) {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'swing');
    e.preventDefault();
});

// Animation for navIcon
$('.navAnimatedIcon').click(function (e) {
    $(this).toggleClass('open');
});