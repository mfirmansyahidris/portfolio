// Keep the footer current without requiring a build step.
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections as they scroll into view. Only elements below the fold at load are hidden,
// so nothing flashes, and everything stays visible when JavaScript or IntersectionObserver is missing
// or the visitor prefers reduced motion.
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var groups = ['.approach-grid > .approach', '.published-grid > .published-card', '.experience > .experience-row', '.contact > *'];
  var singles = ['.section-heading', '.published-heading', '.demo-heading', '#react-demo', '.about-grid > div'];
  var items = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) { el.style.setProperty('--i', Math.min(i, 5)); items.push(el); });
  });
  singles.forEach(function (sel) { document.querySelectorAll(sel).forEach(function (el) { items.push(el); }); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      io.unobserve(el);
      el.classList.add('in');
      setTimeout(function () { el.classList.remove('reveal', 'in'); }, 1000);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add('reveal');
    io.observe(el);
  });
})();
