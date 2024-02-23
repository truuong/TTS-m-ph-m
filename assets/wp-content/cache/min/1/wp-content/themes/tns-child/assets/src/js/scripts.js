jQuery(function($) {
    $('body').on("click", ".scrollToTop", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return !1
    });
    $(window).bind("load", function() {
        if ($(window).width() < 991) {
            new Mmenu("#primary-menu", {
                extensions: ["position-right"]
            }, {
                offCanvas: {
                    clone: !0
                }
            })
            new Mmenu("#secondary-menu", {
                extensions: ["position-right"]
            }, {
                offCanvas: {
                    clone: !0
                }
            })
        }
    });
    $('.primary-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: '.primary-slider-nav',
        adaptiveHeight: !0,
    });
    $('.primary-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.primary-slider',
        dots: !1,
        focusOnSelect: !0,
        autoplay: !0,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    $('.videos-slick-slider').slick({
        dots: !1,
        arrows: !1,
        infinite: !1,
        speed: 300,
        slidesToShow: 1,
        centerMode: !0,
        centerPadding: '388px',
        autoplay: !0,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                centerPadding: '100px',
            }
        }, {
            breakpoint: 992,
            settings: {
                centerPadding: '100px',
            }
        }, {
            breakpoint: 600,
            settings: {
                centerPadding: '30px',
            }
        }]
    });
    $('.tiktok-videos-slick-slider').slick({
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }, ]
    });
    $('.flex-control-nav').slick({
        dots: !1,
        arrows: !1,
        infinite: !1,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    $('body').on('click', 'button.woo-quantity-plus, button.woo-quantity-minus', function() {
        let quantityFieldEle = $(this).siblings('.quantity').find('.qty');
        let qtyVal = parseFloat(quantityFieldEle.val());
        qtyVal = (!isNaN(qtyVal)) ? qtyVal : parseFloat(0);
        let qtyMax = parseFloat(quantityFieldEle.attr('max'));
        let qtyMin = parseFloat(quantityFieldEle.attr('min'));
        let qtyStep = parseFloat(quantityFieldEle.attr('step'));
        let qtyValSplit = String(qtyVal).split('.');
        let qtyStepSplit = String(qtyStep).split('.');
        let qtyValPrecision = (qtyValSplit[1]) ? qtyValSplit[1].length : parseFloat(0);
        let qtyStepPrecision = (qtyStepSplit[1]) ? qtyStepSplit[1].length : parseFloat(0);
        let precision = (qtyValPrecision > qtyStepPrecision) ? qtyValPrecision : qtyStepPrecision;
        if ($(this).is('.woo-quantity-plus')) {
            if (isNaN(qtyMax)) {
                quantityFieldEle.val(parseFloat((qtyVal + qtyStep)).toFixed(precision))
            } else {
                if (qtyVal < qtyMax) {
                    let increVal = parseFloat(qtyVal + qtyStep).toFixed(precision);
                    if (increVal >= qtyMax) {
                        increVal = qtyMax
                    }
                    quantityFieldEle.val(increVal)
                }
                if (qtyMax === qtyVal) {
                    quantityFieldEle.val(qtyMax)
                }
            }
        }
        if ($(this).is('.woo-quantity-minus')) {
            if (qtyVal === qtyMin) {
                quantityFieldEle.val(qtyMin)
            }
            if (qtyVal > qtyMin) {
                let decreVal = parseFloat(qtyVal - qtyStep).toFixed(precision);
                if (decreVal <= qtyMin) {
                    decreVal = qtyMin
                }
                quantityFieldEle.val(decreVal)
            }
        }
    });
    $('.related .products').slick({
        dots: !1,
        arrows: !0,
        infinite: !1,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
    $('.partners-slick-slider').slick({
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }]
    })
})