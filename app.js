import slider from './src/js/components/carousel.js';
import { addScrollAnimation } from './src/js/components/scrollAnimation.js';
import { carousel } from './src/js/components/carousel.js';

//parcel

console.log('XD');
if (module.hot) {
  module.hot.accept();
}

//hide navigation on scrolling down

const prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').classList.remove('nav-animation');
  } else {
    document.querySelector('nav').classList.add('nav-animation');
  }
  prevScrollpos = currentScrollPos;
};

//get selectors for scroll animation function

const rotateScrollAnimation = document.querySelectorAll('.rotate-animation');
const opacityScrollAnimation = document.querySelectorAll('.opacity-animation');
const easeInLeftScrollAnimation = document.querySelectorAll('.ease-in-left-animation');
const fadeUpAnimation = document.querySelectorAll('.fade-up-animation');
const borderRadiusAnimation = document.querySelectorAll('.border-radius-animation');

//use animation on scroll function
addScrollAnimation(borderRadiusAnimation, 'border-radius-scroll-animation', true);
addScrollAnimation(rotateScrollAnimation, 'rotate-scroll-animation', true);
addScrollAnimation(opacityScrollAnimation, 'opacity-scroll-animation', true);
addScrollAnimation(easeInLeftScrollAnimation, 'ease-in-left-scroll-animation');
addScrollAnimation(fadeUpAnimation, 'fade-up-scroll-animation', true);

// use carousel

carousel();
