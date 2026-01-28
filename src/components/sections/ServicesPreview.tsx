'use client';

import { useTranslations } from 'next-intl';
import { Smartphone, Globe, Rocket, Shield, Cpu, Code } from 'lucide-react';

export default function ServicesPreview() {
  const t = useTranslations('Services');

  const services = [
    {
      title: t('web.title'),
      description: t('web.description'),
      icon: <Globe size={48} />
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      icon: <Smartphone size={48} />
    },
    {
      title: t('mvp.title'),
      description: t('mvp.description'),
      icon: <Rocket size={48} />
    },
    {
      title: t('design.title'),
      description: t('design.description'),
      icon: <Cpu size={48} />
    },
    {
      title: t('cloud.title'),
      description: t('cloud.description'),
      icon: <Shield size={48} />
    },
    {
      title: t('custom.title'),
      description: t('custom.description'),
      icon: <Code size={48} />
    }
  ];

  return (
    <section className="section services-preview">
      <div className="container">
        <div className="section-header">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className="services-grid staggered">
          {services.map((service, index) => (
            <div key={index} className="card card-service staggered">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-preview {
          background: var(--background);
          padding-bottom: 120px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          margin-bottom: 20px;
        }

        .section-header p {
          max-width: 600px;
          margin: 0 auto;
          color: var(--accent-2);
          font-size: 18px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          justify-content: center;
        }

        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        .card-service {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: left;
          padding: 40px;
          background: var(--surface);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .service-icon {
          color: var(--primary);
          margin-bottom: 28px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-flex;
        }

        .card-service:hover {
          background: var(--background);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(9, 82, 76, 0.05);
        }

        .card-service:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-content {
          flex-grow: 1;
        }

        .card-service h4 {
          margin-bottom: 16px;
          color: var(--accent-1);
          font-size: 22px;
          font-weight: 700;
        }

        .card-service p {
          color: var(--accent-2);
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}
