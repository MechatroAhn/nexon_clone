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
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbccp9uMUcWNRBxQrEdBZMM5iWLrq6Y2Gllw&usqp=CAU)",
    });
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
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaLA5c7YXSN_bVrwoBIaprr6KWqIRQfNZ-g&usqp=CAU)",
    });
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
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4iEfHoW0qOVxWoLH_AZ60x6rn88SNtuX3A&usqp=CAU)",
    });
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

$(".article__top > span:nth-child(2)").click(function () {
  $(".article__main__1").css({ display: "block" });
  $(".article__main__2").css({ display: "none" });
  article_now = 1;
  articleMain_now = 1;

  articleMain2Click();
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });

  $(".article__top > span:nth-child(2)").css({
    color: "white",
    backgroundColor: "black",
    border: "1px solid black",
  });
  $(".article__top > span:nth-child(3)").css({
    color: "gray",
    backgroundColor: "white",
    border: "1px solid gray",
  });
});

$(".article__top > span:nth-child(3)").click(function () {
  $(".article__main__2").css({ display: "block" });
  $(".article__main__1").css({ display: "none" });
  article_now = 1;
  articleMain_now = 2;
  articleMain1Click();

  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__top > span:nth-child(3)").css({
    color: "white",
    backgroundColor: "black",
    border: "1px solid black",
  });
  $(".article__top > span:nth-child(2)").css({
    color: "gray",
    backgroundColor: "white",
    border: "1px solid gray",
  });
});

