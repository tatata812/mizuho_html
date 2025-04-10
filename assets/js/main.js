$(function () {

  $("#js-hamburger-menu, .navigation__link").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });
  $(".header-sp__btn-img").click(function () {
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


// TOPへボタン
  $(function () {
    var $topButton = $(".top-to-js");
    var $footer = $("footer"); // フッター要素を取得
  
    // トップへスクロール
    $topButton.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  
    // スクロール時の処理
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var footerTop = $footer.offset().top;
  
      // フッターに達したかどうか
      if (scrollTop + windowHeight >= footerTop) {
        $topButton.fadeOut();
      } else {
        $topButton.fadeIn();
      }
    });
  });


  // おすすめボタン
  $(function () {
    var $topButton = $(".top-btn");
    var $osusumeButton = $(".osusume-js");
    var $footer = $("footer");
  
    // 最初は top ボタン非表示（ただし初回チェックで制御される）
    $topButton.hide();
  
    // おすすめボタンをクリックしたら top ボタンを表示
    $osusumeButton.click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $topButton.css("display", "block");
    });
  
    // top ボタンのバツをクリックしたら top ボタンを非表示（イベント委任）
    $(document).on("click", ".top-btn__batsu", function (e) {
      e.preventDefault();
      e.stopPropagation();
      // 画面幅 820px 未満のときだけ非表示にする
      if ($(window).width() < 820) {
        $topButton.css("display", "none");
      }
    });
  
    // スクロール時にフッター到達チェック
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      var footerTop = $footer.offset().top;
  
      if (scrollTop + windowHeight >= footerTop) {
        $osusumeButton.fadeOut();
      } else {
        if ($(window).width() < 820) {
          $osusumeButton.fadeIn();
        }
      }
    });
  
    // 画面サイズによる表示切り替え
    function checkWindowSize() {
      if ($(window).width() >= 820) {
        // 820px 以上なら
        $osusumeButton.hide();
        $topButton.show(); // 常に表示
      } else {
        // 820px 未満なら
        $topButton.hide(); // 初期は非表示（クリックで表示）
        $osusumeButton.show();
      }
    }
  
    // 読み込み時にもチェック
    checkWindowSize();
  
    // リサイズ時にもチェック
    $(window).resize(function () {
      checkWindowSize();
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
  $(".main-visual-js").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false, // スライドをフェードイン・フェードアウト
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "25%",
    dotsClass: 'dots-wrap',

    responsive: [{
      breakpoint: 750,
      settings: {
        centerMode: false,
        arrows: false, // 矢印非表示

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


  $(".top-recs-js").slick({
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "12%",
    dots: false,
    arrows: true,
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    dotsClass: 'dots-wrap',


    responsive: [{
        breakpoint: 800,
        settings: {
          centerPadding: "12%",
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "2%",
          slidesToShow: 1,
          arrows: false, // 矢印非表示

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