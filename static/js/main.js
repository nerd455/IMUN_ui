$(window).scroll(function () {
    if ($(window).scrollTop() >= $( window ).height()) {
        $('nav').css('background', '#2196f3');
    } else {
        $('nav').css('background', 'transparent');
    }
});