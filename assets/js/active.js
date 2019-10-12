$(function () {
    "use strict";
    //Main slider
    $('.client-slider').owlCarousel({
        nav: false,
        loop: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

   /*---------------------
   header animated fixed top
    --------------------- */

  $(function () {
        if ($('.header-area').length) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 140) {
                    $('.header-area').addClass('navbar-fixed-top');
                } else {
                    $('.header-area').removeClass('navbar-fixed-top');
                }
            });
        }
});

 /*---------------------
   toggle menu
    --------------------- */

  $(function () {
        $(".toggle").click(function(){
            $("ul").toggleClass("active");
        });
});

   /*---------------------
    preloader
    --------------------- */
   $(function () {
        if ($('#preloader').length) {
            $('#preloader').fadeOut('5000', function () {
                $(this).remove();
            });
        }
  });

   /*---------------------
    map function
    --------------------- */
 var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      map.addControl({
        position: 'top_right',
        content: 'Geolocate',
           styles: [{
          featureType: "all",
          elementType: "all",
          stylers: [
            { hue: '#e8bf5d;' }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            { hue: '#e8bf5d;'},
            { saturation: 50 },
            { lightness: -10 }
          ]
        }],
        events: {
          click: function(){
            GMaps.geolocate({
              success: function(position){
                map.setCenter(position.coords.latitude, position.coords.longitude);
              },
              error: function(error){
                alert('Geolocation failed: ' + error.message);
              },
              not_supported: function(){
                alert("Your browser does not support geolocation");
              }
            });
          }
        }
      });
    });
