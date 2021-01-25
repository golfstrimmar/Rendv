import $ from "jquery";


$(document).ready(function (e) {
  $(".search__button").on("click", function () {
    $(".popup-top-filter").toggleClass("popup-top-filter_active");
    $("body").toggleClass("lock")
  });

  $(".filter-lap__close").on("click", function () {
    $(".popup-top-filter").toggleClass("popup-top-filter_active");
    $("body").toggleClass("lock");
  });




  $(".sale-nav__item--filters-search").on("click", function () {
    $(".content-sale__filters").toggleClass("content-sale__filters_active");
    $("body").toggleClass("lock");
  });

  //   $(".filter-lap__close").on("click", function () {  $(".popup-top-filter").toggleClass("popup-top-filter_active");});
});









