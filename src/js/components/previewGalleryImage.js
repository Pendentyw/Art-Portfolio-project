export const previewGalleryImage = () => {
  let previewImage = document.querySelector('.preview-image');
  const galleryImages = document.querySelectorAll('img');
  const images = Array.from(galleryImages);
  console.log(images);

  const changePreviewImageAttributes = (imageSource, imageAlt) => {
    previewImage.src = imageSource;
    previewImage.alt = imageAlt;
  };
  const handleImageAttributes = (event) => {
    const imageSource = event.target.src;
    const imageAlt = event.target.alt;
    changePreviewImageAttributes(imageSource, imageAlt);
  };

  images.forEach((image) => image.addEventListener('click', handleImageAttributes));
};
