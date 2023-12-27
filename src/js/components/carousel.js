export const carousel = () => {
  const initialElement = 0;
  const carouselContainer = document.querySelector('.carousel-container');
  const cardsWrapper = document.querySelector('.cards');
  const images = Array.from(document.querySelectorAll('.cards img'));
  const cardsArray = Array.from(document.querySelectorAll('.card'));
  const iconNext = document.querySelector('.arrow-next');
  const iconPrev = document.querySelector('.arrow-prev');

  if (!carouselContainer) return;

  carouselContainer.dataset.currentFocus = initialElement;

  let loaded = 0;
  const desired = images.length;

  console.info(images, desired);

  const getComputedMargin = (element, key) => {
    let margin = getComputedStyle(element)[key];
    margin = margin.slice(0, -2);
    return parseFloat(margin);
  };

  const checkForLoaded = () => {
    console.warn('CHECKING', loaded, desired);
    if (loaded === desired) {
      setCarouselBasedOnFocus(initialElement);
      setButtons();
    }
  };

  const getAllCardsWidthsBasedOnIndex = (index) => {
    let totalWidth = 0;

    for (let i = 0; i < index; i++) {
      const currentCard = cardsArray[i];
      console.log(currentCard);

      if (currentCard) {
        const cardWidth = currentCard.getBoundingClientRect().width;
        const marginLeft = getComputedMargin(currentCard, 'marginLeft');
        const marginRight = getComputedMargin(currentCard, 'marginRight');

        totalWidth = totalWidth + cardWidth + marginLeft + marginRight;
      }
    }

    return totalWidth;
  };

  const setCarouselBasedOnFocus = (focus) => {
    let currentCard;
    if (focus == 0) {
      currentCard = cardsArray[focus + 1];
    } else {
      currentCard = cardsArray[focus];
    }

    console.info('CARDS?', cardsArray);

    if (!currentCard) {
      return;
    }

    const carouselContainerWidth = carouselContainer.getBoundingClientRect().width;
    const previousCardsWidth = getAllCardsWidthsBasedOnIndex(focus);

    const cardWidth = currentCard.getBoundingClientRect().width;
    const marginLeft = getComputedMargin(currentCard, 'marginLeft');
    const marginRight = getComputedMargin(currentCard, 'marginRight');

    console.info(
      'CALCULATED OFFSET',
      `${
        carouselContainerWidth / 2 -
        (cardWidth / 2 + (marginLeft + marginRight) / 2) -
        previousCardsWidth
      }px`
    );

    if (focus == 0) {
      cardsWrapper.style.left = `${cardWidth / 4 + (marginLeft + marginRight) / 4}px`;
      // } else if (focus >= 1) {
      //   cardsWrapper.style.left = `${
      //     carouselContainerWidth / 4 -
      //     (cardWidth + (marginLeft + marginRight) / 2) -
      //     previousCardsWidth
      //   }px`;
    } else if (focus >= 1) {
      cardsWrapper.style.left = `${
        carouselContainerWidth / 2 -
        (cardWidth / 2 + (marginLeft + marginRight) / 2) -
        previousCardsWidth
      }px`;
    }
  };

  const setButtons = () => {
    const currentIndex = carouselContainer.dataset.currentFocus;

    if (currentIndex > 0) {
      iconPrev.style.display = 'flex';
    } else {
      iconPrev.style.display = 'none';
    }

    if (currentIndex < cardsArray.length - 2) {
      iconNext.style.display = 'flex';
    } else {
      iconNext.style.display = 'none';
    }
  };

  images.forEach((image) => {
    console.info(image);

    if (image.complete) {
      loaded++;
      checkForLoaded();
    } else {
      image.addEventListener('load', () => {
        loaded++;
        checkForLoaded();
        console.warn('LOADED', loaded);
      });
    }
  });

  iconPrev.addEventListener('click', () => {
    const currentIndex = Number(carouselContainer.dataset.currentFocus);

    if (currentIndex === 0) {
      return;
    }

    setCarouselBasedOnFocus(currentIndex - 1);
    carouselContainer.dataset.currentFocus = currentIndex - 1;
    setButtons();
    //position = position + positionOffset;
    //cards.style.left = `${position}%`;
    //checkLimit();
  });

  iconNext.addEventListener('click', () => {
    const currentIndex = Number(carouselContainer.dataset.currentFocus);

    console.info(currentIndex, cardsArray.length);
    if (currentIndex >= cardsWrapper.length - 1) {
      return;
    }

    setCarouselBasedOnFocus(currentIndex + 1);
    carouselContainer.dataset.currentFocus = currentIndex + 1;
    setButtons();
    //position = position - positionOffset;
    //cards.style.left = `${position}%`;
    //checkLimit();
  });

  /*
  const checkLimit = () => {
    let outer = carouselContainer.getBoundingClientRect();
    let inner = cards.getBoundingClientRect();

    debugger;
    if (parseInt(cards.style.left) > 0) {
      cards.style.left = '0px';
      iconPrev.style.display = 'none';
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
  */
};
