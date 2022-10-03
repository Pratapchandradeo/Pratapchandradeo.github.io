!(function ($) {
  "use strict";
  // // Nav Menu
  //   $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //       var hash = this.hash;
  //       var target = $(hash);
  //       if (target.length) {
  //         e.preventDefault();

  //         if ($(this).parents('.nav-menu, .mobile-nav').length) {
  //           $('.nav-menu .active, .mobile-nav .active').removeClass('active');
  //           $(this).closest('li').addClass('active');
  //         }

  //         if (hash == '#header') {
  //           $('#header').removeClass('header-top');
  //           $("section").removeClass('section-show');
  //           return;
  //         }

  //         if (!$('#header').hasClass('header-top')) {
  //           $('#header').addClass('header-top');
  //           setTimeout(function() {
  //             $("section").removeClass('section-show');
  //             $(hash).addClass('section-show');
  //           }, 350);
  //         } else {
  //           $("section").removeClass('section-show');
  //           $(hash).addClass('section-show');
  //         }

  //         if ($('body').hasClass('mobile-nav-active')) {
  //           $('body').removeClass('mobile-nav-active');
  //           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  //           $('.mobile-nav-overly').fadeOut();
  //         }

  //         return false;

  //       }
  //     }
  //   });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav2").toggleClass("remove-nav");
  });
  $(".nav-bg").click(function () {
    $(".nav2").addClass("remove-nav");
    $(".hamburger").removeClass("active");
  });
})(jQuery);

window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav2");
  if (screen.width > 750) {
    if (window.scrollY > 400) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  }
});
