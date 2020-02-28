jQuery(function ($) {
    $.scrollTo(0);
    $('#link1-1').click(function () {
        $.scrollTo($('#budowacrt'), 1000);
    });
    $('#link1-2').click(function () {
        $.scrollTo($('#działaniecrt'), 1000);
    });
    $('#link1-3').click(function () {
        $.scrollTo($('#maskicrt'), 1000);
    });
    $('#link1-4').click(function () {
        $.scrollTo($('#wadycrt'), 1000);
    });
    $('#link1-5').click(function () {
        $.scrollTo($('#parametrcrt'), 1000);
    });
    $('#link2-1').click(function () {
        $.scrollTo($('#budowalcd'), 1000);
    });
    $('#link2-2').click(function () {
        $.scrollTo($('#zasadalcd'), 1000);
    });
    $('#link2-3').click(function () {
        $.scrollTo($('#matrycelcd'), 1000);
    });
    $('#link2-4').click(function () {
        $.scrollTo($('#wadylcd'), 1000);
    });
    $('#link2-5').click(function () {
        $.scrollTo($('#parametrylcd'), 1000);
    });
    $('#link3-1').click(function () {
        $.scrollTo($('#dsub'), 1200);
    });
    $('#link3-2').click(function () {
        $.scrollTo($('#dvi'), 1000);
    });
    $('#link3-3').click(function () {
        $.scrollTo($('#hdmi'), 1000);
    });
    $('#link4-1').click(function () {
        $.scrollTo($('#future'), 1000);
    });
    $('#link4-2').click(function () {
        $.scrollTo($('#source'), 1000);
    });
    $('.scrollUp').click(function () {
        $.scrollTo($('body'), 1000);
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) $('.scrollUp').fadeIn();
    else $('.scrollUp').fadeOut();
});