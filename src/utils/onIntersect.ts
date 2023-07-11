const onIntersect = (
  elementToWatch: HTMLElement,
  callback: (element: Element) => void,
  outCallback: (element: Element) => void,
  once = true,
  options = { threshold: 1.0 },
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      callback(entry.target);
      if (once) {
        observer.unobserve(entry.target);
      }
    } else {
      outCallback(entry.target);
    }
  }, options);

  // Observe the element
  observer.observe(elementToWatch);

  // Returns the observer so it can be further used in the component
  return observer;
};

export default onIntersect;
