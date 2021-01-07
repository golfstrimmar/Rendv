import $ from "jquery";
// ------------------------------------------------

$(document).ready(function (e) {
let titleTab = $(".tabsDep-title-js");

titleTab.on("click", function () {
let dropTab = $(this).siblings(".tabsDep-drop-js");
let imgTab = $(this).find(".tabsDep-img-js");
let parent = $(this).parent().parent(".tabs__item")

if($(this).hasClass("act")){
  dropTab.slideUp(200);
  $(this).removeClass("act");
imgTab.css("transform", "rotate(0deg)");
}else{
  $(this).addClass("act");
  imgTab.css("transform", "rotate(-180deg)");
  dropTab.slideDown(200);
    parent.siblings(".tabs__item").find(".tabsDep-drop-js").slideUp(200);
    parent.siblings(".tabs__item").find(".tabsDep-title-js").removeClass("act");
    parent
      .siblings(".tabs__item")
      .find(".tabsDep-img-js")
      .css("transform", "rotate(0deg)");
}

});

})