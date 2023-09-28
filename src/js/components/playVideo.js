export const playVideoOnScroll = (video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.4 }
  );
  //
  observer.observe(video);
};

export const pauseVideoOnMouseEnter = (video) => {
  video.addEventListener('mouseenter', () => {
    video.pause();
    video.addEventListener('mouseleave', () => {
      video.play();
    });
  });
};
