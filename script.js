var closeButton = document.getElementById("close-button");
var mobileMenu = document.getElementById("mobile-menu");
var openMenu = document.getElementById("open-menu");
var header = document.querySelector("header");
var section = document.querySelector(".hero-section");
var cardContainer = document.querySelector(".card-container");

closeButton.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(100%)";
    header.style.opacity = 1;
    section.style.opacity = 1;
    cardContainer.style.opacity = 1;
})

openMenu.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0)";
    header.style.opacity = 0.6;
    section.style.opacity = 0.6;
    cardContainer.style.opacity = 0.6;
})