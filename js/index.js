// Zara Homepage Interactive Features

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');

const nav = document.querySelector('nav');
const navUl = document.querySelector('nav ul');

// Insert mobile menu button before nav on mobile
if (window.innerWidth <= 768) {
    header.insertBefore(mobileMenuBtn, nav);
}

mobileMenuBtn.addEventListener('click', () => {
    navUl.classList.toggle('active');
    mobileMenuBtn.innerHTML = navUl.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navUl.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.querySelectorAll('.section-card, .grid-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission handler
const subscriptionForm = document.querySelector('.footer-subscription-form');
if (subscriptionForm) {
    const submitBtn = subscriptionForm.querySelector('button[type="submit"]');
    const emailInput = subscriptionForm.querySelector('input[type="email"]');
    
    if (submitBtn && emailInput) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            submitBtn.textContent = 'Subscribed!';
            submitBtn.style.backgroundColor = '#4CAF50';
            emailInput.value = '';
            
            setTimeout(() => {
                submitBtn.textContent = 'Subscribe';
                submitBtn.style.backgroundColor = '#000';
            }, 3000);
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Image lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Parallax effect for hero section (subtle)
const heroSection = document.querySelector('.top-section-hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroSection.style.transform = `translateY(${parallax}px)`;
    });
}

// Add hover effect sound feedback (optional, can be commented out)
const cards = document.querySelectorAll('.section-card, .grid-image');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Performance: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    // Add any additional scroll-based features here
}, 10);

window.addEventListener('scroll', handleScroll);

// Log when page is fully loaded
window.addEventListener('load', () => {
    console.log('Zara homepage loaded successfully');
});
