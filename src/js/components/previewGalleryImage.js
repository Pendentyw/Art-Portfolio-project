export const previewGalleryImage = () => {
  const previewImageContainer = document.querySelector('.preview-image-container');
  let previewImage = document.querySelector('.preview-image');
  const galleryImages = document.querySelectorAll('img');
  const body = document.querySelector('body');
  const images = Array.from(galleryImages);
  console.log(images);

  const mediaquery = window.matchMedia('(max-width:1199px)');

  const changePreviewImageAttributes = (imageSource, imageAlt) => {
    previewImage.src = imageSource;
    previewImage.alt = imageAlt;
  };
  const handleBackgroundClick = (event) => {
    if (event.target == previewImage) {
      return;
    } else if (event.target == document.querySelector('.preview-image-shadow')) {
      previewImageContainer.classList.remove('show-image-container');
      body.classList.remove('stop-scrolling');
    }
  };

  const handleImageAttributes = (event) => {
    const imageSource = event.target.src;
    const imageAlt = event.target.alt;

    changePreviewImageAttributes(imageSource, imageAlt);
    if (mediaquery.matches) {
      previewImageContainer.classList.add('show-image-container');
      body.classList.add('stop-scrolling');
      document.addEventListener('click', handleBackgroundClick);
    } else {
      return;
    }
  };

  images.forEach((image) => image.addEventListener('click', handleImageAttributes));
};
