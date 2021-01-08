import $ from "jquery";
// ------------------------------------------------

$(document).ready(function (e) {
let titleTab = $(".filterDep-title-js");

titleTab.on("click", function () {
let dropTab = $(this).siblings(".filterDep-drop-js");
let imgTab = $(this).find(".filterDep-img-js");
let parent = $(this).parent().parent(".filter__item")

if($(this).hasClass("act")){
  dropTab.slideUp(200);
  $(this).removeClass("act");
imgTab.css("transform", "rotate(0deg)");
}else{
  $(this).addClass("act");
  imgTab.css("transform", "rotate(-180deg)");
  dropTab.slideDown(200);
    parent.siblings(".filter__item").find(".filterDep-drop-js").slideUp(200);
    parent.siblings(".filter__item").find(".filterDep-title-js").removeClass("act");
    parent
      .siblings(".filter__item")
      .find(".filterDep-img-js")
      .css("transform", "rotate(0deg)");
}

});

})