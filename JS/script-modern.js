// Smooth scroll helper
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cart functionality
let cart = [];

// Add to Cart functionality
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        cart.push({
            name: productName,
            price: productPrice
        });
        
        // Show feedback
        const originalText = this.textContent;
        this.textContent = '✓ Added!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.backgroundColor = '';
        }, 2000);
        
        updateCartCount();
    });
});

// Update cart count
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cart.length > 0) {
        cartIcon.textContent = `🛒 Cart (${cart.length})`;
    }
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input, textarea');
        const formData = {};
        
        inputs.forEach(input => {
            formData[input.placeholder] = input.value;
        });
        
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ravi Trading Store loaded successfully!');
    updateCartCount();

    // Initialize slideshow
    if (slides.length > 0) {
        showSlide(0);
        startSlideshow();
    }

    // Navbar smooth scroll functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Cart icon click functionality
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            if (cart.length > 0) {
                alert(`Your cart has ${cart.length} items:\n\n${cart.map(item => `${item.name} - ${item.price}`).join('\n')}`);
            } else {
                alert('Your cart is empty!');
            }
        });
    }
});
