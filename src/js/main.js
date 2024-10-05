$(function () {

    let promoSliderObj = $('.js__promo-slider');

    promoSliderObj.find('.slider').slick({
        appendArrows: $(promoSliderObj.find('.controls')),
        prevArrow: '<div class="slick-arrow slick-arrow--prev"></div>',
        nextArrow: '<div class="slick-arrow slick-arrow--next"></div>',
    });
});