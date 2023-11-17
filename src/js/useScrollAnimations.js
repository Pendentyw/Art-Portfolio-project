import { addScrollAnimation } from './components/scrollAnimation';

export const useScrollAnimations = () => {
  const rotateScrollAnimation = document.querySelectorAll('.rotate-animation');
  const opacityScrollAnimation = document.querySelectorAll('.opacity-animation');
  const easeInLeftScrollAnimation = document.querySelectorAll('.ease-in-left-animation');
  const fadeUpAnimation = document.querySelectorAll('.fade-up-animation');
  const borderRadiusAnimation = document.querySelectorAll('.border-radius-animation');
  const zoomAnimation = document.querySelectorAll('.zoom-animation');
  const gifAndBorderAnimation = document.querySelectorAll('.border-right-animation');
  const widthAnimation = document.querySelectorAll('.width-animation');
  const easeInRightScrollAnimation = document.querySelectorAll('.ease-in-right-animation');

  //use animation on scroll function
  addScrollAnimation(borderRadiusAnimation, 'border-radius-scroll-animation', true);
  addScrollAnimation(rotateScrollAnimation, 'rotate-scroll-animation', true);
  addScrollAnimation(opacityScrollAnimation, 'opacity-scroll-animation', true);
  addScrollAnimation(easeInLeftScrollAnimation, 'ease-in-left-scroll-animation');
  addScrollAnimation(easeInRightScrollAnimation, 'ease-in-right-scroll-animation');
  addScrollAnimation(fadeUpAnimation, 'fade-up-scroll-animation', false);
  addScrollAnimation(zoomAnimation, 'zoom-scroll-animation', true);
  addScrollAnimation(gifAndBorderAnimation, 'border-right-scroll-animation', true);
  addScrollAnimation(widthAnimation, 'width-scroll-animation', true);
};
