// ==============================
// Navbar scroll behavior
// ==============================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ==============================
// Smooth scroll for anchor links
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    });
});

// ==============================
// Scroll-triggered fade-in
// ==============================
const fadeUpElements = [
    ...document.querySelectorAll('.benefit-card'),
    ...document.querySelectorAll('.step-card'),
    document.querySelector('.preview-content'),
    document.querySelector('.preview-visual'),
    document.querySelector('.cta-content'),
];

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeUpElements.forEach((el, i) => {
    if (!el) return;
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(i % 3) * 0.1}s`;
    observer.observe(el);
});

// ==============================
// Button ripple effect
// ==============================
document.querySelectorAll('.btn-primary, .btn-ghost, .btn-white, .btn-outline').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==============================
// "See How It Works" scroll
// ==============================
const heroCtaSecondary = document.getElementById('heroCtaSecondary');
if (heroCtaSecondary) {
    heroCtaSecondary.addEventListener('click', () => {
        const target = document.getElementById('how-it-works');
        if (target) {
            const navHeight = navbar.offsetHeight;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - navHeight - 24,
                behavior: 'smooth'
            });
        }
    });
}

console.log('Loyalink showcase loaded ✨');
