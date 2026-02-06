// Cart functionality
let cart = [];

// Update cart count
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon && cart.length > 0) {
        cartIcon.textContent = `🛒 Cart (${cart.length})`;
    }
}

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    if (slides[index]) {
        slides[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function startSlideshow() {
    if (totalSlides > 0) {
        setInterval(nextSlide, 4000);
    }
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

    // Cart icon click functionality
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            if (cart.length > 0) {
                alert(`Your cart has ${cart.length} items:\n\n${cart.map(item => `${item.name}`).join('\n')}`);
            } else {
                alert('Your cart is empty!');
            }
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.value = '';
            });
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});
