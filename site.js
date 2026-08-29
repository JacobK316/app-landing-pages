// Shared behavior: accessible mobile navigation and automatic copyright year.
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });

// Close when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnToggle = navToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    // Only close if it's currently open
    if (navToggle.getAttribute('aria-expanded') === 'true') {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    }
  }
});