"use strict";

document.querySelector(".link").addEventListener("click", function (e) {
  e.preventDefault();

  console.log("hellow world!");

  // matching Strategy
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// SLIDER

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let currentSlide = 0;
  const maxSlide = slides.length;

//   functions

const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 *(i  - slide)}%)`));
}

// Next slide
const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
  };

const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};

slider();



// function showSlide(index) {
//   slides.forEach((slide, i) => {
//       slide.classList.remove('active');
//       if (i === index) {
//           slide.classList.add('active');
//       }
//   });
// }
// showSlide(currentSlide);