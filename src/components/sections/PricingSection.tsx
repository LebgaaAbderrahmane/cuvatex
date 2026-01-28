'use client';

import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('Pricing');

  const plans = [
    {
      name: t('plans.mvp.name'),
      price: t('plans.mvp.price'),
      description: t('plans.mvp.description'),
      features: t.raw('plans.mvp.features'),
      featured: false
    },
    {
      name: t('plans.custom.name'),
      price: t('plans.custom.price'),
      description: t('plans.custom.description'),
      features: t.raw('plans.custom.features'),
      featured: true
    },
    {
      name: t('plans.retainer.name'),
      price: t('plans.retainer.price'),
      description: t('plans.retainer.description'),
      features: t.raw('plans.retainer.features'),
      featured: false
    }
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        <div className="pricing-grid staggered">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <span className="featured-badge">{t('popular')}</span>}
              <div className="card-header">
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <p>{plan.description}</p>
              </div>
              <ul className="feature-list">
                {(plan.features as string[]).map((feature) => (
                  <li key={feature}>
                    <Check size={18} className="icon-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} full-width`}>
                {t('cta')}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          margin-bottom: 20px;
        }

        .section-header p {
          color: var(--accent-2);
          font-size: 18px;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: stretch;
        }

        @media (max-width: 1023px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
            gap: 40px;
          }
        }

        .pricing-card {
          display: flex;
          flex-direction: column;
          padding: 48px 32px;
          text-align: center;
          position: relative;
          background: var(--surface);
        }

        .pricing-card.featured {
          border: 2px solid var(--primary);
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.1);
        }

        .featured-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--primary);
          color: #FFFFFF;
          padding: 4px 16px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .card-header h3 {
          font-size: 20px;
          margin-bottom: 16px;
          color: var(--accent-1);
        }

        .price {
          font-size: 28px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 16px;
        }

        .card-header p {
          color: var(--accent-2);
          font-size: 15px;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px;
          text-align: left;
          flex-grow: 1;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          color: var(--accent-2);
          font-size: 15px;
        }

        .stat-icon-wrapper {
          width: 56px;
          height: 56px;
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-success {
          color: var(--primary); /* Changed from #10B981 */
          flex-shrink: 0;
        }

        .full-width {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
