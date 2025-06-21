const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0;
const totalSlides = slides.length;

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

// Auto Play (optional)
// setInterval(() => goToSlide(currentIndex + 1), 4000);

