import $ from "jquery";

$(Document).ready(function () {
  $(".slider-sale-js").slick({
    // dots: true,
    // arrows: false,
    slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerMode: false,
    // centerPadding: "0px",
    // slidesToShow: 1,
    nextArrow: $(".slider__arrow_next--sale"),
    prevArrow: $(".slider__arrow_prev--sale"),

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
$(Document).ready(function () {
  $(".slider-rent-js").slick({
    // dots: true,
    // arrows: false,
    slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerMode: false,
    // centerPadding: "0px",
    // slidesToShow: 1,
    nextArrow: $(".slider__arrow_next--rent"),
    prevArrow: $(".slider__arrow_prev--rent"),

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
$(Document).ready(function () {
  $(".slider-advert-js").slick({
    // dots: true,
    // arrows: false,
    slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerMode: false,
    // centerPadding: "0px",
    // slidesToShow: 1,
    nextArrow: $(".slider__arrow_next--advert"),
    prevArrow: $(".slider__arrow_prev--advert"),

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
$(Document).ready(function () {
  $(".slider-advert-next-js").slick({
    // dots: true,
    // arrows: false,
    slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerMode: false,
    // centerPadding: "0px",
    // slidesToShow: 1,
    nextArrow: $(".slider__arrow_next--advert-next"),
    prevArrow: $(".slider__arrow_prev--advert-next"),

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
$(Document).ready(function () {
  $(".slider-revieves-js").slick({
    // dots: true,
    // arrows: false,
    slidesToShow: 4,
    // slideToscroll: 1,
    speed: 800,
    easing: "ease",
    cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerMode: false,
    // centerPadding: "0px",
    // slidesToShow: 1,
    nextArrow: $(".slider__arrow_next--revieves"),
    prevArrow: $(".slider__arrow_prev--revieves"),

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
// $(Document).ready(function () {
//   $(".slider-bunners-js").slick({
//     dots: true,
//     arrows: true,
//     slidesToShow: 1,
//     // slideToscroll: 1,
//     speed: 800,
//     easing: "ease",
//     cssEase: "linear",
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     centerMode: false,
//     // centerPadding: "0px",
//     // slidesToShow: 1,
//     nextArrow: $(".bunners-slider_prev"),
//     prevArrow: $(".bunners-slider_next"),

//     customPaging: function (slider, i) {
//       let button = slider.slideCount;
//       return i + 1 + "/" + button;
//     },
    

// // button.css("font-size","10px"),
//   });





// });

$(".slider-bunners-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  // slideToscroll: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  // autoplay: true,
  // autoplaySpeed: 3000,
  centerMode: false,
  // centerPadding: "0px",
  // slidesToShow: 1,
  nextArrow: $(".bunners-arrows__arrow_next"),
  prevArrow: $(".bunners-arrows__arrow_prev"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
			<span class="slick-dots-current">' +
      current +
      '</span>\
			<span class="slick-dots-separator">/</span>\
			<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});