AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

   "use strict";

   var isMobile = {
       Android: function() {
           return navigator.userAgent.match(/Android/i);
       },
           BlackBerry: function() {
           return navigator.userAgent.match(/BlackBerry/i);
       },
           iOS: function() {
           return navigator.userAgent.match(/iPhone|iPad|iPod/i);
       },
           Opera: function() {
           return navigator.userAgent.match(/Opera Mini/i);
       },
           Windows: function() {
           return navigator.userAgent.match(/IEMobile/i);
       },
           any: function() {
           return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
       }
   };


   $(window).stellar({
   responsive: true,
   parallaxBackgrounds: true,
   parallaxElements: true,
   horizontalScrolling: false,
   hideDistantElements: false,
   scrollProperty: 'scroll',
   horizontalOffset: 0,
     verticalOffset: 0
 });


   var fullHeight = function() {

       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
           $('.js-fullheight').css('height', $(window).height());
       });

   };
   fullHeight();

   // loader
   var loader = function() {
       setTimeout(function() { 
           if($('#ftco-loader').length > 0) {
               $('#ftco-loader').removeClass('show');
           }
       }, 1);
   };
   loader();

   // Scrollax
  $.Scrollax();

  var carousel = function() {
    $('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:false,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
    });
    $('.carousel-testimony').owlCarousel({
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        }
    });
    $('.carousel-client').owlCarousel({
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

    $('.single-slider').owlCarousel({
        animateOut: 'fadeOut',
    animateIn: 'fadeIn',
        autoplay: true,
        loop: true,
        items:1,
        margin: 0,
        stagePadding: 0,
        nav: true,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

};
carousel();

   $('nav .dropdown').hover(function(){
       var $this = $(this);
       // 	 timer;
       // clearTimeout(timer);
       $this.addClass('show');
       $this.find('> a').attr('aria-expanded', true);
       // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
       $this.find('.dropdown-menu').addClass('show');
   }, function(){
       var $this = $(this);
           // timer;
       // timer = setTimeout(function(){
           $this.removeClass('show');
           $this.find('> a').attr('aria-expanded', false);
           // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
           $this.find('.dropdown-menu').removeClass('show');
       // }, 100);
   });


   $('#dropdown04').on('show.bs.dropdown', function () {
     console.log('show');
   });

   // scroll
   var scrollWindow = function() {
       $(window).scroll(function(){
           var $w = $(this),
                   st = $w.scrollTop(),
                   navbar = $('.ftco_navbar'),
                   sd = $('.js-scroll-wrap');

           if (st > 150) {
               if ( !navbar.hasClass('scrolled') ) {
                   navbar.addClass('scrolled');	
               }
           } 
           if (st < 150) {
               if ( navbar.hasClass('scrolled') ) {
                   navbar.removeClass('scrolled sleep');
               }
           } 
           if ( st > 350 ) {
               if ( !navbar.hasClass('awake') ) {
                   navbar.addClass('awake');	
               }
               
               if(sd.length > 0) {
                   sd.addClass('sleep');
               }
           }
           if ( st < 350 ) {
               if ( navbar.hasClass('awake') ) {
                   navbar.removeClass('awake');
                   navbar.addClass('sleep');
               }
               if(sd.length > 0) {
                   sd.removeClass('sleep');
               }
           }
       });
   };
   scrollWindow();

   var isMobile = {
       Android: function() {
           return navigator.userAgent.match(/Android/i);
       },
           BlackBerry: function() {
           return navigator.userAgent.match(/BlackBerry/i);
       },
           iOS: function() {
           return navigator.userAgent.match(/iPhone|iPad|iPod/i);
       },
           Opera: function() {
           return navigator.userAgent.match(/Opera Mini/i);
       },
           Windows: function() {
           return navigator.userAgent.match(/IEMobile/i);
       },
           any: function() {
           return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
       }
   };

   
   var counter = function() {
       
       $('#section-counter').waypoint( function( direction ) {

           if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

               var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
               $('.number').each(function(){
                   var $this = $(this),
                       num = $this.data('number');
                       console.log(num);
                   $this.animateNumber(
                     {
                       number: num,
                       numberStep: comma_separator_number_step
                     }, 7000
                   );
               });
               
           }

       } , { offset: '95%' } );

   }
   counter();

   var contentWayPoint = function() {
       var i = 0;
       $('.ftco-animate').waypoint( function( direction ) {

           if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
               
               i++;

               $(this.element).addClass('item-animate');
               setTimeout(function(){

                   $('body .ftco-animate.item-animate').each(function(k){
                       var el = $(this);
                       setTimeout( function () {
                           var effect = el.data('animate-effect');
                           if ( effect === 'fadeIn') {
                               el.addClass('fadeIn ftco-animated');
                           } else if ( effect === 'fadeInLeft') {
                               el.addClass('fadeInLeft ftco-animated');
                           } else if ( effect === 'fadeInRight') {
                               el.addClass('fadeInRight ftco-animated');
                           } else {
                               el.addClass('fadeInUp ftco-animated');
                           }
                           el.removeClass('item-animate');
                       },  k * 50, 'easeInOutExpo' );
                   });
                   
               }, 100);
               
           }

       } , { offset: '95%' } );
   };
   contentWayPoint();


   // navigation
   var OnePageNav = function() {
       $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
            e.preventDefault();

            var hash = this.hash,
                    navToggler = $('.navbar-toggler');
            $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 700, 'easeInOutExpo', function(){
           window.location.hash = hash;
         });


         if ( navToggler.is(':visible') ) {
             navToggler.click();
         }
       });
       $('body').on('activate.bs.scrollspy', function () {
         console.log('nice');
       })
   };
   OnePageNav();


   // magnific popup
   $('.image-popup').magnificPopup({
   type: 'image',
   closeOnContentClick: true,
   closeBtnInside: false,
   fixedContentPos: true,
   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
     verticalFit: true
   },
   zoom: {
     enabled: true,
     duration: 300 // don't foget to change the duration also in CSS
   }
 });

 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,

   fixedContentPos: false
 });


 // TYPEWRITE
   var TxtType = function(el, toRotate, period) {
     this.toRotate = toRotate;
     this.el = el;
     this.loopNum = 0;
     this.period = parseInt(period, 10) || 2000;
     this.txt = '';
     this.tick();
     this.isDeleting = false;
   };

   TxtType.prototype.tick = function() {
     var i = this.loopNum % this.toRotate.length;
     var fullTxt = this.toRotate[i];

     if (this.isDeleting) {
     this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
     this.txt = fullTxt.substring(0, this.txt.length + 1);
     }

     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

     var that = this;
     var delta = 200 - Math.random() * 100;

     if (this.isDeleting) { delta /= 2; }

     if (!this.isDeleting && this.txt === fullTxt) {
     delta = this.period;
     this.isDeleting = true;
     } else if (this.isDeleting && this.txt === '') {
     this.isDeleting = false;
     this.loopNum++;
     delta = 500;
     }

     setTimeout(function() {
     that.tick();
     }, delta);
   };

   window.onload = function() {
     var elements = document.getElementsByClassName('typewrite');
     for (var i=0; i<elements.length; i++) {
         var toRotate = elements[i].getAttribute('data-type');
         var period = elements[i].getAttribute('data-period');
         if (toRotate) {
           new TxtType(elements[i], JSON.parse(toRotate), period);
         }
     }
     // INJECT CSS
     var css = document.createElement("style");
     css.type = "text/css";
     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
     document.body.appendChild(css);
   };


})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
   const filterButtons = document.querySelectorAll(".filter-buttons .filter");
   const portfolioItems = document.querySelectorAll(".portfolio-items .col-md-4");

   filterButtons.forEach(button => {
       button.addEventListener("click", function() {
           const filterValue = button.getAttribute("data-filter");

           // Remove 'active' class from all buttons and add it to the clicked button
           filterButtons.forEach(btn => btn.classList.remove("active"));
           button.classList.add("active");

           // Show/hide portfolio items based on the filter
           portfolioItems.forEach(item => {
               if (filterValue === "all" || item.classList.contains(filterValue)) {
                   item.style.display = "block";
               } else {
                   item.style.display = "none";
               }
           });
       });
   });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.header-menu-toggle');
    const navItems = document.querySelectorAll('.header-nav__list li a');
    const navClose = document.querySelector('.header-nav__close');
    const header = document.querySelector('.s-header');

    // Function to show the hamburger icon
    function showHamburgerIcon() {
        menuToggle.style.display = 'flex';
    }

    // Function to hide the hamburger icon
    function hideHamburgerIcon() {
        menuToggle.style.display = 'none';
    }

    // Show hamburger icon initially when page loads
    showHamburgerIcon();

    // Add event listeners to each nav item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Hide hamburger icon when a nav item is clicked
            hideHamburgerIcon();
        });
    });

    // Add event listener to close button
    navClose.addEventListener('click', function() {
        // Show hamburger icon when the close button is clicked
        showHamburgerIcon();
    });

    // Add scroll event listener to show/hide hamburger icon based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 0) {
            // Show hamburger icon when scrolled
            showHamburgerIcon();
        } else {
            // Hide hamburger icon when at the top of the page
            if (!header.classList.contains('nav-open')) {
                hideHamburgerIcon();
            }
        }
    });

    // Additional check on page load in case of initial scroll position
    if (window.scrollY > 0) {
        showHamburgerIcon();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all accordions
    var accordions = document.querySelectorAll('.accordion');
    accordions.forEach(function (accordion) {
      new bootstrap.Collapse(accordion, {
        toggle: false // Optional setting to prevent multiple accordions from being open at the same time
      });
    });
  });

  $(document).ready(function() {
    // Smooth scrolling when clicking on links with class 'smoothscroll'
    $('.smoothscroll').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Toggle mobile navigation
    $('.header-nav__close').on('click', function() {
        $('.header-nav__list').toggleClass('open');
        $(this).toggleClass('open');
    });

    // Close mobile navigation on link click
    $('.header-nav__list li').on('click', function() {
        $('.header-nav__list').removeClass('open');
        $('.header-nav__close').removeClass('open');
    });

    // Close mobile navigation when clicking outside of it
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.header-nav__content').length) {
            $('.header-nav__list').removeClass('open');
            $('.header-nav__close').removeClass('open');
        }
    });
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});