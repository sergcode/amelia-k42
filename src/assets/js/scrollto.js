$(document).ready(function () {
  $('nav a[href^="#"], nav a[href^="/#"]').click(function () {

    var target = $(this).attr('href');

    $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);

    return false;
  });

  if (window.location.hash) {
    var target = window.location.hash;
    // убираем хеш из строки(отключаем дефолтный "прыжок")
    window.location.hash = "";
    // аниммируем скролл
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 900, function () {
      // возыращаем хеш
      window.location.hash = target;
    });
  }
});
