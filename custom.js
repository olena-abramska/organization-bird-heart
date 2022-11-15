// jquery

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 400)
})