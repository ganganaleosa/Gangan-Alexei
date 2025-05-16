// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  slides.forEach(slide => slide.style.opacity = '0');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.opacity = '1';
}

if (totalSlides > 0) {
  slides[0].style.opacity = '1';
  setInterval(changeSlide, 4000);
}

const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

// Load saved mode
if (localStorage.getItem('mode') === 'light') {
  body.classList.add('light-mode');
  toggleBtn.classList.add('light');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';  // implicit dark mode icon
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  toggleBtn.classList.toggle('light');
  if (body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️';
    localStorage.setItem('mode', 'light');
  } else {
    toggleBtn.textContent = '🌙';
    localStorage.setItem('mode', 'dark');
  }
});






