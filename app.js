import { useScrollAnimations } from './src/js/useScrollAnimations.js';
import { dropdown } from './src/js/components/dropdown.js';
import { navbarAnimation } from './src/js/components/navbarAnimation.js';

//parcel

console.log('XD');
if (module.hot) {
  module.hot.accept();
}

//hide navigation on scrolling down

document.addEventListener('DOMContentLoaded', () => {
  navbarAnimation();
  dropdown();
  useScrollAnimations();

  // use carousel
});
