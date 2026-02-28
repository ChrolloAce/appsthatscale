// Main JavaScript functionality for B2C Mastery page

class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.setupScrollListener();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupNavbarTransparency();
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }

    setupMobileMenu() {
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }

    setupSmoothScrolling() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupNavbarTransparency() {
        // Add transparency effect based on scroll position
        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            const opacity = Math.min(0.95, 0.1 + scrollPercent * 0.85);
            
            if (window.scrollY > 100) {
                this.navbar.style.background = `rgba(255, 255, 255, ${opacity})`;
            } else {
                this.navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    }
}

class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupFloatingShapes();
        this.setupCounterAnimations();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.module-card, .timeline-item, .testimonial-card, .pricing-card');
        animateElements.forEach(el => observer.observe(el));
    }

    setupFloatingShapes() {
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            // Add random movement to shapes
            setInterval(() => {
                const randomX = Math.random() * 20 - 10;
                const randomY = Math.random() * 20 - 10;
                shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
            }, 3000 + index * 1000);
        });
    }

    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (counter.textContent.includes('K')) {
                    counter.textContent = Math.floor(current / 1000) + 'K+';
                } else if (counter.textContent.includes('M')) {
                    counter.textContent = '$' + (current / 1000000).toFixed(1) + 'M+';
                } else if (counter.textContent.includes('%')) {
                    counter.textContent = Math.floor(current) + '%';
                }
            }, 16);
        };

        // Trigger counter animation when stats come into view
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => statsObserver.observe(counter));
    }
}

class InteractionManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonInteractions();
        this.setupCardHoverEffects();
        this.setupFormValidation();
    }

    setupButtonInteractions() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Add ripple effect
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    setupCardHoverEffects() {
        const cards = document.querySelectorAll('.module-card, .testimonial-card, .pricing-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    setupFormValidation() {
        // Add form validation for any future forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add form submission logic here
                console.log('Form submitted');
            });
        });
    }
}

class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.optimizeImages();
        this.setupPreloading();
    }

    setupLazyLoading() {
        // Lazy load images if any are added
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    optimizeImages() {
        // Optimize images for different screen sizes
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    }

    setupPreloading() {
        // Preload critical resources
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
}

// Utility functions
class Utils {
    static debounce(func, wait) {
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

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static smoothScrollTo(element, duration = 1000) {
        const targetPosition = element.offsetTop - 70;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = this.ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        this.ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    const navigationManager = new NavigationManager();
    const animationManager = new AnimationManager();
    const interactionManager = new InteractionManager();
    const performanceManager = new PerformanceManager();

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        .lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }

        .loaded {
            opacity: 1;
        }

        .module-card, .timeline-item, .testimonial-card, .pricing-card {
            opacity: 0;
            transform: translateY(30px);
        }

        .module-card.animate-in, .timeline-item.animate-in, 
        .testimonial-card.animate-in, .pricing-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Add scroll-based parallax effect to hero section
    window.addEventListener('scroll', Utils.throttle(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }, 16));

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Console welcome message
    console.log(`
    🚀 B2C Mastery - From 0 to $10K+
    
    Welcome to the future of B2C app development!
    
    Features:
    ✅ Liquid Glass Navbar
    ✅ Smooth Animations
    ✅ Mobile Responsive
    ✅ Performance Optimized
    
    Ready to build your empire? 🏆
    `);
});

// Export classes for potential future use
window.B2CMastery = {
    NavigationManager,
    AnimationManager,
    InteractionManager,
    PerformanceManager,
    Utils
}; 