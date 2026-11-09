// Navigation remains usable without JavaScript.
const chapters = document.querySelectorAll('.chapter');
const links = document.querySelectorAll('nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, {rootMargin: '0px 0px -65% 0px', threshold: 0});
  chapters.forEach(chapter => observer.observe(chapter));
}
