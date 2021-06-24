(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    
        
        
        

        
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
        
        
        
      
        

       
              
        $(".garden-slider-active").owlCarousel({
            items:6,
            nav:true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot:false,
            loop:true,
            margin:10,
            center:false,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:5,
                   
                },
                1000:{
                    items:6,
                   
                }
            }
            
          
        });
              
        $(".Homes-garden-slider-active").owlCarousel({
            items:6,
            nav:true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot:false,
            loop:true,
            margin:10,
            center:false,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:5,
                   
                },
                1000:{
                    items:6,
                   
                }
            }
            
          
        });
              
        $(".natural-slider-ative").owlCarousel({
            items:6,
            nav:true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot:false,
            loop:true,
            margin:10,
            center:false,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:5,
                   
                },
                1000:{
                    items:6,
                   
                }
            }
            
          
        });
              
        $(".natural-slider-2-active").owlCarousel({
            items:3,
            nav:true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot:false,
            loop:true,
            margin:10,
            center:false,
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
              
        $(".shade-active").owlCarousel({
            items:6,
            nav:true,
            navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
            dot:false,
            loop:true,
            margin:10,
            center:false,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:5,
                   
                },
                1000:{
                    items:6,
                   
                }
            }
            
          
        });

        
        



    });


    
    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");

    $('[data-toggle="tooltip"]').tooltip();


    $('.menu-open').click(function () {

        $('.offcanvas-area , .offcanvas-overlay').toggleClass('active');

    });

    $('.menu-close, .offcanvas-overlay').click(function () {

        $('.offcanvas-area, .offcanvas-overlay').removeClass('active');

    });



    jQuery(window).load(function(){


    });


}(jQuery));	