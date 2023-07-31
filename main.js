import "./assets/scss/all.scss";

console.log("Hello world!");

// 門市據點下拉選單
$(".dropdown-btn ").click(function (e) {
  e.preventDefault();
  console.log("aaa");
  $(".dropdown-menu ").toggleClass("active");
});
