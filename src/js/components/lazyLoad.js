export const lazyLoad = () => {
  const images = document.querySelectorAll('.image-to-load');

  const imagesArray = Array.from(images);

  const options = {
    treshold: 0.1,
  };

  let imagesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;

        lazyImage.src = entry.target.dataset.src;

        imagesObserver.unobserve(lazyImage);
      }
    });
  });
  imagesArray.forEach((lazyImage) => {
    imagesObserver.observe(lazyImage);
  });
};
