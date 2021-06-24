(function () {
'use strict';
jQuery(document).ready(function() {

    $('.startups_slider').owlCarousel({
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      dots: false,
      items: 5,
      animateOut: 'fadeOut',
      loop: true,
      margin: 30,
      responsive : {
        0 : {
          items: 1,
        },
        480 : {
          items: 2,
        },
        768 : {
          items: 3,
        },
        1200 : {
          items: 5,
        }
      }
    });

    new Mmenu(document.querySelector('#menu'));
    document.addEventListener('click', function (evnt) {
        var anchor = evnt.target.closest('a[href^="#/"]');
        if (anchor) {
            evnt.preventDefault();
        }
    });

    $('.play-btn').magnificPopup({})

});
})();