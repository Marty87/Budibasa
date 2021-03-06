// function include(scriptUrl) {
//     document.write('<script src="' + scriptUrl + '"></script>');
// }

 function isIE() {
     var myNav = navigator.userAgent.toLowerCase();
     return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
 };

/* cookie.JS
 ========================================================*/
// include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
// include('js/jquery.easing.1.3.js');

/* PointerEvents
 ========================================================*/
// ;
// (function ($) {
//     if(isIE() && isIE() < 11){
//         include('js/pointer-events.js');
//         $('html').addClass('lt-ie11');
//         $(document).ready(function(){
//             PointerEventsPolyfill.initialize({});
//         });
//     }
// })(jQuery);

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    // if (o.hasClass('desktop')) {
    //     include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    // }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    // var o = $('html');
    // if (o.hasClass('desktop')) {
    //     include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop'
            });
        });
    // }
})(jQuery);

/* EqualHeights
 ========================================================*/
// ;
// (function ($) {
//     var o = $('[data-equal-group]');
//     if (o.length > 0) {
//         include('js/jquery.equalheights.js');
//     }
// })(jQuery);

/* Copyright Year
 ========================================================*/
// ;
// (function ($) {
//     var currentYear = (new Date).getFullYear();
//     $(document).ready(function () {
//         $("#copyright-year").text((new Date).getFullYear());
//     });
// })(jQuery);


/* Superfish menus
 ========================================================*/
// ;
// (function ($) {
//     include('js/superfish.js');
// })(jQuery);

/* Navbar
 ========================================================*/
// ;
// (function ($) {
//     include('js/jquery.rd-navbar.js');
// })(jQuery);


/* Google Map
 ========================================================*/
// ;
// (function ($) {
//     var o = document.getElementById("google-map");
//     if (o) {
//         include('//maps.google.com/maps/api/js?sensor=false');
//         include('js/jquery.rd-google-map.js');

//         $(document).ready(function () {
//             var o = $('#google-map');
//             if (o.length > 0) {
//                 o.googleMap();
//             }
//         });
//     }
// })
// (jQuery);

/* WOW
 ========================================================*/
// ;
// (function ($) {
//     var o = $('html');

//     if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
//         if (o.hasClass('desktop')) {
//             include('js/wow.js');

//             $(document).ready(function () {
//                 new WOW().init();
//             });
//         }
//     }
// })(jQuery);

/* Mailform
=============================================*/
// ;(function ($) {
//     include('js/mailform/jquery.form.min.js');
//     include('js/mailform/jquery.rd-mailform.min.js');
// })(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');


/* Search.js
 ========================================================*/
// ;
// (function ($) {
//     include('js/TMSearch.js');
// })(jQuery);

/* Camera
========================================================*/
;(function ($) {
var o = $('#camera');
//     if (o.length > 0) {
//         if (!(isIE() && (isIE() > 9))) {
//             include('js/jquery.mobile.customized.min.js');
//         }

        // include('js/camera.js');

        $(document).ready(function () {
            o.camera({
                autoAdvance: true,
                height: '34.9375%',
                minHeight: '300px',
                pagination: true,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: false,
                mobileNavHover: false,
                fx: 'simpleFade'
            })
        });
    // }
})(jQuery);



/* Owl Carousel
========================================================*/
;(function ($) {
    var o = $('.owl-carousel');
    // if (o.length > 0) {
        // include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 30,
                smartSpeed: 450,
                loop: true,
                dots: true,
                thumbs: true,
                thumbsPrerendered: true,
                dotsEach: 1,
                nav: true,
                navClass: ['owl-prev', 'owl-next'],
                responsive: {
                    0: { items: 1 },
                    768: { items: 1},
                    980: { items: 1},
                    1200:{ items: 1}
                }
            });
        });
    // }
})(jQuery);

;(function ($) {
    var o = $('.owl-carousel-2');
    // if (o.length > 0) {
    //     include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 30,
                smartSpeed: 450,
                loop: true,
                dots: true,
                thumbs: true,
                thumbsPrerendered: true,
                dotsEach: 1,
                nav: true,
                navClass: ['owl-prev', 'owl-next'],
                responsive: {
                    0: { items: 1 },
                    550: {items:2 },
                    768: { items: 3},
                    980: { items: 4},
                    1200:{ items: 4}
                }
            });
        });
    // }
})(jQuery);

/* Owl Carousel Thumbnail
========================================================*/
// include('js/owl.carousel2.thumbs.js');


/* Fittext
 ========================================================*/
;(function ($) {
    $(".fittext1").fitText(1.1, { minFontSize: '32px', maxFontSize: '52px' });
})(jQuery);


/* Scrollbar
 ========================================================*/
// include('js/jquery.scrollbar.js');
jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

/* Сities_List
 ========================================================*/
$(function(){
    $('.delivery_list').click(function(){
    $(".cities_list").slideToggle('fast');
    });
    $('ul.cities_list li').click(function(){
    var tx = $(this).html();
    var tv = $(this).attr('alt');
    $(".cities_list").slideUp('fast');
    $(".delivery_list span").html(tx);
    $(".delivery_text").html(tv);
    });
})

/* Responsive Tabs
 ========================================================*/
;
(function ($) {
    var o = $('.resp-tabs');
    // if (o.length > 0) {
    //     include('js/jquery.responsive.tabs.js');

        $(document).ready(function () {
            o.easyResponsiveTabs();
        });
    // }
})(jQuery);

/* Parallax
=============================================*/
// ;(function ($) {
//     include('js/jquery.rd-parallax.js');
// })(jQuery);


/* News slider
=============================================*/
(function($) {
    $(window).load(function() {
        $('#kiss-slider').kissSlider({
            prevSelector: '.prev-news',
            nextSelector: '.next-news',
        });
    });
})(jQuery);



/* stuck Menu
=============================================*/



   // $('.lang-menu-icon').click(function() {

   //  $('.stuck-menu').toggleClass('active');

   //  });

// $(document).ready(main);


  $(document).ready(function () {
        $('.lang-menu-icon').click(function(){
        $('.stuck-menu').toggleClass("active-menu");
    });
});

// $('.lang-menu-icon').click(function(){
//   $('.stuck-menu').toggleClass("expand");
// });


//  $(".sandwich").on('click', function() {
//         $('.top_header__menu').toggle(200);
//         $(this).toggleClass('active');
// });



