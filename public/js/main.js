// Main JavaScript file for portfolio website

document.addEventListener(
'
DOMContentLoaded
'
, function() {
    // Add smooth scrolling for any anchor links
    const links = document.querySelectorAll(
'
a[href^="#"]
'
);
    links.forEach(link => {
        link.addEventListener(
'
click
'
, function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute(
'
href
'
));
            if (target) {
                target.scrollIntoView({
                    behavior: 
'
smooth
'

                });
            }
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll(
'
img
'
);
    images.forEach(img => {
        img.addEventListener(
'
load
'
, function() {
            this.style.opacity = 
'
1
'
;
        });
        
        // Set initial opacity
        img.style.opacity = 
'
0
'
;
        img.style.transition = 
'
opacity 0.3s ease
'
;
        
        // If image is already cached/loaded
        if (img.complete) {
            img.style.opacity = 
'
1
'
;
        }
    });

    // Add hover effect to social buttons
    const socialButtons = document.querySelectorAll(
'
.about-links a, .contact-social-btn
'
);
    socialButtons.forEach(button => {
        button.addEventListener(
'
mouseenter
'
, function() {
            this.style.transform = 
'
translateY(-2px)
'
;
        });
        
        button.addEventListener(
'
mouseleave
'
, function() {
            this.style.transform = 
'
translateY(0)
'
;
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: 
'
0px 0px -50px 0px
'

    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 
'
1
'
;
                entry.target.style.transform = 
'
translateY(0)
'
;
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
'
.featured-card, .about-description
'
);
    animatedElements.forEach(el => {
        el.style.opacity = 
'
0
'
;
        el.style.transform = 
'
translateY(20px)
'
;
        el.style.transition = 
'
opacity 0.6s ease, transform 0.6s ease
'
;
        observer.observe(el);
    });
});
