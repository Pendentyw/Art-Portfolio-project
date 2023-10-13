import slider from './src/js/components/carousel.js';
import { useScrollAnimations } from './src/js/useScrollAnimations.js';
import { carousel } from './src/js/components/carousel.js';
import { playVideoOnScroll, pauseVideoOnMouseEnter } from './src/js/components/playVideo.js';
import { previewGalleryImage } from './src/js/components/previewGalleryImage.js';

//parcel

console.log('XD');
if (module.hot) {
  module.hot.accept();
}

//hide navigation on scrolling down

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').classList.remove('nav-animation');
  } else {
    document.querySelector('nav').classList.add('nav-animation');
  }
  prevScrollpos = currentScrollPos;
};

previewGalleryImage();
//use scroll animation function
useScrollAnimations();
// use carousel

carousel();

// manage video playtime

const videoToPlay = document.querySelector('.sleepwalking-video');

playVideoOnScroll(videoToPlay);
pauseVideoOnMouseEnter(videoToPlay);
