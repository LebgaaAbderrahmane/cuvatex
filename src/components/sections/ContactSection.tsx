'use client';

import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');
  const whatappNumber = "+213796269301"; // Placeholder
  const whatappLink = `https://wa.me/${whatappNumber.replace('+', '')}`;

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{t('title')}</h2>
            <p>{t('subtitle')}</p>

            <div className="contact-methods">
              <div className="method">
                <div className="method-icon"><MessageCircle size={24} /></div>
                <div>
                  <h4>{t('whatsapp.title')}</h4>
                  <p>{t('whatsapp.subtitle')}</p>
                </div>
              </div>
              <div className="method">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>{t('email.title')}</h4>
                  <p>{t('email.subtitle')}</p>
                </div>
              </div>
              <div className="method">
                <div className="method-icon"><MapPin size={24} /></div>
                <div>
                  <h4>{t('location.title')}</h4>
                  <p>{t('location.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cta-wrapper">
            <div className="cta-card card whatsapp-focus">
              <div className="cta-header">
                <div className="whatsapp-badge">
                  <MessageCircle size={32} />
                </div>
                <h3>{t('cta_box.title')}</h3>
                <p>{t('cta_box.description')}</p>
              </div>

              <a
                href={whatappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp full-width btn-lg"
              >
                {t('whatsapp.cta')}
                <ArrowRight size={18} />
              </a>

              <p className="cta-note">{t('whatsapp.note')}</p>
            </div>

            <div className="email-fallback text-center">
              <p>{t('email.label')} <a href="mailto:abdoulebgaa8@gmail.com" className="btn-tertiary">{t('email.cta')}</a></p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--background);
          padding-bottom: 120px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1023px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
        }

        .contact-info h2 {
          margin-bottom: 24px;
          line-height: 1.2;
          color: var(--accent-1);
        }

        .contact-info p {
          color: var(--accent-2);
          font-size: 18px;
          margin-bottom: 48px;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .method {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .method-icon {
          width: 56px;
          height: 56px;
          background: var(--surface);
          color: var(--primary);
          border: 1px solid var(--border);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .method h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
          color: var(--accent-1);
        }

        .method p {
          font-size: 15px;
          color: var(--accent-2);
          margin-bottom: 0;
        }

        .cta-card {
          padding: 48px;
          text-align: center;
          background: var(--surface);
          transition: all 0.3s ease;
        }

        .cta-card.whatsapp-focus {
          border: 2px solid #25D366;
          box-shadow: 0 20px 40px rgba(37, 211, 102, 0.05);
        }

        .whatsapp-badge {
          width: 64px;
          height: 64px;
          background: #25D366;
          color: #FFFFFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          box-shadow: 0 8px 16px rgba(37, 211, 102, 0.2);
        }

        .cta-header h3 {
          margin-bottom: 16px;
          font-size: 24px;
          color: var(--accent-1);
        }

        .cta-header p {
          color: var(--accent-2);
          margin-bottom: 32px;
          line-height: 1.6;
          font-size: 16px;
        }

        .full-width {
          width: 100%;
        }

        .btn-lg {
          padding: 16px;
          font-size: 18px;
          border-radius: 14px;
        }

        .cta-note {
          margin-top: 24px;
          font-size: 14px;
          color: var(--accent-2);
        }

        .email-fallback {
          margin-top: 32px;
          font-size: 16px;
          color: var(--accent-2);
        }

        @media (max-width: 767px) {
          .cta-card {
            padding: 40px 24px;
          }
          .contact-info p {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
}
