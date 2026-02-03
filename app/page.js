import './globals.css';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <nav className="nav">
          <div className="logo">EduVenture</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="cta-button">Get Started</button>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">Transform Learning Into Adventure</h1>
          <p className="hero-subtitle">
            Empower students with personalized, interactive learning experiences
            that adapt to their pace and ignite their curiosity.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Start Free Trial</button>
            <button className="secondary-button">Watch Demo</button>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Active Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="section-title">Why Choose EduVenture?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Learning</h3>
            <p>AI-powered curriculum that adapts to each student's learning style and pace</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Gamified Experience</h3>
            <p>Engaging challenges and rewards that make learning fun and addictive</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Track progress with detailed insights and performance metrics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and certified educators</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Community</h3>
            <p>Connect with learners worldwide and collaborate on projects</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Learn Anywhere</h3>
            <p>Access courses on any device, anytime, anywhere</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Redefining Education for the Digital Age</h2>
            <p>
              At EduVenture, we believe learning should be as unique as each student.
              Our platform combines cutting-edge technology with proven pedagogical methods
              to create an educational experience that's both effective and enjoyable.
            </p>
            <p>
              Whether you're a student looking to excel, a parent seeking the best for
              your child, or an educator wanting to enhance your teaching toolkit,
              EduVenture provides the tools and support you need to succeed.
            </p>
            <ul className="benefits-list">
              <li>✓ Flexible learning schedules</li>
              <li>✓ Certificate programs</li>
              <li>✓ 24/7 support access</li>
              <li>✓ Money-back guarantee</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="placeholder-image">
              <span>🎓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p>"EduVenture transformed my daughter's approach to learning. She's more engaged and confident than ever!"</p>
            <div className="testimonial-author">
              <strong>Sarah Johnson</strong>
              <span>Parent</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p>"The personalized learning paths helped me improve my grades by 30%. Highly recommend!"</p>
            <div className="testimonial-author">
              <strong>Michael Chen</strong>
              <span>High School Student</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <p>"As a teacher, the analytics tools help me understand my students better and tailor my lessons effectively."</p>
            <div className="testimonial-author">
              <strong>Emily Rodriguez</strong>
              <span>Educator</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students already learning smarter with EduVenture</p>
          <div className="cta-buttons">
            <button className="primary-button large">Start Free 14-Day Trial</button>
          </div>
          <p className="cta-note">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EduVenture</h3>
            <p>Transforming education through technology and innovation.</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#courses">Courses</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 EduVenture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
