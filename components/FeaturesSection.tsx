import React from 'react';
import { Inbox, Bot, Book, Workflow, BarChart, Users } from 'lucide-react';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: <Inbox size={24} />,
    title: 'Unified Ecosystem',
    description: 'Manage all customer information from tickets, chat, and social media in one central place.',
  },
  {
    icon: <Bot size={24} />,
    title: 'AI-Powered Responses',
    description: 'Leverage AI to provide instant, accurate answers to common questions, freeing up your team.',
  },
  {
    icon: <Book size={24} />,
    title: 'Knowledge Base Integration',
    description: 'Empower customers with self-service options through a seamlessly integrated knowledge base.',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Automated Workflows',
    description: 'MCP tools automate repetitive tasks, prioritize tickets, and route inquiries to the right agents.',
  },
  {
    icon: <BarChart size={24} />,
    title: 'Real-time Analytics',
    description: 'Gain actionable insights into team performance, customer satisfaction, and support trends.',
  },
  {
    icon: <Users size={24} />,
    title: 'Seamless Collaboration',
    description: 'Work together with internal notes, mentions, and ticket assignments to resolve issues faster.',
  },
];

export const FeaturesSection = ({ className }: { className?: string }) => {
  return (
    <section className={`${styles.features} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Everything you need to deliver exceptional support</h2>
          <p className={styles.subtitle}>
            Our platform is packed with powerful features designed to streamline your workflow and delight your customers.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};