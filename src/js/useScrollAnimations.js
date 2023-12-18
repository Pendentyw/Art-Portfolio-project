import { addScrollAnimation } from './components/scrollAnimation';

export const useScrollAnimations = () => {
  [
    ['rotate', true],
    ['opacity', true],
    ['ease-in-left'],
    ['fade-up'],
    ['fade-down', true],
    ['border-radius', true],
    ['circle-border'],
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
};
