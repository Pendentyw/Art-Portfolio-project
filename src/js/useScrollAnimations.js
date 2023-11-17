import { addScrollAnimation } from './components/scrollAnimation';

export const useScrollAnimations = () => {
  [
    ['rotate', true],
    ['opacity', true],
    ['ease-in-left'],
    ['fade-up'],
    ['fade-down'],
    ['border-radius', true],
    ['zoom', true],
    ['border-right', true],
    ['width', true],
    ['ease-in-right'],
  ].forEach((tagPair) => {
    const [tag, flag] = tagPair;

    addScrollAnimation(
      document.querySelectorAll(`.${tag}-animation`),
      `${tag}-animation-scroll`,
      flag
    );
  });

  //   const rotateScrollAnimation = document.querySelectorAll('.rotate-animation');
  //   const opacityScrollAnimation = document.querySelectorAll('.opacity-animation');
  //   const easeInLeftScrollAnimation = document.querySelectorAll('.ease-in-left-animation');
  //   const fadeUpAnimation = document.querySelectorAll('.fade-up-animation');
  //   const borderRadiusAnimation = document.querySelectorAll('.border-radius-animation');
  //   const zoomAnimation = document.querySelectorAll('.zoom-animation');
  //   const gifAndBorderAnimation = document.querySelectorAll('.border-right-animation');
  //   const widthAnimation = document.querySelectorAll('.width-animation');
  //   const easeInRightScrollAnimation = document.querySelectorAll('.ease-in-right-animation');
  //   const fadeDownAnimation = document.querySelectorAll();

  //   //use animation on scroll function
  //   addScrollAnimation(borderRadiusAnimation, 'border-radius-animation-scroll', true);
  //   addScrollAnimation(rotateScrollAnimation, 'rotate-scroll-animation', true);
  //   addScrollAnimation(opacityScrollAnimation, 'opacity-scroll-animation', true);
  //   addScrollAnimation(easeInLeftScrollAnimation, 'ease-in-left-scroll-animation');
  //   addScrollAnimation(easeInRightScrollAnimation, 'ease-in-right-scroll-animation');
  //   addScrollAnimation(fadeUpAnimation, 'fade-up-scroll-animation', false);
  //   addScrollAnimation(zoomAnimation, 'zoom-scroll-animation', true);
  //   addScrollAnimation(gifAndBorderAnimation, 'border-right-scroll-animation', true);
  //   addScrollAnimation(widthAnimation, 'width-scroll-animation', true);
};
