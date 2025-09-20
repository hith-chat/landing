import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { MoveRight } from 'lucide-react';
import styles from './HeroSection.module.css';

export const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section className={`${styles.hero} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>New!</span> Announcing our new AI-powered features
          </div>
          <h1 className={styles.headline}>
            Effortless Support,
            <br />
            Smarter Conversations
          </h1>
          <p className={styles.subheadline}>
            The all-in-one platform for intelligent ticket management and
            proactive AI-powered customer chat. Resolve issues faster and build
            lasting customer relationships.
          </p>
          <div className={styles.ctaButtons}>
            <Button asChild size="lg">
              <Link to="/signup">Get Started for Free</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/demo">
                Book a Demo <MoveRight size={20} />
              </Link>
            </Button>
          </div>
          <div className={styles.socialProof}>
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
            <p>Trusted by over 1,000+ teams worldwide</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaborating in an office"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};