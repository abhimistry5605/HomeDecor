'use client';

import Script from 'next/script';

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Ravi Trading</h1>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#why-us" className="nav-link">What We Offer</a></li>
            <li><a href="#process" className="nav-link">Process</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <a href="#" className="cart-icon">🛒 Cart (0)</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>CURATED LUXURY.<br />PERFECTED FOR YOUR SPACE.</h1>
          <p>Realize your unique interior vision with Ravi Trading's bespoke luxury furnishings, where every detail is fully customized and expertly restored according to your requirement, validated by two decades of perfected craft.</p>
          <button className="btn btn-primary" onClick={() => {
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}>Get Free Consultation</button>
        </div>
        <div className="hero-image">
          <div className="slideshow-container">
            <div className="slide active">
              <img src="https://m.media-amazon.com/images/I/71edQQK0vsL._AC_UF894,1000_QL80_.jpg" alt="Premium Sofa Fabric" />
            </div>
            <div className="slide">
              <img src="https://cdn.shopify.com/s/files/1/0052/8770/6673/files/Swyft_Home_Location2812-2_600x600.jpg?v=1678444972" alt="Elegant Home Interior" />
            </div>
            <div className="slide">
              <img src="https://5.imimg.com/data5/KW/MI/XD/SELLER-13194771/pure-cotton-sofa-fabric.jpg" alt="Cotton Sofa Fabric" />
            </div>
            <div className="slide">
              <img src="https://www.hometown.in/cdn/shop/files/unstudio-image_2.png?v=1747203008&width=2048" alt="Modern Furniture Design" />
            </div>
            <div className="slide">
              <img src="https://cpimg.tistatic.com/6767427/b/1/modern-curtain-fabric.jpg" alt="Modern Curtain Fabric" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="products">
        <div className="container-full">
          <h2 className="section-title">The Curator's Edit</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <img src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/47a0336c-21f2-47be-b569-8147d6f5280b/188a9f5ce96641bab4f0abb35cf78c7cr-jpg-960x960.webp" alt="Luxury Sofa" />
              </div>
              <div className="product-info">
                <h3>Luxury Sofa</h3>
                <p className="description">Premium comfort with modern design</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=sofa'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://m.media-amazon.com/images/I/71ZbcJqC4xL._AC_UF894,1000_QL80_.jpg" alt="Elegant Curtains" />
              </div>
              <div className="product-info">
                <h3>Elegant Curtains</h3>
                <p className="description">Sophisticated window treatments</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=curtains'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://sonaarts.in/wp-content/uploads/2024/12/81bFcMiU33L._SL1500_-800x800.jpg" alt="Bed Frame" />
              </div>
              <div className="product-info">
                <h3>Modern Bed Frame</h3>
                <p className="description">Sleek design for restful nights</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=bed'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/19276386/2022/7/27/b28e0125-06b6-4c40-9875-67bf8148661a1658942227624HOSTAHOMESCream-ColouredGold-TonedSetof5GeometricVelvetSquar1.jpg" alt="Cushions" />
              </div>
              <div className="product-info">
                <h3>Luxury Cushions</h3>
                <p className="description">Elegant comfort accessories</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=cushions'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images-cdn.ubuy.co.in/633a38f2b4bf7c0dc52a3a56-1000-modern-non-woven-3d-brick.jpg" alt="Wallpaper" />
              </div>
              <div className="product-info">
                <h3>Premium Wallpaper</h3>
                <p className="description">Transform your walls</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=wallpaper'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg" alt="Lighting" />
              </div>
              <div className="product-info">
                <h3>Designer Lighting</h3>
                <p className="description">Ambient and task lighting solutions</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=lighting'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg" alt="Side Table" />
              </div>
              <div className="product-info">
                <h3>Modern Side Table</h3>
                <p className="description">Functional and stylish</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=sidetable'}>Customize</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg" alt="Accent Chair" />
              </div>
              <div className="product-info">
                <h3>Accent Chair</h3>
                <p className="description">Statement seating piece</p>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/customizer?product=accentchair'}>Customize</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="why-us" className="why-us">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎨</div>
              <h3>Craftsmanship</h3>
              <p>Two decades of expertise in creating premium furniture with attention to every detail and quality assurance</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h3>Bespoke Design</h3>
              <p>Fully customizable furniture tailored to your unique space, style preferences, and requirements</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Quality Materials</h3>
              <p>Premium fabrics, solid wood, and sustainable materials sourced responsibly for durability</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Value for Money</h3>
              <p>Competitive pricing without compromising quality, offering luxury accessible to everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Understand your needs, space, and vision</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p>Create custom designs matching your preferences</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Manufacturing</h3>
              <p>Expertly craft your furniture with quality materials</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Professional delivery and installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"The customization options were incredible! My living room looks exactly how I envisioned it."</p>
              <strong>- Priya Sharma</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Quality and attention to detail are unmatched. Worth every penny for luxury furniture."</p>
              <strong>- Rajesh Patel</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐</div>
              <p>"Great service and beautiful pieces. The delivery team was professional and efficient."</p>
              <strong>- Anita Verma</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Ravi Trading transformed my home. Highly recommend for anyone looking for bespoke furniture!"</p>
              <strong>- Vikram Singh</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" required />
              <textarea placeholder="Your Message" rows={5}></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="info-item">
                <h3>📍 Address</h3>
                <p>Ravi Trading, Surat, Gujarat, India</p>
              </div>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+91-XXXX-XXXX-XX</p>
              </div>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>contact@ravitrading.com</p>
              </div>
              <div className="info-item">
                <h3>🕐 Hours</h3>
                <p>Mon - Sat: 10 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Ravi Trading</h4>
              <p>Luxury furniture tailored for your space</p>
            </div>
            <div className="footer-section">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Sofas</a></li>
                <li><a href="#products">Curtains</a></li>
                <li><a href="#products">Beds</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#why-us">About Us</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Ravi Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Script src="/JS/script-modern.js" strategy="afterInteractive" />
    </>
  );
}
