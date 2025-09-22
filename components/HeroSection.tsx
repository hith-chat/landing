import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { MoveRight } from 'lucide-react';
import styles from './HeroSection.module.css';

export const HeroSection = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function validateEmail(e?: string) {
    if (!e) return false;
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  function onSubmit(evt?: React.FormEvent) {
    evt?.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError(null);
    // navigate to signup with email pre-filled
    window.location.href = `https://app.heith.chat/signup?email=${encodeURIComponent(email)}`;
  }

  return (
    <section className={`${styles.hero} ${className || ''}`}>
      <div className={styles.container}>
        {/* Left column: headline + form */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            The future of
            <br />
            customer communications.
          </h1>
          <p className={styles.subheadline}>
            A modern, AI-powered chat and ticketing platform that feels personal-not robotic. Turn visitors into loyal customers.
          </p>

          <form onSubmit={onSubmit} style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 20, flexWrap: 'wrap' }}>
            <input
              aria-label="Email address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '12px 14px',
                borderRadius: 8,
                border: '1px solid var(--border)',
                minWidth: 280,
                flex: '1 1 420px',
                fontSize: 14
              }}
            />
            <Button type="submit" size="lg" style={{ padding: '12px 20px', fontWeight: 700 }}>
              <Link to="https://app.heith.chat/signup" target='_blank'>Get Started</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="https://calendly.com/sumansaurabh-1/heith" target="_blank" rel="noreferrer">
                Book a Demo <MoveRight size={18} />
              </a>
            </Button>
          </form>
          {error && <div style={{ color: 'var(--destructive, #ef4444)', marginTop: 8 }}>{error}</div>}

          <div className={styles.socialProof} style={{ marginTop: 18 }}>
            <div className={styles.avatars}>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/67.jpg" alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            <p>Trusted by hundreds of teams worldwide</p>
          </div>
        </div>

        {/* Right column: image card */}
        <div className={styles.imageContainer}>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 40px rgba(16,24,40,0.08)' }}>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaborating in an office"
              className={styles.heroImage}
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};