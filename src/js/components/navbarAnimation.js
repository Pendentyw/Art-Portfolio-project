export const navbarAnimation = () => {
  const navbar = document.querySelector('nav');

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      // document.querySelector('nav').classList.remove('nav-animation');
      // document.querySelector('nav').classList.add('nav-animation-reverse');
      navbar.classList.replace('nav-animation', 'nav-animation-reverse');
    } else {
      document.querySelector('nav').classList.remove('nav-animation-reverse');
      document.querySelector('nav').classList.add('nav-animation');
    }
    prevScrollpos = currentScrollPos;
  };
};
