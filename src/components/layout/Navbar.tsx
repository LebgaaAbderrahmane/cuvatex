'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('services'), href: '/services' },
    { name: t('mvp'), href: '/mvp' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('about'), href: '/about' },
  ];

  const isActive = (href: string) => {
    const current = (pathname || '/').replace(/\/$/, '') || '/';
    const target = (href || '/').replace(/\/$/, '') || '/';
    return current === target;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <img src="/Cuvatex_logo.svg" alt="Cuvatex Logo" className="logo-img" />
          <span>CUVATEX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="nav-utilities">
            <ThemeToggle />
            <LocaleSwitcher />
            <Link href="/contact" className="btn btn-primary">
              {t('contact')}
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-list">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              {isActive(link.href) && <div className="active-dot" />}
            </Link>
          ))}
        </div>
        <div className="mobile-footer">
          <div className="mobile-utils">
            <ThemeToggle showLabel up />
            <LocaleSwitcher up />
          </div>
          <Link href="/contact" className="btn btn-primary full-width" onClick={() => setIsOpen(false)}>
            {t('contact')}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          display: flex;
          align-items: center;
          background: var(--background);
          border-bottom: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(var(--background-rgb, 255, 255, 255), 0.96);
          /* Original blur for navbar */
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid var(--border);
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        :global(.logo) {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 8px !important;
          text-decoration: none;
          z-index: 1001;
        }

        :global(.logo-img) {
          height: 32px !important;
          width: auto !important;
          display: block !important;
        }

        :global(.logo span) {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 24px;
          color: #09524C;
          letter-spacing: -0.5px;
          line-height: 1;
          display: block !important;
        }


        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-utilities {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-left: 24px;
          border-left: 1px solid var(--border);
        }

        @media (max-width: 1023px) {
          .nav-desktop {
            display: none;
          }
        }

        .nav-link {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: var(--accent-2);
          position: relative;
          padding: 8px 0;
          transition: all 0.2s ease;
          cursor: pointer;
          display: inline-block;
        }

        .nav-link:hover,
        .nav-link[aria-current="page"] {
          color: var(--primary) !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link[aria-current="page"]::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          color: var(--accent-1);
          z-index: 2001; /* Higher than menu */
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1023px) {
          .mobile-toggle {
            display: flex;
          }
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -70%;
          width: 70%;
          max-width: 380px;
          height: 100vh;
          background: var(--background);
          z-index: 2000;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 80px 20px 120px;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.15);
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
        }

        .mobile-menu.open {
          transform: translateX(-100%);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .mobile-nav-link {
          font-size: 20px;
          font-weight: 600;
          color: var(--accent-2);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-nav-link[aria-current="page"] {
          color: var(--primary);
        }

        .active-dot {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
        }

        .mobile-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 32px 0;
          border-top: 1px solid var(--border);
          flex-shrink: 0;
        }

        .mobile-utils {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        :global(.mobile-utils > div) {
          width: 100% !important;
        }

        :global(.mobile-utils .locale-trigger),
        :global(.mobile-utils .theme-toggle-btn) {
          flex: 1;
          justify-content: space-between !important;
          height: 44px !important;
        }

        .full-width {
          width: 100%;
          padding: 14px;
          font-size: 16px;
        }

        [dir="rtl"] .mobile-menu {
          right: auto;
          left: -100%;
        }

        [dir="rtl"] .mobile-menu.open {
          transform: translateX(100%);
        }
      `}</style>
    </nav>
  );
}
