$(document).ready(function(){

  // 왼쪽/오른쪽 swipe 이벤트

  $('.js-careers').swipeleft(function(){ // 오른쪽에서 왼쪽으로(오른쪽)

    var margin = $('.js-careers__list').css("margin-left");

    $('.js-careers__indicator-item').removeClass('active');

    if(margin == "0px"){
      $(".js-careers__list").css("margin-left", "-305px");
      $('.js-careers__indicator-item:nth-child(2)').addClass('active');
    } else if(margin == "-305px") {
      $(".js-careers__list").css("margin-left", "-610px");
      $('.js-careers__indicator-item:nth-child(3)').addClass('active');
    } else if(margin == "-610px") {
      $(".js-careers__list").css("margin-left", "-0px");
      $('.js-careers__indicator-item:first-child').addClass('active');
    }
  });

  $('.js-careers').swiperight(function() { // 왼쪽에서 오른쪽으로(왼쪽)

    var margin = $('.js-careers__list').css("margin-left");

    $('.js-careers__indicator-item').removeClass('active');

    if (margin == "0px"){
      $(".js-careers__list").css("margin-left", "-610px");
      $('.js-careers__indicator-item:nth-child(3)').addClass('active');
    } else if (margin == "-305px") {
      $(".js-careers__list").css("margin-left", "0px");
      $('.js-careers__indicator-item:first-child').addClass('active');
    } else if (margin == "-610px") {
      $(".js-careers__list").css("margin-left", "-305px");
      $('.js-careers__indicator-item:nth-child(2)').addClass('active');
    }
  });
});