let article_now = 1;
let articleMain_now = 1;
$(".article__nav__container > div:nth-child(1)").click(function () {
  article_now = 1;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(1)").mouseover(function () {
  if (article_now != 1) {
    $(".article__nav__container > div:nth-child(1)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(1)").mouseleave(function () {
  if (article_now != 1) {
    $(".article__nav__container > div:nth-child(1)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(2)").click(function () {
  article_now = 2;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(2)").mouseover(function () {
  if (article_now != 2) {
    $(".article__nav__container > div:nth-child(2)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(2)").mouseleave(function () {
  if (article_now != 2) {
    $(".article__nav__container > div:nth-child(2)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(3)").click(function () {
  article_now = 3;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(3)").mouseover(function () {
  if (article_now != 3) {
    $(".article__nav__container > div:nth-child(3)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(3)").mouseleave(function () {
  if (article_now != 3) {
    $(".article__nav__container > div:nth-child(3)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(4)").click(function () {
  article_now = 4;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(4)").mouseover(function () {
  if (article_now != 4) {
    $(".article__nav__container > div:nth-child(4)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(4)").mouseleave(function () {
  if (article_now != 4) {
    $(".article__nav__container > div:nth-child(4)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(5)").click(function () {
  article_now = 5;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(5)").mouseover(function () {
  if (article_now != 5) {
    $(".article__nav__container > div:nth-child(5)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(5)").mouseleave(function () {
  if (article_now != 5) {
    $(".article__nav__container > div:nth-child(5)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(6)").click(function () {
  article_now = 6;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(6)").mouseover(function () {
  if (article_now != 6) {
    $(".article__nav__container > div:nth-child(6)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(6)").mouseleave(function () {
  if (article_now != 6) {
    $(".article__nav__container > div:nth-child(6)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(7)").click(function () {
  article_now = 7;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(7)").mouseover(function () {
  if (article_now != 7) {
    $(".article__nav__container > div:nth-child(7)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(7)").mouseleave(function () {
  if (article_now != 7) {
    $(".article__nav__container > div:nth-child(7)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(8)").click(function () {
  article_now = 8;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(8)").mouseover(function () {
  if (article_now != 8) {
    $(".article__nav__container > div:nth-child(8)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(8)").mouseleave(function () {
  if (article_now != 8) {
    $(".article__nav__container > div:nth-child(8)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(9)").click(function () {
  article_now = 9;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(9)").mouseover(function () {
  if (article_now != 9) {
    $(".article__nav__container > div:nth-child(9)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(9)").mouseleave(function () {
  if (article_now != 9) {
    $(".article__nav__container > div:nth-child(9)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(10)").click(function () {
  article_now = 10;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(10)").mouseover(function () {
  if (article_now != 10) {
    $(".article__nav__container > div:nth-child(10)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(10)").mouseleave(function () {
  if (article_now != 10) {
    $(".article__nav__container > div:nth-child(10)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(11)").click(function () {
  article_now = 11;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(11)").mouseover(function () {
  if (article_now != 11) {
    $(".article__nav__container > div:nth-child(11)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(11)").mouseleave(function () {
  if (article_now != 11) {
    $(".article__nav__container > div:nth-child(11)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(12)").click(function () {
  article_now = 12;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(12)").mouseover(function () {
  if (article_now != 12) {
    $(".article__nav__container > div:nth-child(12)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(12)").mouseleave(function () {
  if (article_now != 12) {
    $(".article__nav__container > div:nth-child(12)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(13)").click(function () {
  article_now = 13;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(13)").mouseover(function () {
  if (article_now != 13) {
    $(".article__nav__container > div:nth-child(13)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(13)").mouseleave(function () {
  if (article_now != 13) {
    $(".article__nav__container > div:nth-child(13)").css({
      color: "gray",
    });
  }
});

$(".article__nav__container > div:nth-child(14)").click(function () {
  article_now = 14;
  if (articleMain_now == 1) {
    articleMain1Click();
  } else if (articleMain_now == 2) {
    articleMain2Click();
  }

  $(".article__nav__container > div:nth-child(14)").css({
    backgroundColor: "black",
    color: "white",
  });
  $(".article__nav__container > div:nth-child(2)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(3)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(4)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(5)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(6)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(7)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(8)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(9)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(10)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(11)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(12)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(13)").css({
    backgroundColor: "white",
    color: "gray",
  });
  $(".article__nav__container > div:nth-child(1)").css({
    backgroundColor: "white",
    color: "gray",
  });
});

$(".article__nav__container > div:nth-child(14)").mouseover(function () {
  if (article_now != 14) {
    $(".article__nav__container > div:nth-child(14)").css({
      color: "rgb(3, 118, 251)",
    });
  }
});
$(".article__nav__container > div:nth-child(14)").mouseleave(function () {
  if (article_now != 14) {
    $(".article__nav__container > div:nth-child(14)").css({
      color: "gray",
    });
  }
});

function articleMain1Click() {
  if (article_now == 1) {
    $("#article__main__item1").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 2) {
    $("#article__main__item2").css({ visibility: "visible" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 3) {
    $("#article__main__item3").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 4) {
    $("#article__main__item4").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 5) {
    $("#article__main__item5").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 6) {
    $("#article__main__item6").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 7) {
    $("#article__main__item7").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 8) {
    $("#article__main__item8").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 9) {
    $("#article__main__item9").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 10) {
    $("#article__main__item10").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 11) {
    $("#article__main__item11").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 12) {
    $("#article__main__item12").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 13) {
    $("#article__main__item13").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
    $("#article__main__item14").css({ visibility: "hidden" });
  } else if (article_now == 14) {
    $("#article__main__item14").css({ visibility: "visible" });
    $("#article__main__item2").css({ visibility: "hidden" });
    $("#article__main__item3").css({ visibility: "hidden" });
    $("#article__main__item4").css({ visibility: "hidden" });
    $("#article__main__item5").css({ visibility: "hidden" });
    $("#article__main__item6").css({ visibility: "hidden" });
    $("#article__main__item7").css({ visibility: "hidden" });
    $("#article__main__item8").css({ visibility: "hidden" });
    $("#article__main__item9").css({ visibility: "hidden" });
    $("#article__main__item10").css({ visibility: "hidden" });
    $("#article__main__item11").css({ visibility: "hidden" });
    $("#article__main__item12").css({ visibility: "hidden" });
    $("#article__main__item13").css({ visibility: "hidden" });
    $("#article__main__item1").css({ visibility: "hidden" });
  }
}

function articleMain2Click() {
  if (article_now == 1) {
    $("#article__main__2_1").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 2) {
    $("#article__main__2_2").css({ visibility: "visible" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 3) {
    $("#article__main__2_3").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 4) {
    $("#article__main__2_4").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 5) {
    $("#article__main__2_5").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 6) {
    $("#article__main__2_6").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 7) {
    $("#article__main__2_7").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 8) {
    $("#article__main__2_8").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 9) {
    $("#article__main__2_9").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 10) {
    $("#article__main__2_10").css({ visibility: "visible" });
    $("article").css({ height: "20000px" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 11) {
    $("#article__main__2_11").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 12) {
    $("#article__main__2_12").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 13) {
    $("#article__main__2_13").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
    $("#article__main__2_14").css({ visibility: "hidden" });
  } else if (article_now == 14) {
    $("#article__main__2_14").css({ visibility: "visible" });
    $("#article__main__2_2").css({ visibility: "hidden" });
    $("#article__main__2_3").css({ visibility: "hidden" });
    $("#article__main__2_4").css({ visibility: "hidden" });
    $("#article__main__2_5").css({ visibility: "hidden" });
    $("#article__main__2_6").css({ visibility: "hidden" });
    $("#article__main__2_7").css({ visibility: "hidden" });
    $("#article__main__2_8").css({ visibility: "hidden" });
    $("#article__main__2_9").css({ visibility: "hidden" });
    $("#article__main__2_10").css({ visibility: "hidden" });
    $("#article__main__2_11").css({ visibility: "hidden" });
    $("#article__main__2_12").css({ visibility: "hidden" });
    $("#article__main__2_13").css({ visibility: "hidden" });
    $("#article__main__2_1").css({ visibility: "hidden" });
  }
}

let footerOn = 0;

$(".footer__middle__lang").click(function () {
  if (footerOn == 0) {
    $(".footer__middle__lang__more").fadeIn();
    $(".footer__middle__lang__more").css({ display: "grid" });
    footerOn = 1;
  } else if (footerOn == 1) {
    $(".footer__middle__lang__more").fadeOut();
    footerOn = 0;
  }
});
