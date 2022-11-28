$(".header__more > i:nth-child(1)").mouseover(function () {
  $(".header__more > span:nth-child(2)").fadeIn("fast");
});
$(".header__more > i:nth-child(1)").mouseleave(function () {
  $(".header__more > span:nth-child(2)").fadeOut("fast");
});
$(".header__more > i:nth-child(3)").mouseover(function () {
  $(".header__more > span:nth-child(4)").fadeIn("fast");
});
$(".header__more > i:nth-child(3)").mouseleave(function () {
  $(".header__more > span:nth-child(4)").fadeOut("fast");
});

$(".header__menu").click(function () {
  $(".header__menu__detail").css({ display: "block" });
  setTimeout(() => {
    $(".header__menu__detail__main").css({ transform: "translateX(400px)" });
  }, 100);
});

$(".header__menu__detail__main > div:nth-child(1) > i").click(function () {
  $(".header__menu__detail").css({ display: "none" });
  $(".header__menu__detail__main").css({ transform: "translateX(-400px)" });
});

let banner_now = 0;
let no1 = 0;
let no2 = 0;
let no3 = 0;

bannerChange();

function bannerChange() {
  banner_now++;

  if (banner_now > 3) {
    banner_now = 1;
  }

  if (banner_now == 1) {
    $(".banner").css({ backgroundColor: "red" });
    $(".banner__btns > div:nth-child(1)").css({
      backgroundColor: "rgba(0,0,0,0.2)",
    });
    $(".banner__btns > div:nth-child(2)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no1 != 1) {
      $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").addClass(
        "move"
      );
    }
    setTimeout(function () {
      $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  } else if (banner_now == 2) {
    $(".banner").css({ backgroundColor: "orange" });
    $(".banner__btns > div:nth-child(2)").css({
      backgroundColor: "rgba(0,0,0,0.2)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no2 != 1) {
      $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").addClass(
        "move"
      );
    }
    setTimeout(function () {
      $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  } else if (banner_now == 3) {
    $(".banner").css({ backgroundColor: "green" });
    $(".banner__btns > div:nth-child(3)").css({
      backgroundColor: "rgba(0,0,0,0.2)",
    });
    $(".banner__btns > div:nth-child(2)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no3 != 1) {
      $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").addClass(
        "move"
      );
    }

    setTimeout(function () {
      $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  }
}

$(".banner__btns > div:nth-child(1)").click(function () {
  banner_now = 0;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
    "move"
  );
  no1 = 1;
  bannerChange();
});
$(".banner__btns > div:nth-child(2)").click(function () {
  banner_now = 1;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
    "move"
  );
  no2 = 1;
  bannerChange();
});
$(".banner__btns > div:nth-child(3)").click(function () {
  banner_now = 2;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
    "move"
  );
  no3 = 1;
  bannerChange();
});

const test = setInterval(bannerChange, 5000);
