export const addScrollAnimation = (selector, animation, removeAnimation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
        } else if (removeAnimation) {
          entry.target.classList.remove(animation);
        }
      });
    },
    { threshold: 0.4 }
  );
  //
  for (let i = 0; i < selector.length; i++) {
    const elements = selector[i];

    observer.observe(elements);
  }
};
