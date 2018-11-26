$(document).ready(function() {

  // 메뉴 버튼을 눌렀을 때

  $(".js-menu-toggle").click(function() {

    $(this).toggleClass('change'); // 원래 상태 / X 모양으로 변경 (토글)

    $('.js-page__container').toggleClass('active');
    $('.js-page__container--front').toggleClass('active'); // 맨앞 창 활성화/비활성화
    $('.js-page__item--fake').toggleClass('active'); // 가짜 창 활성화/비활성화

    $('.js-nav__item').toggleClass('active');
  });

  $('.js-nav').click(function(event) {
    event.stopPropagation();
    event.preventDefault();

    $(".js-menu-toggle").toggleClass('change');

    $('.js-page__container').toggleClass('active');
    $('.js-page__container--front').toggleClass('active'); // 맨앞 창 활성화/비활성화
    $('.js-page__item--fake').toggleClass('active'); // 가짜 창 활성화/비활성화

    $('.js-nav__item').toggleClass('active');
  });

  $('.js-page__container--front').click(function(event) {
    event.stopPropagation();
    event.preventDefault();

    if(!$(this).hasClass('active')) { // active 상태가 아닐 때
      $(".js-menu-toggle").toggleClass('change');

      $('.js-page__container').toggleClass('active');
      $('.js-page__container--front').toggleClass('active'); // 맨앞 창 활성화/비활성화
      $('.js-page__item--fake').toggleClass('active'); // 가짜 창 활성화/비활성화

      $('.js-nav__item').toggleClass('active');
    }
  });
});
