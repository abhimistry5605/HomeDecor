// Product data for different items
const productData = {
    sofa: {
        name: "Luxury Sofa",
        basePrice: 25000,
        images: [
            "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/47a0336c-21f2-47be-b569-8147d6f5280b/188a9f5ce96641bab4f0abb35cf78c7cr-jpg-960x960.webp",
            "https://m.media-amazon.com/images/I/71eR5BTXrsL._AC_UF1000,1000_QL80_.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494125570/KT/NL/SV/47263243/polyester-curtain-fabric-500x500.jpg"
        ],
        materials: [
            { name: "Italian Wool Blend", img: "images/fabric-texture.jpg", price: 4000 },
            { name: "Aged Full-Grain Leather", img: "images/leather-texture.jpg", price: 6000 },
            { name: "Sustainable Belgian Linen", img: "images/linen-texture.jpg", price: 3000 },
            { name: "Performance Velvet", img: "images/velvet-texture.jpg", price: 3500 },
            { name: "Italian Silk-Blend Velvet", img: "images/fabric-texture.jpg", price: 5000 },
            { name: "Belgian Textured Linen", img: "images/linen-texture.jpg", price: 3500 },
            { name: "Full-Grain Aniline Leather", img: "images/leather-texture.jpg", price: 7000 },
            { name: "Heirloom Basketweave Chenille", img: "images/fabric-texture.jpg", price: 4500 },
            { name: "Cashmere-Wool Blend Tweed", img: "images/fabric-texture.jpg", price: 5500 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 150, max: 300, default: 200 }, width: { min: 80, max: 150, default: 90 } },
        finishes: [
            { name: "Brass Hardware", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 1500 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    curtains: {
        name: "Elegant Curtains",
        basePrice: 8000,
        images: [
            "https://m.media-amazon.com/images/I/71eR5BTXrsL._AC_UF1000,1000_QL80_.jpg",
            "https://5.imimg.com/data5/SELLER/Default/2025/3/494125570/KT/NL/SV/47263243/polyester-curtain-fabric-500x500.jpg",
            "https://images-eu.ssl-images-amazon.com/images/I/81xICELnQWL._AC_UL600_SR600,600_.jpg"
        ],
        materials: [
            { name: "Italian Wool Blend", img: "https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg", price: 2000 },
            { name: "Aged Full-Grain Leather", img: "https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg", price: 4000 },
            { name: "Sustainable Belgian Linen", img: "https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg", price: 1500 },
            { name: "Performance Velvet", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg", price: 2500 },
            { name: "Italian Silk-Blend Velvet", img: "images/fabric-texture.jpg", price: 3000 },
            { name: "Belgian Textured Linen", img: "images/linen-texture.jpg", price: 2000 },
            { name: "Full-Grain Aniline Leather", img: "images/leather-texture.jpg", price: 3500 },
            { name: "Heirloom Basketweave Chenille", img: "images/fabric-texture.jpg", price: 2500 },
            { name: "Cashmere-Wool Blend Tweed", img: "images/fabric-texture.jpg", price: 3000 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 200, max: 400, default: 250 }, width: { min: 100, max: 200, default: 150 } },
        finishes: [
            { name: "Standard Hem", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Premium Hem", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 500 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    bed: {
        name: "Modern Bed Frame",
        basePrice: 35000,
        images: [
            "https://m.media-amazon.com/images/I/61zSkdeTTEL._AC_UF894,1000_QL80_.jpg",
            "https://down-my.img.susercontent.com/file/my-11134207-820le-meatp7tuxiwze2",
            "https://originmattress.co.uk/wp-content/uploads/2024/10/UK-Timber-Bed-Frame-Dimensions.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRQwCDKnKQeWhpvsz6qLNEs378SDmNnJRfA&s"
        ],
        Frame materials: [
            { name: "The Lumina Bed (Upholstery)", img: "https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg", price: 4000 },
            { name: "The Axis Platform (Wood)", img: "https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg", price: 6000 },
            { name: "The Zephyr Canopy (Metal)", img: "https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg", price: 3000 },
            { name: "The Meridian Frame (Mixed Material", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg", price: 3500 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 180, max: 220, default: 200 }, width: { min: 120, max: 180, default: 150 } },
        finishes: [
            { name: "Natural Wood", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Painted Finish", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 2000 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    cushions: {
        name: "Comfort Cushions",
        basePrice: 3000,
        images: ["https://m.media-amazon.com/images/I/61yoLUPSwgL.jpg"],
        materials: [
            { name: "Italian Wool Blend", img: "https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg", price: 500 },
            { name: "Aged Full-Grain Leather", img: "https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg", price: 1500 },
            { name: "Sustainable Belgian Linen", img: "https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg", price: 300 },
            { name: "Performance Velvet", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg", price: 800 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 40, max: 60, default: 50 }, width: { min: 40, max: 60, default: 50 } },
        finishes: [
            { name: "Standard", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Embroidered", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 300 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    wallpaper: {
        name: "Designer Wallpaper",
        basePrice: 5000,
        images: ["https://cdn.magicdecor.in/com/2023/11/25165822/Off-White-Stencil-Designs-Wallpaper-Roll-710x488.jpg"],
        materials: [
            { name: "Italian Wool Blend", img: "https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg", price: 2000 },
            { name: "Aged Full-Grain Leather", img: "https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg", price: 4000 },
            { name: "Sustainable Belgian Linen", img: "https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg", price: 1500 },
            { name: "Performance Velvet", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg", price: 2500 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 500, max: 1000, default: 700 }, width: { min: 50, max: 100, default: 70 } },
        finishes: [
            { name: "Standard", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Washable", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 500 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    lighting: {
        name: "Ambient Lighting",
        basePrice: 12000,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TOMbmRI4tNkBdIeVtiiU3u5_F0b1Xcma3Q&s"],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 30, max: 100, default: 60 }, width: { min: 20, max: 50, default: 30 } },
        finishes: [
            { name: "Polished", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Antique", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 1000 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    "side-table": {
        name: "Elegant Side Table",
        basePrice: 15000,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPBy9oWt1bOcTVF2Artt2edHDMyu0bGs-Sg&s"],
        materials: [
            { name: "Italian Wool Blend", img: "https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg", price: 3000 },
            { name: "Aged Full-Grain Leather", img: "https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg", price: 5000 },
            { name: "Sustainable Belgian Linen", img: "https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg", price: 2000 },
            { name: "Performance Velvet", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg", price: 3500 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 40, max: 80, default: 60 }, width: { min: 40, max: 80, default: 60 } },
        finishes: [
            { name: "Natural", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Polished", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 500 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    },
    "accent-chair": {
        name: "Accent Chair",
        basePrice: 22000,
        images: ["https://media-wallmantra.com/product/other/wallmantra-vibrant-orange-fabric-slipper-accent-chair-single-1EE6-large.webp"],
        materials: [
            { name: "Italian Wool Blend", img: "https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg", price: 3000 },
            { name: "Aged Full-Grain Leather", img: "https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg", price: 5000 },
            { name: "Sustainable Belgian Linen", img: "https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg", price: 2000 },
            { name: "Performance Velvet", img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg", price: 3500 }
        ],
        colors: [
            { hex: "#D4AF37", name: "Deep Obsidian" },
            { hex: "#1E3F66", name: "Midnight Navy" },
            { hex: "#FFFFFF", name: "Ivory Linen" },
            { hex: "#8B4513", name: "Terra Cotta" },
            { hex: "#006466", name: "Emerald Green" },
            { hex: "#FF0000", name: "Crimson Red" },
            { hex: "#00FF00", name: "Lime Green" },
            { hex: "#0000FF", name: "Royal Blue" },
            { hex: "#FFFF00", name: "Sunny Yellow" }
        ],
        dimensions: { length: { min: 70, max: 100, default: 80 }, width: { min: 60, max: 90, default: 70 } },
        finishes: [
            { name: "Wood Frame", img: "https://www.shutterstock.com/image-vector/mastery-icon-logo-isolated-vector-260nw-2637829677.jpg", price: 0 },
            { name: "Metal Frame", img: "https://c8.alamy.com/comp/2G6JBNM/repair-furniture-color-line-icon-handyman-service-isolated-vector-element-outline-pictogram-for-web-page-mobile-app-promo-2G6JBNM.jpg", price: 1500 }
        ],

        hardware: [
            { name: "Brass Hardware", img: "https://image.shutterstock.com/image-photo/brass-hardware-furniture-closeup-studio-260nw-2156789689.jpg", price: 1000 },
            { name: "Chrome Hardware", img: "https://image.shutterstock.com/image-photo/chrome-hardware-furniture-closeup-studio-260nw-2156789691.jpg", price: 1500 }
        ]
    }
};

// Get URL parameter
function getProductParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('product') || 'sofa'; // Default to sofa if no param
}

// Load product data
function loadProduct(productKey) {
    const product = productData[productKey];
    if (!product) return;

    // Update product name
    document.getElementById('productName').textContent = product.name;

    // Update product image or slideshow
    const visualizer = document.getElementById('product-visualizer');
    const slideshowContainer = document.querySelector('.product-visualizer');

    // Remove existing slideshow controls if any
    const existingControls = slideshowContainer.querySelector('.slideshow-controls');
    if (existingControls) existingControls.remove();

    if (product.images && Array.isArray(product.images)) {
        // Setup slideshow
        console.log('Setting up slideshow for product:', product.name, 'with images:', product.images);
        visualizer.src = product.images[0];
        visualizer.dataset.currentIndex = 0;
        visualizer.dataset.images = JSON.stringify(product.images);

        // Add zoom for specific products
        if (productKey === 'accent-chair') {
            visualizer.style.transform = 'scale(1.5)';
            visualizer.style.transformOrigin = 'center';
        } else {
            visualizer.style.transform = 'scale(1)';
        }

        // Add slideshow controls
        const controls = document.createElement('div');
        controls.className = 'slideshow-controls';
        controls.innerHTML = `
            <button class="slideshow-btn prev-btn" onclick="changeSlide(-1)">❮</button>
            <button class="slideshow-btn next-btn" onclick="changeSlide(1)">❯</button>
        `;
        slideshowContainer.appendChild(controls);
        console.log('Slideshow controls added');
    } else {
        // Single image
        visualizer.src = product.image || 'https://dukaan.b-cdn.net/700x700/webp/upload_file_service/47a0336c-21f2-47be-b569-8147d6f5280b/188a9f5ce96641bab4f0abb35cf78c7cr-jpg-960x960.webp';

        // Add zoom for specific products
        if (productKey === 'accent-chair') {
            visualizer.style.transform = 'scale(1.5)';
            visualizer.style.transformOrigin = 'center';
        } else {
            visualizer.style.transform = 'scale(1)';
        }
    }

    // Update base price
    document.getElementById('basePrice').textContent = `₹${product.basePrice.toLocaleString()}`;

    // Update materials
    const materialOptions = document.querySelector('.material-options');
    materialOptions.innerHTML = '';
    product.materials.forEach(material => {
        const option = document.createElement('div');
        option.className = 'material-option';
        option.setAttribute('data-material', material.name.toLowerCase().replace(' ', '-'));
        option.innerHTML = `
            <img src="${material.img}" alt="${material.name}" style="width: 100px; height: 100px;">
            <span>${material.name}</span>
        `;
        materialOptions.appendChild(option);
    });

    // Update colors
    const colorOptions = document.querySelector('.color-options');
    colorOptions.innerHTML = '';
    product.colors.forEach(color => {
        const container = document.createElement('div');
        container.className = 'color-container';
        const option = document.createElement('div');
        option.className = 'color-option';
        option.setAttribute('data-color', color.hex);
        option.style.backgroundColor = color.hex;
        if (color.hex === '#FFFFFF') option.style.border = '1px solid #ddd';
        container.appendChild(option);
        const nameSpan = document.createElement('span');
        nameSpan.className = 'color-name';
        nameSpan.textContent = color.name;
        container.appendChild(nameSpan);
        colorOptions.appendChild(container);
    });

    // Update dimensions
    const lengthSlider = document.getElementById('lengthSlider');
    const widthSlider = document.getElementById('widthSlider');
    lengthSlider.min = product.dimensions.length.min;
    lengthSlider.max = product.dimensions.length.max;
    lengthSlider.value = product.dimensions.length.default;
    document.getElementById('lengthValue').textContent = `${product.dimensions.length.default} cm`;

    widthSlider.min = product.dimensions.width.min;
    widthSlider.max = product.dimensions.width.max;
    widthSlider.value = product.dimensions.width.default;
    document.getElementById('widthValue').textContent = `${product.dimensions.width.default} cm`;

    // Update finishes
    const finishingOptions = document.querySelector('.finishing-options');
    finishingOptions.innerHTML = '';
    product.finishes.forEach(finish => {
        const option = document.createElement('div');
        option.className = 'finishing-option';
        option.setAttribute('data-finish', finish.name.toLowerCase().replace(' ', '-'));
        option.innerHTML = `
            <img src="${finish.img}" alt="${finish.name}">
            <span>${finish.name}</span>
        `;
        finishingOptions.appendChild(option);
    });

    // Update patterns
    const patternOptions = document.querySelector('.pattern-options');
    patternOptions.innerHTML = '';
    if (product.patterns) {
        product.patterns.forEach(pattern => {
            const option = document.createElement('div');
            option.className = 'pattern-option';
            option.setAttribute('data-pattern', pattern.name.toLowerCase().replace(' ', '-'));
            option.innerHTML = `
                <img src="${pattern.img}" alt="${pattern.name}">
                <span>${pattern.name}</span>
            `;
            patternOptions.appendChild(option);
        });
    }

    // Update stitching
    const stitchingOptions = document.querySelector('.stitching-options');
    stitchingOptions.innerHTML = '';
    if (product.stitching) {
        product.stitching.forEach(stitch => {
            const option = document.createElement('div');
            option.className = 'stitching-option';
            option.setAttribute('data-stitch', stitch.name.toLowerCase().replace(' ', '-'));
            option.innerHTML = `
                <img src="${stitch.img}" alt="${stitch.name}">
                <span>${stitch.name}</span>
            `;
            stitchingOptions.appendChild(option);
        });
    }

    // Update hardware
    const hardwareOptions = document.querySelector('.hardware-options');
    hardwareOptions.innerHTML = '';
    if (product.hardware) {
        product.hardware.forEach(hw => {
            const option = document.createElement('div');
            option.className = 'hardware-option';
            option.setAttribute('data-hardware', hw.name.toLowerCase().replace(' ', '-'));
            option.innerHTML = `
                <img src="${hw.img}" alt="${hw.name}">
                <span>${hw.name}</span>
            `;
            hardwareOptions.appendChild(option);
        });
    }

    // Reset prices
    updatePrice();
}

// Update price calculation
function updatePrice() {
    const productKey = getProductParam();
    const product = productData[productKey];
    let total = product.basePrice;

    // Add material price (assuming first selected or default)
    const selectedMaterial = document.querySelector('.material-option.selected');
    if (selectedMaterial) {
        const materialName = selectedMaterial.getAttribute('data-material').replace('-', ' ');
        const material = product.materials.find(m => m.name.toLowerCase() === materialName);
        if (material) total += material.price;
    }

    // Add dimension price (simple calculation)
    const length = parseInt(document.getElementById('lengthSlider').value);
    const width = parseInt(document.getElementById('widthSlider').value);
    const defaultLength = product.dimensions.length.default;
    const defaultWidth = product.dimensions.width.default;
    const dimensionCost = Math.abs(length - defaultLength) * 50 + Math.abs(width - defaultWidth) * 50;
    total += dimensionCost;

    // Add finish price
    const selectedFinish = document.querySelector('.finishing-option.selected');
    if (selectedFinish) {
        const finishName = selectedFinish.getAttribute('data-finish').replace('-', ' ');
        const finish = product.finishes.find(f => f.name.toLowerCase() === finishName);
        if (finish) total += finish.price;
    }

    // Add pattern price
    const selectedPattern = document.querySelector('.pattern-option.selected');
    if (selectedPattern) {
        const patternName = selectedPattern.getAttribute('data-pattern').replace('-', ' ');
        const pattern = product.patterns.find(p => p.name.toLowerCase() === patternName);
        if (pattern) total += pattern.price;
    }

    // Add stitching price
    const selectedStitch = document.querySelector('.stitching-option.selected');
    if (selectedStitch) {
        const stitchName = selectedStitch.getAttribute('data-stitch').replace('-', ' ');
        const stitch = product.stitching.find(s => s.name.toLowerCase() === stitchName);
        if (stitch) total += stitch.price;
    }

    // Add hardware price
    const selectedHardware = document.querySelector('.hardware-option.selected');
    if (selectedHardware) {
        const hardwareName = selectedHardware.getAttribute('data-hardware').replace('-', ' ');
        const hardware = product.hardware.find(h => h.name.toLowerCase() === hardwareName);
        if (hardware) total += hardware.price;
    }

    document.getElementById('materialPrice').textContent = selectedMaterial ? `₹${(product.materials.find(m => m.name.toLowerCase() === selectedMaterial.getAttribute('data-material').replace('-', ' '))?.price || 0).toLocaleString()}` : '₹0';
    document.getElementById('dimensionPrice').textContent = `₹${dimensionCost.toLocaleString()}`;
    document.getElementById('patternPrice').textContent = selectedPattern ? `₹${(product.patterns.find(p => p.name.toLowerCase() === selectedPattern.getAttribute('data-pattern').replace('-', ' '))?.price || 0).toLocaleString()}` : '₹0';
    document.getElementById('stitchingPrice').textContent = selectedStitch ? `₹${(product.stitching.find(s => s.name.toLowerCase() === selectedStitch.getAttribute('data-stitch').replace('-', ' '))?.price || 0).toLocaleString()}` : '₹0';
    document.getElementById('hardwarePrice').textContent = selectedHardware ? `₹${(product.hardware.find(h => h.name.toLowerCase() === selectedHardware.getAttribute('data-hardware').replace('-', ' '))?.price || 0).toLocaleString()}` : '₹0';
    document.getElementById('totalPrice').textContent = `₹${total.toLocaleString()}`;
}

// Slideshow functionality
function changeSlide(direction) {
    const visualizer = document.getElementById('product-visualizer');
    const images = JSON.parse(visualizer.dataset.images || '[]');
    if (images.length === 0) return;

    let currentIndex = parseInt(visualizer.dataset.currentIndex || 0);
    currentIndex = (currentIndex + direction + images.length) % images.length;
    visualizer.src = images[currentIndex];
    visualizer.dataset.currentIndex = currentIndex;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const productKey = getProductParam();
    loadProduct(productKey);

    // Material selection
    document.querySelector('.material-options').addEventListener('click', (e) => {
        if (e.target.closest('.material-option')) {
            document.querySelectorAll('.material-option').forEach(opt => {
                opt.classList.remove('selected');
                opt.style.border = 'none';
            });
            e.target.closest('.material-option').classList.add('selected');
            e.target.closest('.material-option').style.border = '1px solid #1E3F66';
            updatePrice();
        }
    });

    // Color selection
    document.querySelector('.color-options').addEventListener('click', (e) => {
        if (e.target.closest('.color-option')) {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.color-option').classList.add('selected');
        }
    });

    // Dimension sliders
    document.getElementById('lengthSlider').addEventListener('input', (e) => {
        document.getElementById('lengthValue').textContent = `${e.target.value} cm`;
        updatePrice();
    });

    document.getElementById('widthSlider').addEventListener('input', (e) => {
        document.getElementById('widthValue').textContent = `${e.target.value} cm`;
        updatePrice();
    });

    // Finishing selection
    document.querySelector('.finishing-options').addEventListener('click', (e) => {
        if (e.target.closest('.finishing-option')) {
            document.querySelectorAll('.finishing-option').forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.finishing-option').classList.add('selected');
            updatePrice();
        }
    });

    // Pattern selection
    document.querySelector('.pattern-options').addEventListener('click', (e) => {
        if (e.target.closest('.pattern-option')) {
            document.querySelectorAll('.pattern-option').forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.pattern-option').classList.add('selected');
            updatePrice();
        }
    });

    // Stitching selection
    document.querySelector('.stitching-options').addEventListener('click', (e) => {
        if (e.target.closest('.stitching-option')) {
            document.querySelectorAll('.stitching-option').forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.stitching-option').classList.add('selected');
            updatePrice();
        }
    });

    // Hardware selection
    document.querySelector('.hardware-options').addEventListener('click', (e) => {
        if (e.target.closest('.hardware-option')) {
            document.querySelectorAll('.hardware-option').forEach(opt => opt.classList.remove('selected'));
            e.target.closest('.hardware-option').classList.add('selected');
            updatePrice();
        }
    });
});
