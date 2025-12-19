const contactBtn = document.querySelector('.contact-button');
const contactSection = document.getElementById('contact');

contactBtn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});