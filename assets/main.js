const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('#aoipContactForm');
const thanks = document.querySelector('#contactThanks');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(contactForm);
    const name = form.get('name') || '';
    const company = form.get('company') || '';
    const email = form.get('email') || '';
    const message = form.get('message') || '';
    const subject = encodeURIComponent('AOIP Airport Inquiry');
    const body = encodeURIComponent(`Name: ${name}\nAirport / Company: ${company}\nEmail: ${email}\n\nMessage:\n${message}`);
    if (thanks) {
      thanks.classList.add('show');
      window.setTimeout(() => thanks.classList.remove('show'), 5000);
    }
    window.location.href = `mailto:info@aoip.app?subject=${subject}&body=${body}`;
  });
}
