(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        $('.menu-open').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').toggleClass('active');

        });

        $('.menu-close, .offcanvas-overlay').click(function () {

            $('.offcanvas-area, .offcanvas-overlay').removeClass('active');

        });



        $(".single-slider-item").owlCarousel({
            items: 5,
            nav: true,
            dot: true,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,

                },
                768: {
                    items: 4,

                },
                1000: {
                    items: 5,

                }
            }


        });




    });


    jQuery(window).load(function () {


    });


}(jQuery));