import { previewGalleryImage } from './components/previewGalleryImage.js';
import { dropdown } from './components/dropdown.js';
import { navbarAnimation } from './components/navbarAnimation.js';
import { useScrollAnimations } from './useScrollAnimations.js';
import { carousel } from './components/carousel.js';
import { playVideoOnScroll, pauseVideoOnMouseEnter } from './components/playVideo.js';
import { lazyLoad } from './components/lazyLoad.js';

if (module.hot) {
  module.hot.accept();
}

document.addEventListener('DOMContentLoaded', () => {
  navbarAnimation();
  dropdown();
  previewGalleryImage();
  useScrollAnimations();
  carousel();
  lazyLoad();

  // manage video playtime

  const videoToPlay = document.querySelector('.sleepwalking-video');

  playVideoOnScroll(videoToPlay);
  pauseVideoOnMouseEnter(videoToPlay);
});
