// JavaScript pentru funcționalitatea slider-ului
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
    });
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.opacity = '1';
}

setInterval(changeSlide, 4000);


