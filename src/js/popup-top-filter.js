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



  // ------------------------------------------------------------

  $(".sale-nav__item--filters-search").on("click", function () {
    $(".content-sale__filters").toggleClass("content-sale__filters_active");
    $("body").toggleClass("lock");
  });

    $(".sale-form-lp__text i").on("click", function () {
      $(".content-sale__filters").toggleClass("content-sale__filters_active");
      $("body").toggleClass("lock");
    });

  // --------------------------------------------------------------

});



$(document).ready(function (e) {
  $(".search-lp-js").slideUp(1);
  $(".sale-form-lp__text--extend").on("click", function () { 
    if ($(this).hasClass("act") ){
      $(".search-lp-js").slideUp(300);
      $(this).removeClass("act");
      $(this).find("i").css("transform", "translateY(-50%) rotate(0deg)");
     }else{
      $(this).addClass("act");
      $(".search-lp-js").slideDown(500);
      $(this).find("i").css("transform", "translateY(-50%) rotate(180deg)");
      }		
    
  
  
  });

});           				





