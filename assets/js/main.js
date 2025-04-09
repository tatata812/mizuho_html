$(function () {

  $("#js-hamburger-menu, .navigation__link").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });
  $(".header-sp").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active");
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });

  // ハンバーガーメニュー
  $(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(500);
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });




  // ヘッダー隠れる動き

  // let startPos = 0;
  // let winScrollTop = 0;
  // const Header = $('.header');
  // $(window).on('scroll', function () {
  //   winScrollTop = $(this).scrollTop();
  //   if (winScrollTop >= startPos && winScrollTop > 100) { // ここにコードを追加
  //     $(Header).addClass('is-hide');
  //   } else {
  //     $(Header).removeClass('is-hide');
  //   }
  //   startPos = winScrollTop;
  // });


  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


  // ハンバーガーメニュー
  $(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(500)
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });


  // サーチボタン・アカウントボタン
  $(document).ready(function () {
    // 初期状態で非表示にする
    $('.header__search-wrap, .header__account-wrap').hide();

    // 検索ボタンクリック時
    $('.search-btn-js').on('click', function () {
      $('.header__account-wrap').fadeOut(); // アカウントを閉じる
      $('.header__search-wrap').fadeIn(); // 検索を開く
    });

    // 検索閉じるボタンクリック時
    $('.header__search-batsu').on('click', function () {
      $('.header__search-wrap').fadeOut();
    });

    // アカウントボタンクリック時
    $('.account-btn-js').on('click', function () {
      $('.header__search-wrap').fadeOut(); // 検索を閉じる
      $('.header__account-wrap').fadeIn(); // アカウントを開く
    });

    // アカウント閉じるボタンクリック時
    $('.header__account-batsu').on('click', function () {
      $('.header__account-wrap').fadeOut();
    });
  });


  // メインビジュアル　スライダー
  $(".top-slider-js").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false, // スライドをフェードイン・フェードアウト
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "25%",
    // dotsClass: "main-visual__slider-dots",

    responsive: [{
      breakpoint: 750,
      settings: {
        centerMode: false,
      }
    }]
  })


  // おいしさのひみつ
  $('.top-secret-js').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 6, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 4, // 画面幅750px以下でスライド3枚表示
      }
    }]
  });


  $(".main-visual-js").slick({
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "30%",
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "20%",
          arrows: false,

        }
      },
    ],
  });


  // 施工事例詳細
  $(".js-sub-img img").on("click", function () {
    // メイン画像に切り替えるimgのsrc取得
    img = $(this).attr("src");
    // currentクラス付け替え(枠線などを変えたい時に)
    $(".js-sub-img").removeClass("current");
    $(this).parent().addClass("current");
    // fadeOutできたらsrc変更してfadeIn
    $(".js-main-img img").fadeOut(500, function () {
      $(".js-main-img img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn(300);
        });
    });
  });


  //フェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 50) {
        $(this).addClass("action");
      }
    });
  });


  $(function () {
    var headerHeight = 40; // ヘッダーの高さ
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });

})

// パララックス

var image = document.getElementsByClassName('sub-top-js');
new simpleParallax(image, {
  scale: 1.2,
});