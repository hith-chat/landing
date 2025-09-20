import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Badge } from './Badge';
import { Check, Zap, MessageSquare, Star } from 'lucide-react';
import styles from './PricingSection.module.css';

export const PricingSection = ({ className }: { className?: string }) => {
  return (
    <section className={`${styles.pricing} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge variant="outline" className={styles.badge}>
            <Zap size={14} />
            Token-Based Pricing
          </Badge>
          <h2 className={styles.title}>
            Simple, Transparent Pricing
          </h2>
          <p className={styles.subtitle}>
            Pay only for what you use. Based on industry-standard token pricing - use tokens across all features including AI chat, ticket management, and automation.
          </p>
        </div>

        <div className={styles.plans}>
          {/* Starter Plan */}
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Starter Pack</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>5</span>
                <span className={styles.period}>/ 1M tokens</span>
              </div>
              <p className={styles.planDescription}>
                Perfect for small teams getting started
              </p>
            </div>
            <div className={styles.planFeatures}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>1M tokens (~10,000 messages)</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>AI-powered chat responses</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Unlimited ticket management</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Basic automation rules</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Email support</span>
              </div>
            </div>
            <Button asChild className={styles.planButton}>
              <Link to="/signup?plan=starter">Get Started</Link>
            </Button>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className={`${styles.plan} ${styles.popular}`}>
            <div className={styles.popularBadge}>
              <Star size={14} />
              Most Popular
            </div>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Pro Pack</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>20</span>
                <span className={styles.period}>/ 5M tokens</span>
              </div>
              <div className={styles.savings}>Save $5 - Best Value!</div>
              <p className={styles.planDescription}>
                Ideal for growing businesses with higher volume
              </p>
            </div>
            <div className={styles.planFeatures}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>5M tokens (~50,000 messages)</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Advanced AI chat features</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Unlimited tickets & automation</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Priority support</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Advanced analytics</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Custom integrations</span>
              </div>
            </div>
            <Button asChild className={styles.planButton}>
              <Link to="/signup?plan=pro">Start Pro Pack</Link>
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Enterprise</h3>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>75</span>
                <span className={styles.period}>/ 20M tokens</span>
              </div>
              <div className={styles.savings}>Save $25 - Maximum Value!</div>
              <p className={styles.planDescription}>
                For large organizations with enterprise needs
              </p>
            </div>
            <div className={styles.planFeatures}>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>20M tokens (~200,000 messages)</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>White-label solutions</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Dedicated account manager</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>99.9% SLA guarantee</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>Custom training & onboarding</span>
              </div>
              <div className={styles.feature}>
                <Check size={16} className={styles.checkIcon} />
                <span>24/7 phone support</span>
              </div>
            </div>
            <Button asChild variant="outline" className={styles.planButton}>
              <Link to="/contact-sales">Contact Sales</Link>
            </Button>
          </div>
        </div>

        <div className={styles.creditInfo}>
          <div className={styles.creditCard}>
            <MessageSquare size={24} className={styles.creditIcon} />
            <div className={styles.creditDetails}>
              <h4>How Tokens Work</h4>
              <p>
                Tokens are used across all platform features. Based on industry-standard pricing (~$0.15-0.60 per 1M tokens). Short messages use ~100 tokens, longer conversations use more.
                Tokens never expire and can be used across tickets, chat, and automation features.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.faq}>
          <h3>Frequently Asked Questions</h3>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>How are tokens consumed?</h4>
              <p>Token usage varies by content length and complexity. A typical short message uses ~100 tokens, while longer conversations use more. Pricing follows industry standards (~$0.15-0.60 per 1M tokens).</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do tokens expire?</h4>
              <p>No! Your tokens never expire. Purchase once and use them whenever you need them across all features.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I upgrade or add more tokens?</h4>
              <p>Absolutely! You can purchase additional token packs anytime or upgrade to a higher tier for better value.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};