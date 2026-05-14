// ===== PAGE NAVIGATION =====
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ===== LOGO CLICK TO HOME =====
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            showPage('home');
        });
    }

    // Add smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('onclick')) {
                // Let onclick handler take care of it
                return;
            }
        });
    });

    // Initialize page on load
    showPage('home');
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.service-card, .contact-item');
    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== HEADER SCROLL EFFECT =====
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow to header on scroll
    if (scrollTop > 50) {
        header.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== UTILITY FUNCTIONS =====
console.log('%c🎉 Caffe Website Loaded Successfully!', 'color: #C9A961; font-size: 14px; font-weight: bold;');
