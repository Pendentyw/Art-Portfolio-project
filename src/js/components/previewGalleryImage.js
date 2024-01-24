export const previewGalleryImage = () => {
  let previewImageIndex;
  let previewImage = document.querySelector('.preview-image');
  const previewImageContainer = document.querySelector('.preview-image-container');
  const galleryImages = document.querySelectorAll('.gallery-image');
  const navBar = document.querySelector('nav');
  const body = document.querySelector('body');
  const images = Array.from(galleryImages);
  const exitIcon = document.querySelector('.exit-icon');
  const iconNext = document.querySelector('.arrow-next-preview');
  const iconPrev = document.querySelector('.arrow-prev-preview');
  console.log(images);

  //pseudo slider

  //pseudo slider
  console.log(images[3].dataset.index);
  const mediaquery = window.matchMedia('(max-width:1199px)');
  const mediaphone = window.matchMedia('(max-width: 700px)');

  const changePreviewImageAttributes = (imageSource, imageAlt) => {
    previewImage.src = imageSource;
    previewImage.alt = imageAlt;
    previewImage.dataset.index = previewImageIndex;
  };
  const handleBackgroundClick = (event) => {
    if (event.target == previewImage) {
      return;
    } else if (event.target == previewImageContainer || event.target == exitIcon) {
      previewImageContainer.classList.remove('show-image-container');
      body.classList.remove('stop-scrolling');

      iconPrev.classList.add('show');
      iconNext.classList.add('show');

      previewImageIndex == 0;
      iconPrev.removeEventListener('click', handlePrevImageChange);
      iconNext.removeEventListener('click', handleNextImageChange);

      navBar.classList.remove('hide-nav');
    }
  };

  const handleNextImageChange = () => {
    const nextImage = Number(previewImageIndex) + 1;
    iconPrev.classList.remove('hide');
    iconPrev.classList.add('show');
    if (nextImage >= images.length) {
      console.log('toobig');
      return;
    }

    if (nextImage == images.length - 1) {
      iconNext.classList.remove('show');
      iconNext.classList.add('hide');
    }

    changeImageAttributesByIndex(nextImage);
  };

  const handlePrevImageChange = () => {
    const previousImage = Number(previewImageIndex) - 1;
    iconNext.classList.remove('hide');
    iconNext.classList.add('show');
    if (previousImage < 0) {
      console.log('toosmol');

      return;
    }

    if (previousImage == 0) {
      iconPrev.classList.remove('show');
      iconPrev.classList.add('hide');
    }

    changeImageAttributesByIndex(previousImage);
  };

  const changeImageAttributesByIndex = (index) => {
    const image = images.find((image) => image.dataset.index == index);
    const imageSource = image.getAttribute('src');
    const imageAlt = image.getAttribute('alt');
    previewImage.src = imageSource;
    previewImage.alt = imageAlt;
    previewImage.dataset.index = index;
    previewImageIndex = index;
  };

  const handleImageAttributes = (event) => {
    const imageSource = event.target.src;
    const imageAlt = event.target.alt;
    previewImageIndex = event.target.dataset.index;

    if (previewImageIndex == 0) {
      iconPrev.classList.add('hide');
      iconPrev.classList.remove('show');
    }

    if (previewImageIndex == images.length - 1) {
      iconNext.classList.add('hide');
      iconNext.classList.remove('show');
    }

    changePreviewImageAttributes(imageSource, imageAlt);
    if (mediaquery.matches) {
      console.log('mediaqueryt');
      previewImageContainer.classList.add('show-image-container');

      navBar.classList.add('hide-nav');
      body.classList.add('stop-scrolling');
      document.addEventListener('click', handleBackgroundClick);

      console.log(previewImage.dataset.index);

      iconNext.addEventListener('click', handleNextImageChange);
      iconPrev.addEventListener('click', handlePrevImageChange);
    } else {
      return;
    }
  };

  images.forEach((image) => image.addEventListener('click', handleImageAttributes));
};
