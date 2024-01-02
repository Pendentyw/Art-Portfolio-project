export const carousel = () => {
  const initialElement = 0;
  let correctedFocus = 0;
  let alwaysVisibleCardsOffset = 0;
  const carouselContainer = document.querySelector('.carousel-container');
  const cardsWrapper = document.querySelector('.cards');
  const images = Array.from(document.querySelectorAll('.cards img'));
  const cardsArray = Array.from(document.querySelectorAll('.card'));
  const iconNext = document.querySelector('.arrow-next');
  const iconPrev = document.querySelector('.arrow-prev');

  if (!carouselContainer) return;

  let loaded = 0;
  const desired = images.length;

  const getComputedMargin = (element, key) => {
    let margin = getComputedStyle(element)[key];
    margin = margin.slice(0, -2);
    return parseFloat(margin);
  };

  const checkForLoaded = () => {
    console.warn('CHECKING', loaded, desired);
    if (loaded === desired) {
      setCarouselBasedOnFocus(correctedFocus);
      setButtons(alwaysVisibleCardsOffset);
    }
  };

  const getCardSizeAt = (index) => {
    let card;

    if (index !== undefined) {
      card = cardsArray[index];
    } else {
      card = cardsArray.find((card) => card !== undefined);
    }

    return {
      width: card.getBoundingClientRect().width,
      marginLeft: getComputedMargin(card, 'marginLeft'),
      marginRight: getComputedMargin(card, 'marginRight'),
    };
  };

  const getAllCardsWidthsBasedOnIndex = (index) => {
    let totalWidth = 0;

    for (let i = 0; i < index; i++) {
      if (cardsArray[i]) {
        const { width, marginLeft, marginRight } = getCardSizeAt(i);

        totalWidth = totalWidth + width + marginLeft + marginRight;
      }
    }

    return totalWidth;
  };

  const getAlwaysDisplayedCardsOffset = () => {
    const carouselContainerWidth = carouselContainer.getBoundingClientRect().width;
    const anyCardSize = getCardSizeAt();
    const totalCardSize = anyCardSize.width + anyCardSize.marginLeft + anyCardSize.marginRight;

    const containerFractionSize = carouselContainerWidth / totalCardSize;

    let displayedCardsCount;

    if (containerFractionSize < 1) {
      displayedCardsCount = 0;
    } else {
      displayedCardsCount = Math.floor(containerFractionSize - 1);
    }

    const alwaysDisplayedSize = totalCardSize * displayedCardsCount;

    if (carouselContainerWidth - alwaysDisplayedSize < totalCardSize * 2) {
      return Math.floor(displayedCardsCount / 2);
    }

    return 0;
  };

  const getCorrectedFocus = (focus, cardsAlwaysDisplayedOffset) => {
    console.warn('FOCUS', focus, alwaysVisibleCardsOffset);
    if (focus < cardsAlwaysDisplayedOffset) {
      focus = cardsAlwaysDisplayedOffset;
    }

    if (focus > cardsArray.length - 1 - cardsAlwaysDisplayedOffset) {
      focus = cardsArray.length - 1 - cardsAlwaysDisplayedOffset;
    }

    console.warn('CORRECTED FOCUS', focus);

    return focus;
  };

  const setCarouselBasedOnFocus = (focus) => {
    let currentCard = cardsArray[focus];

    if (!currentCard) {
      return;
    }

    const carouselContainerWidth = carouselContainer.getBoundingClientRect().width;
    const previousCardsWidth = getAllCardsWidthsBasedOnIndex(focus);

    const cardWidth = currentCard.getBoundingClientRect().width;
    const marginLeft = getComputedMargin(currentCard, 'marginLeft');
    const marginRight = getComputedMargin(currentCard, 'marginRight');

    let offset =
      carouselContainerWidth / 2 -
      (cardWidth / 2 + (marginLeft + marginRight) / 2) -
      previousCardsWidth;

    const minOffset = (cardsWrapper.getBoundingClientRect().width - carouselContainerWidth) * -1;

    if (offset > 0) {
      offset = 0;
    }

    /*
    console.info(
      `carouselContainerWidth: ${carouselContainerWidth}, cardWidth: ${cardWidth}, margins: ${marginLeft} ${marginRight}, previousCardsWidth: ${previousCardsWidth}, minOffset: ${minOffset}`
    );
    console.info('calculatedOffset', offset);
    */

    if (offset < minOffset) {
      offset = minOffset;
    }

    cardsWrapper.style.left = `${offset}px`;
  };

  const setButtons = (visibleCardsOffset) => {
    const currentIndex = carouselContainer.dataset.currentFocus;

    if (currentIndex > visibleCardsOffset) {
      iconPrev.style.display = 'flex';
    } else {
      iconPrev.style.display = 'none';
    }

    if (currentIndex < cardsArray.length - 1 - visibleCardsOffset) {
      iconNext.style.display = 'flex';
    } else {
      iconNext.style.display = 'none';
    }
  };

  alwaysVisibleCardsOffset = getAlwaysDisplayedCardsOffset();
  correctedFocus = getCorrectedFocus(initialElement, alwaysVisibleCardsOffset);
  carouselContainer.dataset.currentFocus = correctedFocus;

  images.forEach((image) => {
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

    const newCorrectedFocus = getCorrectedFocus(currentIndex - 1, alwaysVisibleCardsOffset);

    setCarouselBasedOnFocus(newCorrectedFocus);
    carouselContainer.dataset.currentFocus = newCorrectedFocus;
    setButtons(alwaysVisibleCardsOffset);
    //position = position + positionOffset;
    //cards.style.left = `${position}%`;
    //checkLimit();
  });

  iconNext.addEventListener('click', () => {
    const currentIndex = Number(carouselContainer.dataset.currentFocus);

    if (currentIndex >= cardsWrapper.length - 1) {
      return;
    }

    const newCorrectedFocus = getCorrectedFocus(currentIndex + 1, alwaysVisibleCardsOffset);

    setCarouselBasedOnFocus(newCorrectedFocus);
    carouselContainer.dataset.currentFocus = newCorrectedFocus;
    setButtons(alwaysVisibleCardsOffset);
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
