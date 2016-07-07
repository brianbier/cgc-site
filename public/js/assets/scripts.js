/***************** Waypoints ******************/

$(document).ready(function() {

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInDown');
  }, {
    offset: '55%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

  $('.nav_slide_button').click(function() {
    $('.pull').slideToggle();
  });
});

        /***************** Nav Transformicon ******************/

        /* When user clicks the Icon */
        $(".nav-toggle").click(function() {
            $(this).toggleClass("active");
            $(".navigation").toggleClass("open");
            event.preventDefault();
        });

        /* When user clicks a link */
        $(".overlay ul li a").click(function() {
            $(".nav-toggle").toggleClass("active");
            $(".navigation").toggleClass("open");
        });

        /* When user clicks outside */
        $(".overlay").click(function() {
            $(".nav-toggle").toggleClass("active");
            $(".navigation").toggleClass("open");
        });
        /***************** Header BG Scroll ******************/

        $(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 40) {
                    $(".fixed-header").addClass("hasBg header-sml");
                } else {
                    $(".fixed-header").removeClass("hasBg header-sml");
                }
            });
        });

/***************** Smooth Scrolling ******************/

$(function() {

  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

  $('#portfolioSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });

  $('#servicesSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });

  $('#teamSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });

  $('#testimonialSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    controlNav: false, 
    start: function() {
      $.waypoints('refresh');
    }
  });
  $('#mobileTeamSlider').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    touch: true,
    pauseOnHover: true,
    start: function() {
      $.waypoints('refresh');
    }
  });
});

/***************** FancyBox ******************/
$(document).ready(function(){
      /*
       *  Simple image gallery. Uses default settings
       */

      $('.fancybox').fancybox();
      /*
       *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
      */
      $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
          openEffect : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',

          arrows : false,
          helpers : {
            media : {},
            buttons : {}
          }
        });

$(".gallerypdf").fancybox({
openEffect: 'elastic',
closeEffect: 'elastic',
autoSize: true,
type: 'iframe',
iframe: {
preload: false // fixes issue with iframe and IE
}
});
  
})