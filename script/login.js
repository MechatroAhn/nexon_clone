$(".login__top__options > span:nth-child(1)").click(function () {
  $("#test1").css({ display: "block" });
  $("#test2").css({ display: "none" });
  $("#test3").css({ display: "none" });
  $(".login__top__options > span:nth-child(1)").css({
    color: "black",
    fontWeight: "bold",
    borderBottom: "2px solid black",
  });
  $(".login__top__options > span:nth-child(2)").css({
    color: "rgb(200,200,200)",
    fontWeight: "100",
    borderBottom: "1px solid rgb(200,200,200)",
  });
  $(".login__top__options > span:nth-child(3)").css({
    color: "rgb(200,200,200)",
    fontWeight: "100",
    borderBottom: "1px solid rgb(200,200,200)",
  });
});
$(".login__top__options > span:nth-child(2)").click(function () {
  $("#test2").css({ display: "block" });
  $("#test1").css({ display: "none" });
  $("#test3").css({ display: "none" });
  $(".login__top__options > span:nth-child(2)").css({
    color: "black",
    fontWeight: "bold",
    borderBottom: "2px solid black",
  });
  $(".login__top__options > span:nth-child(1)").css({
    color: "rgb(200,200,200)",
    fontWeight: "100",
    borderBottom: "1px solid rgb(200,200,200)",
  });
  $(".login__top__options > span:nth-child(3)").css({
    color: "rgb(200,200,200)",
    fontWeight: "100",
    borderBottom: "1px solid rgb(200,200,200)",
  });
});
$(".login__top__options > span:nth-child(3)").click(function () {
  $("#test3").css({ display: "block" });
  $("#test2").css({ display: "none" });
  $("#test1").css({ display: "none" });
  $(".login__top__options > span:nth-child(3)").css({
    color: "black",
    fontWeight: "bold",
    borderBottom: "2px solid black",
  });
  $(".login__top__options > span:nth-child(2)").css({
    color: "rgb(200,200,200)",
    fontWeight: "100",
    borderBottom: "1px solid rgb(200,200,200)",
  });
  $(".login__top__options > span:nth-child(1)").css({
    color: "rgb(200,200,200)",
    fontWeight: "100",
    borderBottom: "1px solid rgb(200,200,200)",
  });
});
