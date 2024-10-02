$(function () {

    let promoSliderObj = $('.js__promo-slider');

    promoSliderObj.find('.slider').slick({
        appendArrows: $(promoSliderObj.find('.controls'))
    });
});