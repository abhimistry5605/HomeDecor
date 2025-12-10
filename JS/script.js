// Screen management
let currentScreen = 'splash';
const screens = ['splash', 'auth', 'home', 'products', 'product-detail', 'ar-room', 'diy', 'cart', 'checkout', 'profile', 'notifications', 'chat', 'blog'];

function showScreen(screenId) {
    // Hide all screens
    screens.forEach(screen => {
        document.getElementById(screen).classList.remove('active');
    });

    // Show the selected screen
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;

    // Update bottom navigation if applicable
    updateBottomNav();
}

function updateBottomNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.screen === currentScreen) {
            item.classList.add('active');
        }
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Show splash screen initially
    showScreen('splash');

    // Auto-transition from splash to auth after 3 seconds
    setTimeout(() => {
        showScreen('auth');
    }, 3000);

    // Auth buttons
    document.getElementById('login-btn').addEventListener('click', () => showScreen('home'));
    document.getElementById('signup-btn').addEventListener('click', () => showScreen('home'));
    document.getElementById('social-login').addEventListener('click', () => showScreen('home'));
    document.getElementById('guest-access').addEventListener('click', () => showScreen('home'));

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const targetScreen = this.dataset.screen;
            showScreen(targetScreen);
        });
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => showScreen('home'));
    });

    // Category clicks
    document.querySelectorAll('.category').forEach(cat => {
        cat.addEventListener('click', () => showScreen('products'));
    });

    // Product cards (simulated)
    // In a real app, these would be dynamically generated
    document.addEventListener('click', function(e) {
        if (e.target.closest('.product-card')) {
            showScreen('product-detail');
        }
    });

    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            showScreen('cart');
        });
    });

    // Checkout
    document.querySelectorAll('.checkout-btn').forEach(btn => {
        btn.addEventListener('click', () => showScreen('checkout'));
    });

    // Profile menu items
    document.querySelectorAll('.profile-menu div').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.toLowerCase().replace(' ', '-');
            if (text === 'wishlist') showScreen('products');
            else if (text === 'order-history') showScreen('cart');
            else if (text === 'settings') showScreen('profile');
            else if (text === 'logout') showScreen('auth');
        });
    });

    // AR Room buttons
    document.querySelectorAll('.ar-view button').forEach(btn => {
        btn.addEventListener('click', function() {
            // In a real app, this would interact with AR functionality
            alert('AR feature would be implemented here');
        });
    });

    // Simulate some content
    populateSampleContent();
});

function populateSampleContent() {
    // Add sample product cards
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        for (let i = 1; i <= 10; i++) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="https://via.placeholder.com/150x120?text=Product+${i}" alt="Product ${i}">
                <div class="info">
                    <h3>Decor Item ${i}</h3>
                    <p class="price">$${(Math.random() * 100 + 20).toFixed(2)}</p>
                </div>
            `;
            productGrid.appendChild(card);
        }
    }

    // Add sample cart items
    const cartItems = document.querySelector('.cart-items');
    if (cartItems) {
        for (let i = 1; i <= 3; i++) {
            const item = document.createElement('div');
            item.className = 'cart-item';
            item.innerHTML = `
                <img src="https://via.placeholder.com/80x80?text=Item+${i}" alt="Item ${i}">
                <div class="info">
                    <h3>Cart Item ${i}</h3>
                    <p>Quantity: 1</p>
                    <p>$${(Math.random() * 50 + 10).toFixed(2)}</p>
                </div>
            `;
            cartItems.appendChild(item);
        }
    }

    // Add sample notifications
    const notificationList = document.querySelector('.notification-list');
    if (notificationList) {
        const notifications = [
            '50% off on all furniture!',
            'New arrivals in lighting',
            'Your order has been shipped',
            'Exclusive deal for members'
        ];
        notifications.forEach(note => {
            const div = document.createElement('div');
            div.textContent = note;
            div.style.padding = '1rem';
            div.style.backgroundColor = '#fff';
            div.style.marginBottom = '0.5rem';
            div.style.borderRadius = '10px';
            div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            notificationList.appendChild(div);
        });
    }

    // Add sample articles
    const articleList = document.querySelector('.article-list');
    if (articleList) {
        const articles = [
            '10 Tips for Modern Home Decor',
            'Choosing the Right Wall Art',
            'Sustainable Decor Trends',
            'DIY Furniture Makeover Ideas'
        ];
        articles.forEach(article => {
            const div = document.createElement('div');
            div.textContent = article;
            div.style.padding = '1rem';
            div.style.backgroundColor = '#fff';
            div.style.marginBottom = '0.5rem';
            div.style.borderRadius = '10px';
            div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            div.style.cursor = 'pointer';
            articleList.appendChild(div);
        });
    }
}
