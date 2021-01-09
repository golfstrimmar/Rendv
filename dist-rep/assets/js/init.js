

$(document).ready(function () {
  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }
  ibg();
});

window.onload = function () {
  sliders();
};

function sliders() {
  var tracks = ["-webkit-slider-runnable-track"];

  var thumbs = ["-webkit-slider-thumb"];

  initSliders();
  var sliderGroups = document.querySelectorAll(
    "section[data-type=slider-group]"
  );
  for (var i = 0; i < sliderGroups.length; i += 1) {
    initSliderGroup(sliderGroups[i]);
  }

  function initSliders() {
    var sliders = document.querySelectorAll("input[type=range]");
    var testAndWK = window.getComputedStyle(
      sliders[0],
      "::-webkit-slider-thumb"
    ).background;
    for (var i = 0; i < sliders.length; i += 1) {
      if (!testAndWK) {
        sliders[i].style.WebkitAppearance = "slider-horizontal";
      }

      // prepare a <style> tag that will be used by handleSlider()

      var st = document.createElement("style");
      st.id = "s" + sliders[i].id;
      document.head.appendChild(st);

      sliders[i].addEventListener(
        "input",
        function () {
          handleSlider(this);
        },
        false
      );
      sliders[i].addEventListener(
        "change",
        function () {
          handleSlider(this);
        },
        false
      );

      sliders[i].output = sliders[i].parentNode.querySelector("output");
      var dataSpan = sliders[i].parentNode.querySelector("span");
      if (dataSpan && dataSpan.getAttribute("data-labels")) {
        sliders[i].values = [];
        var values = dataSpan.getAttribute("data-labels").split(";");
        for (var j = 0; j < values.length; j += 1) {
          sliders[i].values.push(values[j]);
        }
      }

      if (sliders[i].value * 1) {
        handleSlider(sliders[i]);
      }
    }
  }

  function handleSlider(slider) {
    // this sets the gradient for one slider to the correct color stops
    // needs a prepared <style> tag created by initSliders()

    var gradValue = Math.round(
      (slider.value / slider.getAttribute("max")) * 1 * 100
    );
    var grad =
      "linear-gradient(90deg,#7AB764 " +
      gradValue +
      "%,#E5E5E5 " +
      (gradValue + 1) +
      "%)";
    var rangeSelector = "input[id=" + slider.id + "]::";
    var styleString = "";
    var printedValue = slider.values
      ? slider.values[slider.value]
      : slider.value;
    slider.output.innerHTML = printedValue;
    for (var j = 0; j < tracks.length; j += 1) {
      styleString += rangeSelector + tracks[j] + "{background: " + grad + ";} ";
    }
    document.getElementById("s" + slider.id).textContent = styleString;
  }
}



import $ from "jquery";

$(Document).ready(function () {
  $(".slider-js").slick({
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
    nextArrow: $(".sale-slider_next"),
    prevArrow: $(".sale-slider_prev"),

 
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
    nextArrow: $(".rent-slider_next"),
    prevArrow: $(".rent-slider_prev"),

   
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
    nextArrow: $(".advert-slider_next"),
    prevArrow: $(".advert-slider_prev"),

  
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
    nextArrow: $(".revieves-slider_next"),
    prevArrow: $(".revieves-slider_prev"),

   
  });
});


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
  nextArrow: $(".bunners-slider_next"),
  prevArrow: $(".bunners-slider_prev"),

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