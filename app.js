/* Mobile menu toggle */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});

/* FAQ toggle */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
        icon.classList.toggle('bx-plus', isOpen);
        icon.classList.toggle('bx-minus', !isOpen);
    });
});

/* Countdown timer */
const countdown = () => {
    const countDate = new Date('December 31, 2024 23:59:59').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay < 10 ? +textDay : textDay;
    document.getElementById('hours').innerText = textHour < 10 ? +textHour : textHour;
    document.getElementById('minutes').innerText = textMinute < 10 ? +textMinute : textMinute;
    document.getElementById('seconds').innerText = textSecond < 10 ? +textSecond : textSecond;
};
setInterval(countdown, 1000);

/* Modal popup */
const joinBtn = document.getElementById('join-newsletter-btn');
const modal = document.getElementById('newsletter-modal');
const closeModal = document.getElementById('close-modal');
const newsletterForm = document.getElementById('newsletter-form');
const successMessage = document.getElementById('success-message');
joinBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    successMessage.innerText = '';
    newsletterForm.reset();
});
