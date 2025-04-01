// JavaScript for Yash Lukhi's Professional Profile Website

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Language selection
    const enBtn = document.getElementById('en-btn');
    const deBtn = document.getElementById('de-btn');
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    
    // Language selection functionality
    if (enBtn && deBtn) {
        enBtn.addEventListener('click', function() {
            setLanguage('en');
        });
        
        deBtn.addEventListener('click', function() {
            setLanguage('de');
        });
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            // Simple validation
            if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(emailInput.value)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize animations
    initAnimations();
});

// Language translation function
function setLanguage(lang) {
    const enBtn = document.getElementById('en-btn');
    const deBtn = document.getElementById('de-btn');
    
    if (lang === 'en') {
        enBtn.classList.add('active');
        deBtn.classList.remove('active');
        translateToEnglish();
    } else if (lang === 'de') {
        deBtn.classList.add('active');
        enBtn.classList.remove('active');
        translateToGerman();
    }
}

// English translations (default)
function translateToEnglish() {
    const translations = {
        // Navigation
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-skills': 'Skills',
        'nav-certifications': 'Certifications',
        'nav-contact': 'Contact',
        
        // Section titles
        'about-title': 'About Me',
        'experience-title': 'Professional Experience',
        'education-title': 'Education',
        'skills-title': 'Skills',
        'certifications-title': 'Certifications',
        'contact-title': 'Contact Me',
        
        // Contact form
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-submit': 'Send Message',
        
        // Footer
        'footer-copyright': '© 2025 Yashkumar Lukhi. All Rights Reserved.'
    };
    
    updatePageText(translations);
}

// German translations
function translateToGerman() {
    const translations = {
        // Navigation
        'nav-about': 'Über mich',
        'nav-experience': 'Berufserfahrung',
        'nav-education': 'Ausbildung',
        'nav-skills': 'Fähigkeiten',
        'nav-certifications': 'Zertifizierungen',
        'nav-contact': 'Kontakt',
        
        // Section titles
        'about-title': 'Über mich',
        'experience-title': 'Berufserfahrung',
        'education-title': 'Ausbildung',
        'skills-title': 'Fähigkeiten',
        'certifications-title': 'Zertifizierungen',
        'contact-title': 'Kontaktieren Sie mich',
        
        // Contact form
        'contact-name': 'Name',
        'contact-email': 'E-Mail',
        'contact-subject': 'Betreff',
        'contact-message': 'Nachricht',
        'contact-submit': 'Nachricht senden',
        
        // Footer
        'footer-copyright': '© 2025 Yashkumar Lukhi. Alle Rechte vorbehalten.'
    };
    
    updatePageText(translations);
}

// Helper function to update page text based on selected language
function updatePageText(translations) {
    // Update navigation links
    document.querySelectorAll('nav ul li a').forEach((link, index) => {
        const keys = ['nav-about', 'nav-experience', 'nav-education', 'nav-skills', 'nav-certifications', 'nav-contact'];
        if (index < keys.length) {
            link.textContent = translations[keys[index]];
        }
    });
    
    // Update section titles
    document.querySelector('#about .section-title').textContent = translations['about-title'];
    document.querySelector('#experience .section-title').textContent = translations['experience-title'];
    document.querySelector('#education .section-title').textContent = translations['education-title'];
    document.querySelector('#skills .section-title').textContent = translations['skills-title'];
    document.querySelector('#certifications .section-title').textContent = translations['certifications-title'];
    document.querySelector('#contact .section-title').textContent = translations['contact-title'];
    
    // Update contact form
    document.querySelector('label[for="name"]').textContent = translations['contact-name'];
    document.querySelector('label[for="email"]').textContent = translations['contact-email'];
    document.querySelector('label[for="subject"]').textContent = translations['contact-subject'];
    document.querySelector('label[for="message"]').textContent = translations['contact-message'];
    document.querySelector('.submit-btn').textContent = translations['contact-submit'];
    
    // Update footer
    document.querySelector('.footer-content p').textContent = translations['footer-copyright'];
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Check if notification container exists, create if not
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Add styles for notification container
        notificationContainer.style.position = 'fixed';
        notificationContainer.style.top = '20px';
        notificationContainer.style.right = '20px';
        notificationContainer.style.zIndex = '1000';
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.backgroundColor = type === 'success' ? '#4CAF50' : '#F44336';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.marginBottom = '10px';
    notification.style.borderRadius = '4px';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notification.style.transition = 'all 0.3s ease';
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Animations
function initAnimations() {
    // Add fade-in animation to sections when they come into view
    const sections = document.querySelectorAll('.section');
    
    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Apply initial styles and observe each section
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.2}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 200));
    });
    
    // Add animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        tag.style.transitionDelay = `${index * 0.05}s`;
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, 1000 + (index * 50));
    });
}
