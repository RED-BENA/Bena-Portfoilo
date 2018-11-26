$(document).ready(function() {

  /* 메뉴 버튼 */

  $(".js-menu-toggle").click(function() {
    // 메뉴 버튼을 누른 위치가 테마컬러(translateY(-200%)) 일 때

    if($('.js-page__container--front').attr('style') == 'transform: scale(1) translateY(-200%);') {
      $(this).toggleClass('black');
    }
  });

  /* 배너 */

  $('.js-banner').mousewheel(function(event) { // 배너에서 마우스휠을 돌렸을 때
    if (event.deltaY == 1) { // 위
      $(".js-page__container--front.active").css("transform", "scale(1) translateY(-200%)"); // 테마컬러로 스크롤을 이동한다.
      $(".js-menu-toggle").addClass("black");
    } else if (event.deltaY == -1) { // 아래
      $(".js-page__container--front.active").css("transform", "scale(1) translateY(-100%)"); // 개요로 스크롤을 내린다.
    }
  });

  $('.js-banner').on('swipeup', function(event) { // 아래에서 위로 swipe 했을 때 (아래로)
    $(".js-page__container--front.active").css("transform", "scale(1) translateY(-100%)"); // 개요로 스크롤을 내린다.
  });

  $('.js-banner').on('swipedown', function(event) { // 위에서 아래로 swipe 했을 때 (위로)
    $(".js-page__container--front.active").css("transform", "scale(1) translateY(-200%)"); // 테마컬러로 스크롤을 이동한다.
    $(".js-menu-toggle").addClass("black");
  });

  /* 개요 */

  $('.js-summary').mousewheel(function(event) { // 개요에서 마우스휠을 돌렸을 때

    if (event.deltaY == 1) { // 위
      $(".js-page__container--front.active").css("transform", "scale(1) translateY(0%)"); // 배너로 스크롤을 올린다.
    } else if (event.deltaY == -1) { // 아래
      $(".js-page__container--front.active").css("transform", "scale(1) translateY(-200%)"); // 테마컬러로 스크롤을 내린다.
      $(".js-menu-toggle").addClass("black");
    }
  });

  $('.js-summary').on('swipeup', function(event) { // 아래에서 위로 swipe를 했을 때 (아래로)
    $(".js-page__container--front.active").css("transform", "scale(1) translateY(-200%)"); // 테마컬러로 스크롤을 내린다.
    $(".js-menu-toggle").addClass("black");
  });

  $('.js-summary').on('swipedown', function(event) { // 위에서 아래로 swipe를 했을 때 (위로)
    $(".js-page__container--front.active").css("transform", "scale(1) translateY(0%)"); // 배너로 스크롤을 올린다.
  });

  /* 테마컬러 */

  $('.js-theme-colors').mousewheel(function(event) { // 테마컬러에서 스크롤을 내렸을 때

    if (event.deltaY == 1) { // 위
      $(".js-page__container--front.active").css("transform", "scale(1) translateY(-100%)"); // 개요로 스크롤을 올린다.
    } else if (event.deltaY == -1) { // 아래
      $(".js-page__container--front.active").css("transform", "scale(1) translateY(0%)"); // 배너로 스크롤을 이동한다.
    }

    $(".js-menu-toggle").removeClass("black");
  });

  $('.js-theme-colors').on('swipeup', function(event) { // 아래에서 위로 swipe를 했을 때 (아래로)
    $(".js-page__container--front.active").css("transform", "scale(1) translateY(0%)"); // 배너로 스크롤을 이동한다.
    $(".js-menu-toggle").removeClass("black");
  });

  $('.js-theme-colors').on('swipedown', function(event) { // 위에서 아래로 swipe를 했을 때 (위로)
    $(".js-page__container--front.active").css("transform", "scale(1) translateY(-100%)"); // 개요로 스크롤을 올린다.
    $(".js-menu-toggle").removeClass("black");
  });

  // 테마컬러의 + 버튼을 눌렀을 때

  $('.js-theme-colors__detail').click(function() {
    var index = $(this).parent().parent().index(); // theme-color__item의 인덱스를 저장한다.

    if($('.js-theme-colors__item:nth-child('+(index+1)+')').hasClass('active')) {
      $('.js-theme-colors__item').removeClass('active');
    } else {
      $('.js-theme-colors__item').removeClass('active');
      $('.js-theme-colors__item:nth-child('+(index+1)+')').addClass('active');
    }

  });
});
