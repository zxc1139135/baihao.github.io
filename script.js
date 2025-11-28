/**
 * Academic Website JavaScript
 * 白浩个人学术网站交互功能
 * Enhanced version with smooth animations and interactions
 */

// ===============================
// DOM Content Loaded
// ===============================
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===============================
// Main Initialization
// ===============================
function initializeWebsite() {
    // Initialize all components
    initSmoothScrolling();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initBackToTop();
    initPublicationFilters();
    initParticles();
    
    // Initial animations check
    animateOnScroll();
    
    // Window events
    window.addEventListener('scroll', throttle(handleScroll, 16));
    window.addEventListener('resize', debounce(handleResize, 250));
}

// ===============================
// Navbar Functionality
// ===============================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Update navbar on scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // Initial check
}

// ===============================
// Mobile Menu
// ===============================
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!navToggle || !mobileMenu) return;
    
    navToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Toggle icon
        const icon = navToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// ===============================
// Smooth Scrolling
// ===============================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===============================
// Scroll Animations
// ===============================
function initScrollAnimations() {
    // Add scroll-animation class to elements that should animate
    const animateElements = document.querySelectorAll(
        '.stat-card, .timeline-item, .research-card, .publication-item, .contact-item'
    );
    
    animateElements.forEach(el => {
        if (!el.classList.contains('scroll-animation')) {
            el.classList.add('scroll-animation');
        }
    });
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    const windowHeight = window.innerHeight;
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            // Add staggered delay for grouped elements
            setTimeout(() => {
                element.classList.add('animate');
            }, index * 50);
        }
    });
    
    // Animate stat numbers when visible
    animateStatNumbers();
}

// ===============================
// Stat Number Animation
// ===============================
let statsAnimated = false;

function animateStatNumbers() {
    if (statsAnimated) return;
    
    const statsSection = document.querySelector('.about-stats');
    if (!statsSection) return;
    
    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight - 100) {
        statsAnimated = true;
        
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target')) || parseInt(stat.textContent);
            const duration = 2000;
            const startTime = performance.now();
            
            function updateNumber(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(easeOutQuart * target);
                
                stat.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                } else {
                    stat.textContent = target;
                }
            }
            
            requestAnimationFrame(updateNumber);
        });
    }
}

// ===============================
// Back to Top Button
// ===============================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    // Show/hide button
    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    
    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===============================
// Publication Filters
// ===============================
function initPublicationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publications = document.querySelectorAll('.publication-item');
    
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            publications.forEach(pub => {
                const year = pub.getAttribute('data-year');
                const type = pub.getAttribute('data-type');
                
                if (filter === 'all' || year === filter || type === filter) {
                    pub.style.display = 'flex';
                    setTimeout(() => {
                        pub.style.opacity = '1';
                        pub.style.transform = 'translateX(0)';
                    }, 50);
                } else {
                    pub.style.opacity = '0';
                    pub.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        pub.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===============================
// Particles Background
// ===============================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
        border-radius: 50%;
        left: ${posX}%;
        top: ${posY}%;
        animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
}

// Add particle animation styles
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyles);

// ===============================
// Scroll Handler
// ===============================
function handleScroll() {
    animateOnScroll();
}

// ===============================
// Resize Handler
// ===============================
function handleResize() {
    // Recalculate animations if needed
    animateOnScroll();
}

// ===============================
// Utility Functions
// ===============================

/**
 * Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===============================
// Skill Bar Animation
// ===============================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Check if skill section is visible and animate
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
}

// ===============================
// Typing Effect (Optional)
// ===============================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===============================
// Image Lazy Loading
// ===============================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===============================
// Active Navigation Link
// ===============================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// ===============================
// Console Welcome Message
// ===============================
console.log('%c欢迎访问白浩的学术主页!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cWelcome to Hao Bai\'s Academic Homepage!', 'font-size: 14px; color: #764ba2;');
console.log('%cAI Security | Privacy Protection | Federated Learning', 'font-size: 12px; color: #666;');
