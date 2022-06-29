"use strict";


const burgerMenuHeight = 100;


let burger = window.matchMedia("(max-width: 800px)");
burger.addEventListener("change", toggleBurgerMenu);

function toggleBurgerMenu(event) {
  let links = document.querySelectorAll(".menu__link");
  let copyLinks = [];
  let menu = document.querySelector(".nav__row");

  //if burger menu is already exists - delete
  if (document.querySelector(".burger-menu")) {
    document.querySelector(".burger-menu").remove();
  }

  if (screen.width > 800) return;
  for (let elem of links) {
    //clone each link
    copyLinks.push(elem.cloneNode(true));
    elem.hidden = !elem.hidden;
  }
  let burgerMenu = document.createElement("div");
  let burgerMenuInner = document.createElement("div");

  burgerMenu.classList.add("burger-menu");
  burgerMenuInner.classList.add("burger-menu__icon");
  menu.append(burgerMenu);
  burgerMenu.append(burgerMenuInner);

  burgerMenu.onclick = function () {
    let popup = document.createElement("div");
    popup.classList.add("burger-popup");

    document.body.append(popup);

    for (let elem of copyLinks) {
      elem.classList.remove("menu__link");
      elem.classList.add("burger-link");
      popup.append(elem);
    }
    //animation open
    popup.style.height = "0px";
    let interval = setInterval(function () {
      if (parseInt(popup.style.height) > burgerMenuHeight) {
        clearInterval(interval);
      } else {
        popup.style.height = parseInt(popup.style.height) + 5 + "px";
      }
    }, 5);
  };
}

//close burger menu on click out of burger
document.addEventListener("click", function (event) {
  let popup = document.querySelectorAll(".burger-popup");
  if (event.target.className == "burger-popup") return;
  if (event.target.className == "burger-menu" && popup.length < 2) return;

  if (popup.length > 0) {
    //animation close
    let interval = setInterval(function () {
      if (parseInt(popup[0].style.height) < 20) {
        clearInterval(interval);
        document.querySelector(".burger-popup").remove();
      } else {
        popup[0].style.height = parseInt(popup[0].style.height) - 5 + "px";
      }
    }, 5);
  }
});
toggleBurgerMenu();


//slider