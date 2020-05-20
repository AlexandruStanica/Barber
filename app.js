$(function () {
    $(".hamburger-menu").on("click", function () {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });

    $(".nav-link").on("click", function () {
        $(".toggle").toggleClass("open");
        $(".nav-list").toggleClass("open");
    });
});

// Slideshow
$(document).ready(function () {
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true
    });
});

// Our Team
const barbers = document.querySelectorAll(".barber");

barbers.forEach(barber => {
    barber.addEventListener("mouseover", () => {
        barber.childNodes[1].classList.add("img-darken");
    });

    barber.addEventListener("mouseout", () => {
        barber.childNodes[1].classList.remove("img-darken");
    });
});
