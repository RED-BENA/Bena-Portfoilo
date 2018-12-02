$(document).ready(function(){

  // 왼쪽/오른쪽 swipe 이벤트

  $('.js-careers').swipeleft(function(){ // 오른쪽에서 왼쪽으로 swipe(오른쪽으로 이동)

    var career_pos = parseInt($('.js-careers__list').css("margin-left")); // careers__list의 위치(margin-left)
    var margin = parseInt($('.js-careers__item').css("margin-right")); // careers__item의 margin-right
    var width = $('.js-careers__item').width(); // careers__item의 width
    var move = margin+width; // 총 이동 px(careers__item의 width+margin)

    $('.js-careers__indicator-item').removeClass('active'); // 모든 indicator__item의 active 클래스 제거

    if(career_pos == 0){ // 첫 번째 careers__item에 위치했을 경우

      $(".js-careers__list").css("margin-left", (move * -1)+"px"); // 두 번째 careers__item으로 이동
      $('.js-careers__indicator-item:nth-child(2)').addClass('active'); // 두 번째 indicator__item에 active 클래스 추가

    } else if(career_pos == move * -1) { // 두 번째 careers__item에 위치했을 경우

      $(".js-careers__list").css("margin-left", (move * -2)+"px"); // 세 번째 careers__item으로 이동
      $('.js-careers__indicator-item:nth-child(3)').addClass('active'); // 세 번째 indicator__item에 active 클래스 추가

    } else if(career_pos == move * -2) { // 세 번째 careers__item에 위치했을 경우

      $(".js-careers__list").css("margin-left", "0px"); // 첫 번째 careers__item으로 이동
      $('.js-careers__indicator-item:first-child').addClass('active'); // 첫 번째 indicator__item에 active 클래스 추가

    }
  });

  $('.js-careers').swiperight(function() { // 왼쪽에서 오른쪽으로 swipe(왼쪽으로 이동)

    var career_pos = parseInt($('.js-careers__list').css("margin-left")); // careers__list의 위치(margin-left)
    var margin = parseInt($('.js-careers__item').css("margin-right")); // careers__item의 margin-right
    var width = $('.js-careers__item').width(); // careers__item의 width
    var move = margin+width; // 총 이동 px(careers__item의 width+margin)

    $('.js-careers__indicator-item').removeClass('active'); // 모든 indicator__item의 active 클래스 제거

    if(career_pos == 0){ // 첫 번째 careers__item에 위치했을 경우

      $(".js-careers__list").css("margin-left", move * -2+"px"); // 세 번째 careers__item으로 이동
      $('.js-careers__indicator-item:nth-child(3)').addClass('active'); // 세 번째 indicator__item에 active 클래스 추가

    } else if(career_pos == move * -1) { // 두 번째 careers__item에 위치했을 경우

      $(".js-careers__list").css("margin-left", "0px"); // 첫 번째 careers__item으로 이동
      $('.js-careers__indicator-item:first-child').addClass('active'); // 첫 번째 indicator__item에 active 클래스 추가

    } else if(career_pos == move * -2) { // 세 번째 careers__item에 위치했을 경우

      $(".js-careers__list").css("margin-left", move * -1+"px"); // 두 번째 careers__item으로 이동
      $('.js-careers__indicator-item:nth-child(2)').addClass('active'); // 두 번째 indicator__item에 active 클래스 추가

    }
  });

  // careers__item 클릭 이벤트

  $('.js-careers__item').click(function() {

    // 클릭한 DETAILS 버튼이 위치한 careers__item

    var index = $(this).index()+1;

    // 모든 careers__details-list를 포함하는 careers--details의 active 클래스를 on/off 한다.

    $('.js-careers--details').addClass('active');

    // 모든 details 창의 active 클래스를 제거한 후, 클릭한 DETAILS 버튼이 위치한 careers--details-list에 active 클래스를 추가한다.

    $('.js-careers--details-list').removeClass('active');
    $('.js-careers--details-list:nth-child('+index+')').addClass('active');

    // 주변을 어둡게 해주는 careers--black에 active 클래스를 추가한다.

    $('.js-careers--black').addClass('active');

    $('.js-careers--details__top').addClass('active');
    $('.js-careers--details__bottom').addClass('active');
  });

  // 1. DETAILS 창에서 뒤로가기 버튼을 클릭했을 때
  // 2. careers--details 창 이외의 부분을 터치했을 때
  // 창이 비활성화 되는 이벤트

  $('.js-careers--details__go-back, .js-careers--black').click(function(event) {
    $('.js-careers--details').removeClass('active');
    // $('.js-careers--details-list').removeClass('active');
    $('.js-careers--black').removeClass('active');

    $('.js-careers--details__top').removeClass('active');
    $('.js-careers--details__bottom').removeClass('active');
  });
});
