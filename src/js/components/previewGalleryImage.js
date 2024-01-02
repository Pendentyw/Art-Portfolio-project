export const previewGalleryImage = () => {
  const previewImageContainer = document.querySelector('.preview-image-container');
  let previewImage = document.querySelector('.preview-image');
  const galleryImages = document.querySelectorAll('.gallery-image');
  const navBar = document.querySelector('nav');
  const body = document.querySelector('body');
  const images = Array.from(galleryImages);
  const exitIcon = document.querySelector('.exit-icon');
  console.log(images);

  const mediaquery = window.matchMedia('(max-width:1199px)');
  const mediaphone = window.matchMedia('(max-width: 700px)');

  const changePreviewImageAttributes = (imageSource, imageAlt) => {
    previewImage.src = imageSource;
    previewImage.alt = imageAlt;
  };
  const handleBackgroundClick = (event) => {
    if (event.target == previewImage) {
      return;
    } else if (event.target == previewImageContainer || event.target == exitIcon) {
      console.log('target');
      console.log(event.target);
      previewImageContainer.classList.remove('show-image-container');
      body.classList.remove('stop-scrolling');

      navBar.classList.remove('hide-nav');
    }
  };

  const handleImageAttributes = (event) => {
    const imageSource = event.target.src;
    const imageAlt = event.target.alt;

    changePreviewImageAttributes(imageSource, imageAlt);
    if (mediaquery.matches) {
      console.log('mediaqueryt');
      previewImageContainer.classList.add('show-image-container');
      navBar.classList.add('hide-nav');
      body.classList.add('stop-scrolling');
      document.addEventListener('click', handleBackgroundClick);
    } else {
      return;
    }
  };

  images.forEach((image) => image.addEventListener('click', handleImageAttributes));
};
