import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessageSquare, Ticket } from 'lucide-react';
import styles from './SharedLayout.module.css';
import logoSvg from '/public/assets/hith-logo-expanded-filled.svg';

interface SharedLayoutProps {
  children: React.ReactNode;
}

export const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logo}>
            <img src={logoSvg} alt="Hith logo" width={120} height={32} />
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