import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Ticket } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <Ticket size={24} />
              <span>SupportFlow</span>
            </Link>
            <p className={styles.tagline}>
              The future of customer support.
            </p>
          </div>
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4>Product</h4>
              <ul>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/integrations">Integrations</Link></li>
                <li><Link to="/demo">Book a Demo</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4>Resources</h4>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/help-center">Help Center</Link></li>
                <li><Link to="/api-docs">API Docs</Link></li>
                <li><Link to="/status">Status</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} SupportFlow, Inc. All rights reserved.</p>
          {/* Social media links can be added here */}
        </div>
      </div>
    </footer>
  );
};