/** @format */

let resbtn = resumeBtn.addEventListener("click", function () {});
const navbar = document.getElementById("nav");
const scrollLinks = document.querySelectorAll(".scroll-links");
let helloBtn = document.querySelectorAll(".btn1");

helloBtn.addEventListener("click", function () {
  window.location = "mailto:gajanan1055@gmail.com";
});
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    console.log(navHeight);
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
