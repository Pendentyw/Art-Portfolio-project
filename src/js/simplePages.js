import { previewGalleryImage } from './components/previewGalleryImage.js';
import { dropdown } from './components/dropdown.js';
import { navbarAnimation } from './components/navbarAnimation.js';
import { useScrollAnimations } from './useScrollAnimations.js';
import { lazyLoad } from './components/lazyLoad.js';
export const simplePages = () => {
  if (module.hot) {
    module.hot.accept();
  }

  document.addEventListener('DOMContentLoaded', () => {
    navbarAnimation();
    dropdown();
    previewGalleryImage();
    useScrollAnimations();
    lazyLoad();
  });
};
