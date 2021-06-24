(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    
        
        
        
        
     // Script for OffCanvas Menu Activation
        $(document).ready(function () {
            $('.toggle-bar').on('click', function () {
                $('.off-canvas-menu-wrap, .off-canvas-overlay').addClass('active');
            })

            $('.cls-off-canvas-menu').on('click', function () {
                $('.off-canvas-menu-wrap, .off-canvas-overlay').removeClass('active');
            })

            $('.off-canvas-overlay').on('click', function () {
                $('.off-canvas-menu-wrap, .off-canvas-overlay').removeClass('active');
            })
        })

        
    $(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});
        
        
        
             // Menu Nav
        function smoothSctollTop() {
            $('.main-menu ul li > a').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 124
                    }, 1000);
                }
            });
        }
        smoothSctollTop();
        
        
        $('.ingredients-area').scrolly({bgParallax:true});
        
        
        

       
              
        $(".slider-active").owlCarousel({
            items:3,
            nav:false,
            navText: ['<i class="fal fa-angle-right"></i>', '<i class="fal fa-angle-left"></i>'],
            dot:true,
            loop:true,
            margin:20,
            center:true,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:3,
                   
                },
                1000:{
                    items:3,
                   
                }
            }
            
          
        });

        
        



    });







    jQuery(window).load(function(){


    });


}(jQuery));	