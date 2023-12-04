import slider from './src/js/components/carousel.js';
import { addScrollAnimation } from './src/js/components/scrollAnimation.js';
import { useScrollAnimations } from './src/js/useScrollAnimations.js';
import { carousel } from './src/js/components/carousel.js';
import { playVideoOnScroll, pauseVideoOnMouseEnter } from './src/js/components/playVideo.js';
import { lazyLoad } from './src/js/components/lazyLoad.js';
import { previewGalleryImage } from '/src/js/components/previewGalleryImage.js';
import { dropdown } from './src/js/components/dropdown.js';
import { navbarAnimation } from './src/js/components/navbarAnimation.js';

//parcel

console.log('XD');
if (module.hot) {
  module.hot.accept();
}

//hide navigation on scrolling down

navbarAnimation();
dropdown();
previewGalleryImage();
useScrollAnimations();
lazyLoad();

// use carousel

carousel();

// manage video playtime

const videoToPlay = document.querySelector('.sleepwalking-video');

playVideoOnScroll(videoToPlay);
pauseVideoOnMouseEnter(videoToPlay);
