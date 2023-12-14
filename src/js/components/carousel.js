export const carousel = () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const cards = document.querySelector('.cards');
  const iconNext = document.querySelector('.arrow-next');
  const iconPrev = document.querySelector('.arrow-prev');

  if (!carouselContainer) return;

  let position = 0;

  const positionOffset = 60;

  iconPrev.addEventListener('click', () => {
    position = position + positionOffset;
    cards.style.left = `${position}%`;

    checkLimit();
  });

  iconNext.addEventListener('click', () => {
    position = position - positionOffset;
    cards.style.left = `${position}%`;
    checkLimit();
  });

  const checkLimit = () => {
    let outer = carouselContainer.getBoundingClientRect();
    let inner = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) >= 0) {
      cards.style.left = '0px';
      iconPrev.style.color = 'none';
    } else {
      iconPrev.style.display = 'flex';
    }

    if (inner.right < outer.right) {
      cards.style.left = `-${inner.width - outer.width - 1}px`;

      iconNext.style.display = 'none';
    } else {
      iconNext.style.display = 'flex';
    }
  };
};
