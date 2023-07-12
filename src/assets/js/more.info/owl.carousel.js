$(document).ready(function () {
  var prev =
      '<a class="" title="" role="button">' +
      '<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M9.36311 0.399025C9.72745 0.0219396 10.3338 0.0219396 10.7109 0.399025C11.0753 0.763371 11.0753 1.36977 10.7109 1.73326L3.87668 8.56751H26.4288C26.9545 8.56836 27.3723 8.98621 27.3723 9.51192C27.3723 10.0376 26.9545 10.4691 26.4288 10.4691H3.87668L10.7109 17.2906C11.0753 17.6677 11.0753 18.2749 10.7109 18.6384C10.3338 19.0155 9.7266 19.0155 9.36311 18.6384L0.910959 10.1863C0.533873 9.82192 0.533873 9.21552 0.910959 8.85202L9.36311 0.399025Z" fill="#ffffff"/>' +
      '</svg>' +
      '</a>';
  var next =
      '<a class="" title="" role="button">' +
      '<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M18.6369 18.601C18.2725 18.9781 17.6662 18.9781 17.2891 18.601C16.9247 18.2366 16.9247 17.6302 17.2891 17.2667L24.1233 10.4325L1.57123 10.4325C1.04552 10.4316 0.62767 10.0138 0.62767 9.48808C0.62767 8.96236 1.04552 8.53092 1.57123 8.53092L24.1233 8.53092L17.2891 1.70942C16.9247 1.33233 16.9247 0.725086 17.2891 0.361589C17.6662 -0.0154953 18.2734 -0.0154953 18.6369 0.361589L27.089 8.81374C27.4661 9.17808 27.4661 9.78448 27.089 10.148L18.6369 18.601Z" fill="#ffffff"/>' +
      '</svg>' +
      '</a>';
  $('.more-info__carousel-img').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) return;
    var carousel = e.relatedTarget;
    $('#moreInfoCounter big').html(carousel.relative(carousel.current()) + 1);
    $('#moreInfoCounter small').html('-' + carousel.items().length);
  }).owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    navElement: 'div',
    navText: [prev, next],
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin: 0,
    autoplay: true,
    smartSpeed: 400,
    responsive: {
      0: {
        items: 1,
        margin: 30
      },
      400: {
        items: 1,
        margin: 30,
        stagePadding: 100,
      },
      480: {
        items: 2,
        margin: 30
      },
      576: {
        items: 2,
        margin: 30
      },
      768: {
        items: 3,
        margin: 30
      },
      992: {
        items: 4,
        margin: 30
      },
      1024: {
        items: 4,
        margin: 30
      },
      1280: {
        items: 1
      }
    }
  });


});

