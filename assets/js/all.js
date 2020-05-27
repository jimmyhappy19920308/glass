"use strict";

$(document).ready(function () {
  $('.hamburger-menu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
  $('.faq-item').on('click', function (e) {
    e.preventDefault();
    $(this).children().children('.faq-question-icon').toggleClass('active');
    $(this).toggleClass('active-answer');
    $(this).siblings().children().children('.faq-question-icon').removeClass('active');
    $(this).siblings().removeClass('active-answer');
  });
});
//# sourceMappingURL=all.js.map
