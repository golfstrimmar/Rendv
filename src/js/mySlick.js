import $ from "jquery";

$(Document).ready(function () {
  $(".slider-main-js").slick({
    dots: true,
    arrows: false,
    // slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    // centerPadding: "0px",
    slidesToShow: 1,
    // nextArrow: $(".slider-main-arrows__arrow_next"),
    // prevArrow: $(".slider-main-arrows__arrow_prev"),
    
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  });
});
