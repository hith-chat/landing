import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageSquare, Ticket } from 'lucide-react';
import styles from './SharedLayout.module.css';

interface SharedLayoutProps {
  children: React.ReactNode;
}

export const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Floot</span>
          </Link>
          <nav className={styles.nav}>
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <Ticket size={16} />
              <span>Tickets</span>
            </NavLink>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <MessageSquare size={16} />
              <span>AI Chat</span>
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};