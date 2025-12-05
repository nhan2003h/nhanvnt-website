/**
 * Personal Portfolio Website - JavaScript
 * ========================================
 * 
 * This file contains minimal JavaScript for:
 * 1. Mobile navigation toggle
 * 2. Smooth scroll behavior (backup for browsers without CSS support)
 * 3. Dynamic year update in footer
 * 4. Navbar scroll effect
 * 
 * Note: Most functionality is achieved with pure CSS.
 * This JavaScript file is optional but enhances the user experience.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. Mobile Navigation Toggle
    // ============================================
    
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu when hamburger button is clicked
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // ============================================
    // 2. Smooth Scroll for Navigation Links
    // ============================================
    // Note: Modern browsers support CSS scroll-behavior: smooth,
    // but this provides a fallback for older browsers.
    
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // 3. Dynamic Year Update in Footer
    // ============================================
    // Automatically updates the copyright year
    
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // ============================================
    // 4. Navbar Scroll Effect
    // ============================================
    // Adds a shadow to the navbar when scrolling
    
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // ============================================
    // 5. Intersection Observer for Animations (Optional)
    // ============================================
    // Uncomment this section to add fade-in animations
    // when sections come into view
    
    /*
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    */
    
});

// ============================================
// Additional Utility Functions
// ============================================

/**
 * Debounce function to limit how often a function is called
 * Useful for scroll and resize events
 * 
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
