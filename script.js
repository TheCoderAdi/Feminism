const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const list = document.getElementById("list");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});
list.addEventListener("click", function () {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
