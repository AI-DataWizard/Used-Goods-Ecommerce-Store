$(document).ready(function () {
  /*
  $("#search, #icon").mouseenter(function () {
    $(".logo").hide();
  });

  $("#search, #icon").mouseleave(function () {
    $(".logo").show();
  });
  */
  $(".fa-bars").click(function () {
    $(".navbar").toggle();
  });

  $(".navbar, .navbar a").click(function () {
    $(".navbar").hide();
  });

  $(".home-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
  });

  $(".product-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 3,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      650: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".review-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    autoplay: true,
  });

  $(".brand-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 4,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      400: {
        items: 2,
      },
      550: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
