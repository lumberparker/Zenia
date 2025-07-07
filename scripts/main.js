// Website functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.header__hamburger');
    const headerElement = document.querySelector('.header');
    
    if (hamburger && headerElement) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hamburger.classList.toggle('active');
            headerElement.classList.toggle('mobile-menu-open');
            
            // Prevent body scrolling when menu is open
            if (headerElement.classList.contains('mobile-menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on nav links
        const mobileNavLinks = document.querySelectorAll('.header__mobile-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                headerElement.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside (optional - you might want to remove this)
        document.addEventListener('click', function(e) {
            if (!headerElement.contains(e.target)) {
                hamburger.classList.remove('active');
                headerElement.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reverse video playback functionality
    const heroVideo = document.querySelector('.hero__video');
    
    if (heroVideo) {
        let isPlayingForward = true;
        
        // Remove the loop attribute from HTML and control it with JavaScript
        heroVideo.removeAttribute('loop');
        
        heroVideo.addEventListener('ended', function() {
            if (isPlayingForward) {
                // Play in reverse
                isPlayingForward = false;
                playReverse(heroVideo);
            } else {
                // Play forward again
                isPlayingForward = true;
                heroVideo.currentTime = 0;
                heroVideo.play();
            }
        });
        
        // Function to play video in reverse
        function playReverse(video) {
            video.pause();
            
            const fps = 30; // Frames per second for smooth reverse playback
            const interval = 1000 / fps;
            
            const reverseInterval = setInterval(() => {
                if (video.currentTime <= 0) {
                    clearInterval(reverseInterval);
                    video.currentTime = 0;
                    // Trigger 'ended' event to start forward playback
                    video.dispatchEvent(new Event('ended'));
                } else {
                    video.currentTime -= interval / 1000;
                }
            }, interval);
        }
        
        // Ensure video starts playing
        heroVideo.play().catch(error => {
            console.log('Video autoplay prevented:', error);
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add blurred background when scrolled
        if (scrollTop > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        // Click to scroll to next section or smooth scroll down
        scrollIndicator.addEventListener('click', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            
            // Scroll down one viewport height
            window.scrollTo({
                top: scrollTop + windowHeight,
                behavior: 'smooth'
            });
        });
        
        // Hide scroll indicator only when at bottom of page (no more scrolling down)
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Check if we're at the bottom of the page (within 50px)
            if (scrollTop + windowHeight >= documentHeight - 50) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        });
    }

    // Note: Contact form is handled entirely by Netlify
    // No JavaScript interference needed

    // Add animation on scroll for all elements
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small delay for staggered animation
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }, observerOptions);

    // Elements to animate
    const elementsToAnimate = [
        // Section elements
        'section',
        // Headers and titles
        'h1, h2, h3, h4, h5, h6',
        // Paragraphs and text
        'p',
        // Cards and containers
        '.services__challenge',
        '.services__service-card',
        '.services__pillar',
        '.services__process-step',
        '.services__benefit',
        '.about__feature',
        '.contact__info-item',
        '.contact__form-group',
        '.footer__section',
        // Buttons and links
        '.hero__button',
        '.about__button',
        '.contact__form-button',
        // Media elements
        'img',
        'video',
        // Form elements
        '.contact__form',
        // Grid containers
        '.services__challenges-grid > *',
        '.services__offered-grid > *',
        '.services__pillars-grid > *',
        '.services__process-timeline > *',
        '.services__benefits-grid > *'
    ];

    // Apply initial styles and observe elements
    elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            // Skip if already processed
            if (element.dataset.animated) return;
            
            // Mark as processed
            element.dataset.animated = 'true';
            
            // Add staggered delay
            element.dataset.delay = index * 50;
            
            // Set initial state
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            
            // Observe for intersection
            observer.observe(element);
        });
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Theme color application
    document.documentElement.style.setProperty('--primary-color', '#2dc7bb');
    document.documentElement.style.setProperty('--secondary-color', '#1a9d95');
    document.documentElement.style.setProperty('--accent-color', '#F97316');
    document.documentElement.style.setProperty('--text-color', '#1F2937');
    document.documentElement.style.setProperty('--background-color', '#FFFFFF');
    document.documentElement.style.setProperty('--font-family', 'Inter');

    console.log('Website initialized successfully!');
});

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization for scroll events
window.addEventListener('scroll', throttle(function() {
    // Handle scroll-based animations here
}, 16)); // ~60fps

    // Pillar flip card functionality
    const pillars = document.querySelectorAll('.services__pillar--flip');
    
    pillars.forEach(pillar => {
        const button = pillar.querySelector('.services__pillar-button');
        
        if (button) {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                pillar.classList.toggle('flipped');
                
                // Check scroll indicators when card flips
                setTimeout(() => {
                    checkPillarScrollIndicators(pillar);
                }, 600); // After flip animation
            });
        }
        
        // Also allow clicking anywhere on the card to flip
        pillar.addEventListener('click', function() {
            pillar.classList.toggle('flipped');
            
            // Check scroll indicators when card flips
            setTimeout(() => {
                checkPillarScrollIndicators(pillar);
            }, 600); // After flip animation
        });
    });

    // Pillar scroll indicator functionality
    function checkPillarScrollIndicators(pillar) {
        const pillarBack = pillar.querySelector('.services__pillar-back');
        const scrollIndicator = pillar.querySelector('.services__pillar-scroll-indicator');
        
        if (!pillarBack || !scrollIndicator) {
            console.log('Missing elements:', { pillarBack: !!pillarBack, scrollIndicator: !!scrollIndicator });
            return;
        }
        
        // Wait a bit for the flip animation and content to settle
        setTimeout(() => {
            // Force a reflow to get accurate measurements
            pillarBack.offsetHeight;
            
            // Check if content is scrollable
            const isScrollable = pillarBack.scrollHeight > pillarBack.clientHeight + 5; // 5px tolerance
            
            console.log('Scroll check:', {
                scrollHeight: pillarBack.scrollHeight,
                clientHeight: pillarBack.clientHeight,
                isScrollable: isScrollable,
                isFlipped: pillar.classList.contains('flipped')
            });
            
            if (isScrollable && pillar.classList.contains('flipped')) {
                scrollIndicator.classList.add('visible');
                scrollIndicator.classList.remove('hidden');
                
                // Handle scroll events on the pillar back
                const handlePillarScroll = () => {
                    const scrollTop = pillarBack.scrollTop;
                    const scrollHeight = pillarBack.scrollHeight;
                    const clientHeight = pillarBack.clientHeight;
                    
                    // Hide indicator when at bottom (within 10px)
                    if (scrollTop + clientHeight >= scrollHeight - 10) {
                        scrollIndicator.classList.add('hidden');
                    } else {
                        scrollIndicator.classList.remove('hidden');
                    }
                };
                
                // Remove any existing listeners to avoid duplicates
                pillarBack.removeEventListener('scroll', handlePillarScroll);
                // Add scroll listener
                pillarBack.addEventListener('scroll', handlePillarScroll);
                
                // Initial check
                handlePillarScroll();
                
                // Handle click on scroll indicator
                const handleIndicatorClick = (e) => {
                    e.stopPropagation();
                    pillarBack.scrollBy({
                        top: 100,
                        behavior: 'smooth'
                    });
                };
                
                // Remove any existing click listeners
                scrollIndicator.removeEventListener('click', handleIndicatorClick);
                scrollIndicator.addEventListener('click', handleIndicatorClick);
            } else {
                scrollIndicator.classList.remove('visible');
                scrollIndicator.classList.remove('hidden');
            }
        }, 100); // Small delay to ensure content is rendered
    }

    // Check all pillar scroll indicators on page load and when content changes
    function checkAllPillarScrollIndicators() {
        pillars.forEach(pillar => {
            checkPillarScrollIndicators(pillar);
        });
    }

    // Initial check on page load
    setTimeout(checkAllPillarScrollIndicators, 1000);
    
    // Check again when window resizes
    window.addEventListener('resize', () => {
        setTimeout(checkAllPillarScrollIndicators, 100);
    });