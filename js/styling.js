(function($) {
  "use strict"; // Start of use strict


  // Smooth scrolling using jQuery easing
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });





/*
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
*/


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });




  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);



  // Scroll reveal calls
  window.sr = ScrollReveal();

  sr.reveal('.sr-intro-1', {
    delay: 500,
    duration: 1000,
    distance: '199px',
    scale: 5.9,
    rotate: {
        x: 30,
        y: 90,
        z: 30
    }
  });
  sr.reveal('.sr-hr-deco', {
    delay: 1500,
    duration: 1500,
    opacity: 0
  });
  sr.reveal('.sr-intro-2', {
    delay: 2000,
    duration: 1000,
    distance: '199px',
    scale: 5.9,
    easing: 'cubic-bezier(0.25,0.22,0.52,1.5)',
    rotate: {
        x: 30,
        y: 90,
        z: 30
    }
  });
  sr.reveal('.sr-arrow-down', {
    delay: 4000,
    duration: 1500,
    scale: 0
  });
  sr.reveal('.sr-icon-1', {
    delay: 200,
    scale: 0
  });
  sr.reveal('.sr-icon-2', {
    delay: 400,
    scale: 0
  });
  sr.reveal('.sr-icon-3', {
    delay: 600,
    scale: 0
  });
  sr.reveal('.sr-icon-4', {
    delay: 800,
    scale: 0
  });
  sr.reveal('.sr-icon-5', {
    delay: 1000,
    scale: 0
  });
  sr.reveal('.sr-icon-6', {
    delay: 1200,
    scale: 0
  });
  sr.reveal('.sr-icon-7', {
    delay: 1400,
    scale: 0
  });
  sr.reveal('.sr-contact-1', {
    delay: 200,
    distance: '99px',
    origin: 'left',
    scale: 2
  });
  sr.reveal('.sr-contact-2', {
    delay: 400,
    distance: '99px',
    origin: 'top',
    scale: 2
  });
  sr.reveal('.sr-contact-3', {
    delay: 600,
    scale: 2
  });
  sr.reveal('.sr-contact-4', {
    delay: 800,
    distance: '99px',
    origin: 'bottom',
    scale: 2
  });
  sr.reveal('.sr-contact-5', {
    delay: 1000,
    distance: '99px',
    origin: 'right',
    scale: 2
  });




  // Magnific popup calls
  $('.popup-gallery').magnificPopup({   // popup-gallery is class assigned to the images div
    delegate: 'a',  // child items selector, by clicking on it popup will open
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,  // set to true to enable gallery
      navigateByImgClick: true,
      preload: [0, 1] //Lazy-loading option preloads nearby items. Read more in documentation
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    },
    image: {
//      titleSrc: 'title',
      titleSrc: function(item) {
//        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
          return 'Click link to view - <a href="' + item.el.attr('src') + '" target="_blank">' + item.el.attr('title') + '</a>';
      },
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });





})(jQuery); // End of use strict
