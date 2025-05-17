const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  direction: 'vertical', // or 'horizontal'
  lerp: 0.05, // linear interpolation speed (smoothness)
  multiplier: 1, // scroll speed multiplier
  smartphone: {
    smooth: true // smooth scrolling on mobile
  },
  tablet: {
    smooth: true // smooth scrolling on tablet
  }
});