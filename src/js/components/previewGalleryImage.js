export const previewGalleryImage = () => {
  let previewImage = document.querySelector('.preview-image');
  const galleryImages = document.querySelectorAll('img');
  const images = Array.from(galleryImages);
  console.log(images);

  const changePreviewImageSrc = (imageSource) => {
    previewImage.src = imageSource;
  };
  const handleImageAttribute = (event) => {
    const imageSource = event.target.src;
    changePreviewImageSrc(imageSource);
  };

  images.forEach((image) => image.addEventListener('click', handleImageAttribute));
};
