// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Demo contact form (no backend wired up yet)
const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks — your message is ready to send once a form handler is connected.';
  });
}
