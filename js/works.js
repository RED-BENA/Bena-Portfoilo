$(document).ready(function(){

  // 왼쪽/오른쪽 swipe 이벤트

  $('.js-works').swipeleft(function(){ // 오른쪽에서 왼쪽으로 swipe(오른쪽으로 이동)

    if($(window).width() >= 1024) { // 디바이스의 너비가 1024 이상(laptop)일 때
      return; // swipe 이벤트를 실행하지 않는다.
    }

    var work_pos = parseInt($('.js-works__list').css("margin-left")); // works__list의 위치(margin-left)
    var margin = parseInt($('.js-works__item').css("margin-right")); // works__item의 margin-right
    var width = $('.js-works__item').outerWidth(); // works__item의 width
    var move = margin+width; // 총 이동 px(works__item의 width+margin)

    $('.js-carousel__indicator-item').removeClass('active'); // 모든 indicator__item의 active 클래스 제거

    if(work_pos == 0){ // 첫 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", (move * -1)+"px"); // 두 번째 works__item으로 이동
      $('.js-carousel__indicator-item:nth-child(2)').addClass('active'); // 두 번째 indicator__item에 active 클래스 추가

    } else if(work_pos == move * -1) { // 두 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", (move * -2)+"px"); // 세 번째 works__item으로 이동
      $('.js-carousel__indicator-item:nth-child(3)').addClass('active'); // 세 번째 indicator__item에 active 클래스 추가

    } else if(work_pos == move * -2) { // 세 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", (move * -3)+"px"); // 첫 번째 works__item으로 이동
      $('.js-carousel__indicator-item:nth-child(4)').addClass('active'); // 첫 번째 indicator__item에 active 클래스 추가

    } else if(work_pos == move * -3) { // 세 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", "0px"); // 첫 번째 works__item으로 이동
      $('.js-carousel__indicator-item:first-child').addClass('active'); // 첫 번째 indicator__item에 active 클래스 추가

    }
  });

  $('.js-works').swiperight(function() { // 왼쪽에서 오른쪽으로 swipe(왼쪽으로 이동)

    if($(window).width() >= 1024) { // 디바이스의 너비가 1024 이상(laptop)일 때
      return; // swipe 이벤트를 실행하지 않는다.
    }

    var work_pos = parseInt($('.js-works__list').css("margin-left")); // works__list의 위치(margin-left)
    var margin = parseInt($('.js-works__item').css("margin-right")); // works__item의 margin-right
    var width = $('.js-works__item').outerWidth(); // works__item의 width
    var move = margin+width; // 총 이동 px(works__item의 width+margin)

    $('.js-carousel__indicator-item').removeClass('active'); // 모든 indicator__item의 active 클래스 제거

    if(work_pos == 0){ // 첫 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", (move * -3)+"px"); // 세 번째 works__item으로 이동
      $('.js-carousel__indicator-item:nth-child(4)').addClass('active'); // 세 번째 indicator__item에 active 클래스 추가

    } else if(work_pos == move * -1) { // 두 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", "0px"); // 첫 번째 works__item으로 이동
      $('.js-carousel__indicator-item:first-child').addClass('active'); // 첫 번째 indicator__item에 active 클래스 추가

    } else if(work_pos == move * -2) { // 세 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", (move * -1)+"px"); // 두 번째 works__item으로 이동
      $('.js-carousel__indicator-item:nth-child(2)').addClass('active'); // 두 번째 indicator__item에 active 클래스 추가

    } else if(work_pos == move * -3) { // 세 번째 works__item에 위치했을 경우

      $(".js-works__list").css("margin-left", (move * -2)+"px"); // 두 번째 works__item으로 이동
      $('.js-carousel__indicator-item:nth-child(3)').addClass('active'); // 두 번째 indicator__item에 active 클래스 추가
    }
  });

  // works__item 클릭 이벤트

  $('.js-works__item').click(function() {

    // 클릭한 DETAILS 버튼이 위치한 works__item

    var index = $(this).index()+1;

    // 모든 works__details-list를 포함하는 works--details의 active 클래스를 on/off 한다.

    $('.js-works--details').addClass('active');

    // 모든 details 창의 active 클래스를 제거한 후, 클릭한 DETAILS 버튼이 위치한 works--details-list에 active 클래스를 추가한다.

    $('.js-works--details-list').removeClass('active');
    $('.js-works--details-list:nth-child('+index+')').addClass('active');

    // 주변을 어둡게 해주는 works--black에 active 클래스를 추가한다.

    $('.js-works--black').addClass('active');

    $('.js-works--details__top').addClass('active');
    $('.js-works--details__bottom').addClass('active');
  });
});
