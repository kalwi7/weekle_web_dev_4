const naviToggle = document.querySelector(".navigation__btn");
const naviList = document.querySelector(".navigation__list");

// const mockup = document.querySelector(".hero__img img");
// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

naviToggle.addEventListener("click", function () {
  naviList.classList.toggle("enable-navi");
  //   mockup.classList.toggle("diseble-navi");
});

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -300px 0px",
// };

// const showOnScroll = new IntersectionObserver(function (entries, showOnScroll) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       showOnScroll.unobserve(entry.target);
//     }
//   });
// }, appearOptions);

// faders.forEach((fader) => {
//   showOnScroll.observe(fader);
// });

// sliders.forEach((slider) => {
//   showOnScroll.observe(slider);
// });

//SLIDER
let current = 0;
const slides = document.querySelectorAll(".slider__photo-box");
const slidesBtnLeft = document.querySelector(".slider__btn--left");
const slidesBtnRight = document.querySelector(".slider__btn--right");
const slidesNumer = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i - current)}%)`)
  );
};

const nextSlide = function () {
  current === slidesNumer - 1 ? (current = 0) : current++;
  goToSlide(current);
};

const prevSlide = function () {
  current === 0 ? (current = slidesNumer - 1) : current--;
  goToSlide(current);
};

goToSlide(0);
slidesBtnRight.addEventListener("click", nextSlide);
slidesBtnLeft.addEventListener("click", prevSlide);

//Tabs component

const tabBtns = document.querySelectorAll(".tabs__button");
const tabContents = document.querySelectorAll(".tabs__content");
const tabContainer = document.querySelector(".tabs__nav");

tabContainer.addEventListener("click", (e) => {
  tabBtns.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  const currentTab = e.target.dataset.tab;

  tabContents.forEach((tab) => tab.classList.remove("tabs__content--active"));

  tabContents.forEach((tab) => {
    if (tab.classList.contains(`tabs__content--${currentTab}`)) {
      tab.classList.add("tabs__content--active");
    }
  });
});
