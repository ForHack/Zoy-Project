$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('.fixed-top').addClass('color');
    }
    else {
        $('.fixed-top').removeClass('color');
    }
})

