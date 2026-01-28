'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const navT = useTranslations('Navigation');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img src="/Cuvatex_logo.svg" alt="Cuvatex Logo" className="logo-img" />
              <span>CUVATEX</span>
            </Link>
            <p className="footer-tagline">
              {t('tagline')}
            </p>
          </div>

          <div className="footer-links-group">
            <h3>{t('columns.services')}</h3>
            <ul className="footer-links">
              <li><Link href="/services">{t('links.services')}</Link></li>
              <li><Link href="/mvp">{t('links.mvp')}</Link></li>
              <li><Link href="/portfolio">{navT('portfolio')}</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>{t('columns.company')}</h3>
            <ul className="footer-links">
              <li><Link href="/about">{navT('about')}</Link></li>
              <li><Link href="/process">{t('links.process')}</Link></li>
              <li><Link href="/contact">{navT('contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>{t('columns.support')}</h3>
            <ul className="footer-links">
              <li><Link href="/faq">{t('links.faq')}</Link></li>
              <li><Link href="/legal">{t('links.legal')}</Link></li>
              <li><Link href="/privacy">{t('links.privacy')}</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>{t('columns.contact')}</h3>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/213796269301" target="_blank" rel="noopener noreferrer" className="link-with-icon">
                  <MessageCircle size={18} />
                  {t('links.whatsapp')}
                </a>
              </li>
              <li>
                <a href="mailto:abdoulebgaa8@gmail.com" className="link-with-icon">
                  <Mail size={18} />
                  {t('links.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {t('rights')}</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--surface);
          color: var(--accent-2);
          padding: 80px 0 40px;
          border-top: 1px solid var(--border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        :global(.footer-logo) {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 10px !important;
          text-decoration: none;
          margin-bottom: 24px;
        }

        :global(.footer-logo .logo-img) {
          height: 24px !important;
          width: auto !important;
          display: block !important;
        }

        :global(.footer-logo span) {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 24px;
          color: #09524C;
          line-height: 1;
          display: block !important;
        }

        .footer-tagline {
          font-size: 16px;
          color: var(--accent-2);
          max-width: 300px;
          line-height: 1.6;
        }

        .footer-links-group h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--accent-1);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
          padding: 0;
        }

        .footer-links a {
          color: var(--accent-2);
          font-size: 16px;
          transition: var(--transition-default);
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .link-with-icon {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 32px;
          text-align: center;
          color: var(--placeholder);
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
}
