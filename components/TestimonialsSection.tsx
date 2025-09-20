import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Support Lead, Acme Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    fallback: 'SJ',
    rating: 5,
    quote: 'This platform has revolutionized our support workflow. We\'re resolving tickets 40% faster and our customers have never been happier. A true game-changer!',
  },
  {
    name: 'Michael Chen',
    title: 'CEO, Innovate Co.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    fallback: 'MC',
    rating: 5,
    quote: 'The AI chat is incredibly powerful. It handles most of our common queries, allowing our team to focus on complex issues. Our satisfaction scores are through the roof.',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Founder, Startup Hub',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    fallback: 'ER',
    rating: 5,
    quote: 'As a small team, efficiency is key. This tool gives us the power of a large support department without the overhead. The setup was a breeze!',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className={styles.starRating}>
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? styles.filledStar : styles.emptyStar}
      />
    ))}
  </div>
);

export const TestimonialsSection = ({ className }: { className?: string }) => {
  return (
    <section className={`${styles.testimonials} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Loved by teams worldwide</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <StarRating rating={testimonial.rating} />
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>
              <div className={styles.author}>
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                </Avatar>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorTitle}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};