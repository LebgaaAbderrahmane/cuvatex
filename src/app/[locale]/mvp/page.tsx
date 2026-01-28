"use client";

import { useTranslations } from 'next-intl';
import { CheckCircle, Clock, Package, MessageCircle } from 'lucide-react';
import InnerHero from '@/components/sections/InnerHero';

export default function MVPPage() {
  const t = useTranslations('MVP');
  const whatappNumber = "+213796269301";
  const whatappLink = `https://wa.me/${whatappNumber.replace('+', '')}`;

  const benefits = [
    {
      title: t('benefits.rapid.title'),
      description: t('benefits.rapid.description'),
      icon: <Clock size={24} />
    },
    {
      title: t('benefits.tech.title'),
      description: t('benefits.tech.description'),
      icon: <CheckCircle size={24} />
    },
    {
      title: t('benefits.ownership.title'),
      description: t('benefits.ownership.description'),
      icon: <Package size={24} />
    }
  ];

  return (
    <main className="mvp-page">
      <InnerHero
        title={t('title')}
        subtitle={t('subtitle')}
        cta={
          <a href={whatappLink} target="_blank" rel="noopener noreferrer" className="btn btn-white">
            <MessageCircle size={20} />
            {t('cta')}
          </a>
        }
      />

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid staggered">
            <div className="stat-card card">
              <span className="stat-label">{t('stats.timeline')}</span>
              <span className="stat-value">{t('timeline')}</span>
            </div>
            <div className="stat-card card">
              <span className="stat-label">{t('stats.deliverables')}</span>
              <span className="stat-value">{t('deliverables')}</span>
            </div>
            <div className="stat-card card">
              <span className="stat-label">{t('stats.ownership')}</span>
              <span className="stat-value">{t('stats.ownership_value')}</span>
            </div>
            <div className="stat-card card">
              <span className="stat-label">{t('stats.support')}</span>
              <span className="stat-value">{t('stats.support_value')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section mvp-benefits">
        <div className="container">
          <h2 className="section-title">{t('benefits.title')}</h2>
          <div className="benefits-grid staggered">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .mvp-page {
          background: var(--background);
        }

        .stats-section {
          margin-top: -64px;
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1023px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }

        .stat-card {
          text-align: center;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
        }

        .stat-label {
          display: block;
          font-size: 13px;
          color: var(--accent-2);
          margin-bottom: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
        }

        .btn-lg {
          padding: 14px 32px;
          font-size: 16px;
          border-radius: 12px;
          height: auto;
        }

        .btn-white {
          background: #FFFFFF;
          color: #09524C;
          border-radius: 69px;
        }

        .btn-white:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .full-width {
          width: 100%;
        }

        .mvp-benefits {
          padding-top: 100px;
          padding-bottom: 120px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 64px;
          color: var(--accent-1);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        .benefit-card {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 40px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          background: var(--background);
          border-color: var(--primary);
        }

        .benefit-icon {
          color: var(--primary);
          margin-bottom: 24px;
          display: inline-flex;
          padding: 16px;
          background: rgba(9, 82, 76, 0.05);
          border-radius: 16px;
        }

        .benefit-card h3 {
          margin-bottom: 16px;
          color: var(--accent-1);
        }

        .benefit-card p {
          color: var(--accent-2);
          line-height: 1.7;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
}
