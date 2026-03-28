// ── Slow Staggered Scroll Animations ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// ── Active Nav Link on Scroll ──
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.dataset.target === id);
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
);

sections.forEach((section) => navObserver.observe(section));

// ── Cursor Glow Effect ──
document.addEventListener('mousemove', (e) => {
  document.body.style.setProperty('--mouse-x', e.clientX + 'px');
  document.body.style.setProperty('--mouse-y', e.clientY + 'px');
});

// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  const action = contactForm.getAttribute('action');
  if (action.includes('YOUR_FORM_ID')) {
    e.preventDefault();
    alert(
      'Contact form not configured yet. Replace YOUR_FORM_ID in index.html with your Formspree endpoint.'
    );
  }
});
