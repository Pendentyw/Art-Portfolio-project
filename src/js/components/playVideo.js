export const playVideoOnScroll = (video) => {
  if (!video) return;

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
  if (!video) return;

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
};
