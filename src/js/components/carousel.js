export const carousel = () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const cards = document.querySelector('.cards');

  if (!carouselContainer) return;

  let pressed = false;
  let startX;
  let x;

  carouselContainer.addEventListener('mousedown', (event) => {
    pressed = true;
    startX = event.offsetX - cards.offsetLeft;
    carouselContainer.style.cursor = 'grabbing';
  });

  carouselContainer.addEventListener('mouseenter', () => {
    carouselContainer.style.cursor = 'grab';
  });

  carouselContainer.addEventListener('mouseleave', () => {
    carouselContainer.style.cursor = 'default';
    pressed = false;
  });

  carouselContainer.addEventListener('mouseup', () => {
    carouselContainer.style.cursor = 'grab';
    pressed = false;
  });

  carouselContainer.addEventListener('mousemove', (event) => {
    if (!pressed) return;
    event.preventDefault();

    x = event.offsetX;

    cards.style.left = `${x - startX}px`;

    checkLimit();
  });

  const checkLimit = () => {
    let outer = carouselContainer.getBoundingClientRect();
    let inner = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
      cards.style.left = '0px';
    }

    if (inner.right < outer.right) {
      cards.style.left = `-${inner.width - outer.width}px`;
    }
  };
};
