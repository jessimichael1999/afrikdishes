"use strict";

const main_Menu = document.querySelector(".mainmenu");
const menuItem = document.querySelectorAll(".menu-item");

const closeMenu = document.querySelector(".closemenu");
const openMenu = document.querySelector(".openmenu");
const nav = document.querySelector(".nav");
const sections = document.querySelector(".sec1");
const newNav = document.querySelector(".nav");
// const footerLink = document.querySelectorAll(".footer-link");
const foother = document.querySelector(".footer");
const footerHeading = document.querySelector(".footer-h1");

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

openMenu.addEventListener("click", function () {
  openMenu.classList.add("hidden");
  main_Menu.style.display = "flex";
  main_Menu.style.top = "0";
});

closeMenu.addEventListener("click", function () {
  main_Menu.style.top = "-100%";
  setTimeout(() => openMenu.classList.remove("hidden"), 1500);
});

// ADDING HOVER ANMATION

const fadeOut = function (e) {
  if (e.target.classList.contains("menu-item")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".menu-item");

    const logo = link.closest(".nav").querySelector(".new-logo");

    sibling.forEach((elements) => {
      if (elements !== link) {
        elements.style.opacity = this;
      } else {
        elements.style.color = "skyblue";
      }
    });
    logo.style.opacity = this;
  }
};
const fadeOver = function (e) {
  if (e.target.classList.contains("menu-item")) {
    const link = e.target;
    const sibling = link.closest(".nav").querySelectorAll(".menu-item");

    const logo = link.closest(".nav").querySelector(".new-logo");

    sibling.forEach((elements) => {
      if (elements !== link) {
        elements.style.opacity = this;
      } else {
        elements.style.color = "gray";
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", fadeOut.bind(0.2));
nav.addEventListener("mouseout", fadeOver.bind(1));

// adding smooth scroll

// using itersection api

const smoothScroll = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("menu-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};
document
  .querySelector(".mainmenu")
  .addEventListener("click", smoothScroll.bind(smoothScroll));

// fadein animation
const allSection = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// smooth scroll to footer menu
document.querySelector(".footer-div").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("footer-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
  // newCloseMenu();
});

// lazy loading
const blurImage = document.querySelectorAll("img");
const revealImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("lazy-img");
};

const imgsObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0.18,
  rootMargin: "-100px",
});
blurImage.forEach(function (imgs) {
  imgsObserver.observe(imgs);
});

/////////////////////////////////////////////////
foother.addEventListener("mouseover", function (e) {
  console.log("i love jesse");
  if (e.target.classList.contains("footer-link")) {
    const Links = e.target;
    const sibs = Links.closest(".footer").querySelectorAll(".footer-link");

    sibs.forEach(function (element) {
      if (element !== Links) {
        element.style.color = "gray";
      } else {
        element.style.color = "skyblue";
        footerHeading.style.color = "skyblue";
      }
    });
  }
});
foother.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("footer-link")) {
    const Links = e.target;
    const sibs = Links.closest(".footer").querySelectorAll(".footer-link");

    sibs.forEach(function (element) {
      if (element !== Links) {
        element.style.color = "gray";
        // footerHeading.style.color = "gray";
      } else {
        element.style.color = "gray";
        footerHeading.style.color = "gray";
      }
    });
  }
});
