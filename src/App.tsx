import { useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">Get in touch with us for inquiries about our products</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your inquiry..."
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default function App(){
  return (
    <div className="app-root">
      {/* Top Header */}
      <header className="site-header">
        <div className="header-top">
          <div className="header-left">
            <div className="logo">JayAmbeEnterprise</div>
          </div>
          <div className="header-search">
            <select className="search-dropdown">
              <option>All Categories</option>
            </select>
            <input type="text" className="search-input" placeholder="Search products..." />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="breadcrumb">
          <span>Home</span> › <span>Products</span>
        </div>
        <h1 className="page-title">Our Product Catalogue</h1>
        <ProductList />
      </main>

      <ContactForm />

      <footer className="site-footer">
        <a href="#" className="back-to-top">Back to top</a>
        <div className="footer-content">
          <p>&copy; 2024 JayAmbeEnterprise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}