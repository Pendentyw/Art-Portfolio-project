import slider from './src/js/components/slide.js';

console.log('XD');
if (module.hot) {
  module.hot.accept();
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').classList.remove('nav-animation');
  } else {
    document.querySelector('nav').classList.add('nav-animation');
  }
  prevScrollpos = currentScrollPos;
};

const scrollAnimation = document.querySelectorAll('.animation');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-animation');
      } else {
        // entry.target.classList.remove('scroll-animation');
      }
    });
  },
  { threshold: 0.5 }
);
//
for (let i = 0; i < scrollAnimation.length; i++) {
  const elements = scrollAnimation[i];

  observer.observe(elements);
}
