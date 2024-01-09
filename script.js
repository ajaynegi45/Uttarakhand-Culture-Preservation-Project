const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 100}%)`;
  });
};

const nextSlide = () => {
  currSlide++;
  if (currSlide > maxSlide) {
    currSlide = 0;
  }
  updateCarousel(currSlide);
};

const prevSlide = () => {
  currSlide--;
  if (currSlide < 0) {
    currSlide = maxSlide;
  }
  updateCarousel(currSlide);
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? nextSlide() : prevSlide();
  });
});

// Automatic slide every 1000ms (1 second)
const slideInterval = setInterval(nextSlide, 2000);

// Stop automatic slide when a button is clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clearInterval(slideInterval);
  });
});

updateCarousel();
