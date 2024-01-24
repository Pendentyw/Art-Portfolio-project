import { pseudoSlider } from './pseudoSlider.js';

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

      navBar.classList.remove('hide-nav');
    }
  };

  const changeImageAttributesByIndex = (index) => {
    let image = images.find((image) => image.dataset.index == index);
    console.log(image);
    const imageSource = image.getAttribute('src');
    const imageAlt = image.getAttribute('alt');
    const imageIndex = index + 1;
    previewImage.src = imageSource;
    previewImage.alt = imageAlt;
    previewImage.dataset.index = imageIndex;
    previewImageIndex = index;
    console.log(previewImage.dataset.index);
    console.log(previewImage);
  };

  const handleImageAttributes = (event) => {
    const imageSource = event.target.src;
    const imageAlt = event.target.alt;
    previewImageIndex = event.target.dataset.index;
    console.log('previewImageIndex', previewImageIndex);

    changePreviewImageAttributes(imageSource, imageAlt);
    if (mediaquery.matches) {
      console.log('mediaqueryt');
      previewImageContainer.classList.add('show-image-container');

      navBar.classList.add('hide-nav');
      body.classList.add('stop-scrolling');
      document.addEventListener('click', handleBackgroundClick);

      iconNext.addEventListener('click', () => {
        const nextImage = Number(previewImageIndex) + 1;
        if (nextImage >= images.length) {
          console.log('toobig');
          return;
        }
        console.log(previewImageIndex);
        console.log(nextImage);
        changeImageAttributesByIndex(nextImage);
      });
      iconPrev.addEventListener('click', () => {
        const previousImage = Number(previewImageIndex) - 1;
        if (previousImage < 0) {
          iconPrev.classList.add('hide-arrow');
          console.log('toosmol');
          return;
        }
        console.log(previewImageIndex);
        console.log(previousImage);
        changeImageAttributesByIndex(previousImage);
      });
    } else {
      return;
    }
  };

  images.forEach((image) => image.addEventListener('click', handleImageAttributes));
};
