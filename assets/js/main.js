"use strict";

document.getElementById("burger-icon").addEventListener("click", (event) => {
  document.querySelector(".menu").classList.toggle("active");
  event.stopPropagation();
  if (document.querySelector(".menu").classList.contains("active")) {
    window.addEventListener("click", function removeBurger(e) {
      if (!e.target.classList.contains("menu")) {
        document.querySelector(".menu").classList.remove("active");
        window.removeEventListener("click", removeBurger);
      }
    });
  }
});


const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});