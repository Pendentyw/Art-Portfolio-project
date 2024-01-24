export const pseudoSlider = () => {
  const iconNext = document.querySelector('.arrow-next-preview');
  const iconPrev = document.querySelector('.arrow-prev-preview');
  const previewImage = document.querySelector('.preview-image');
  const galleryImages = document.querySelectorAll('.gallery-image');
  const previewImageContainer = document.querySelector('.preview-image-container');
  let previewImageIndex = 0;

  console.log(previewImage);
  console.log(galleryImages);

  if (previewImageContainer.classList.contains('show-image-container')) {
    console.log(galleryImages);

    iconNext.addEventListener('click', () => {
      console.log('iconNext');
    });
    iconPrev.addEventListener('click', () => {
      console.log('iconPrev');
    });

    const changePreviewImageAttributes = (imageSource, imageAlt) => {
      previewImage.src = imageSource;
      previewImage.alt = imageAlt;
    };

    const handleClick = (event) => {
      if (event.target == iconNext) {
        console.log('iconNext');
      }
    };

    iconNext.addEventListener('click', handleClick);
  }
};
