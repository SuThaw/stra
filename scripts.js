/* JavaScript from index.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to services on scroll
            const serviceCards = document.querySelectorAll('.service-card');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            serviceCards.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });
    

/* JavaScript from nexstrata-about-page.html */

        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add reveal animation on scroll
            const aboutContent = document.querySelector('.about-content');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            aboutContent.style.opacity = 0;
            aboutContent.style.transform = 'translateY(20px)';
            aboutContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(aboutContent);
        });
    

/* JavaScript from nexstrata-aws-page.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to competency items on scroll
            const competencyItems = document.querySelectorAll('.competency-item');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateX(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            competencyItems.forEach((item, index) => {
                item.style.opacity = 0;
                item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });
        });
    

/* JavaScript from nexstrata-contact-page.html */

        // Form validation and submission
        document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!firstName || !lastName || !email || !subject || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Email validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // Form submission simulation
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                
                // In a real application, you would send the form data to your server here
                // For example:
                // fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
                //         firstName,
                //         lastName,
                //         email,
                //         subject,
                //         message
                //     }),
                // })
                // .then(response => response.json())
                // .then(data => {
                //     alert('Thank you for your message! We will get back to you soon.');
                //     contactForm.reset();
                // })
                // .catch(error => {
                //     console.error('Error:', error);
                //     alert('There was an error submitting your form. Please try again.');
                // });
            });
        });
    

/* JavaScript from nexstrata-design-page.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to competency items on scroll
            const competencyItems = document.querySelectorAll('.competency-item');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateX(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            competencyItems.forEach((item, index) => {
                item.style.opacity = 0;
                item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });
        });
    

/* JavaScript from nexstrata-genai-page.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to competency items on scroll
            const competencyItems = document.querySelectorAll('.competency-item');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            competencyItems.forEach(item => {
                item.style.opacity = 0;
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });
        });
    

/* JavaScript from nexstrata-portfolio-page.html */

        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to project cards on scroll
            const projectCards = document.querySelectorAll('.project-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            projectCards.forEach((card, index) => {
                // Set initial styles
                card.style.opacity = 0;
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease ' + (index * 0.1) + 's, transform 0.6s ease ' + (index * 0.1) + 's';
                
                // Observe the card
                observer.observe(card);
            });
        });
    

/* JavaScript from nexstrata-privacy-page.html */

        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to policy sections on scroll
            const policySections = document.querySelectorAll('.policy-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            policySections.forEach((section, index) => {
                // Set initial styles
                section.style.opacity = 0;
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.5s ease ' + (index * 0.1) + 's, transform 0.5s ease ' + (index * 0.1) + 's';
                
                // Observe the section
                observer.observe(section);
            });
        });
    

/* JavaScript from nexstrata-prototype-page.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to competency items on scroll
            const competencyItems = document.querySelectorAll('.competency-item');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateX(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            competencyItems.forEach((item, index) => {
                item.style.opacity = 0;
                item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });
        });
    

/* JavaScript from nexstrata-tech-arch-page.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to competency items on scroll
            const competencyItems = document.querySelectorAll('.competency-item');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateX(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            competencyItems.forEach((item, index) => {
                item.style.opacity = 0;
                item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });
        });
    

/* JavaScript from nexstrata-web-mobile-page.html */

        // JavaScript for additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Add animation to competency items on scroll
            const competencyItems = document.querySelectorAll('.competency-item');
            
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateX(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            competencyItems.forEach((item, index) => {
                item.style.opacity = 0;
                item.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(item);
            });
        });
    

