'use client';

import { useTranslations } from 'next-intl';
import { Smartphone, Globe, Rocket, Shield, Cpu, Code } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServicesPreview() {
  const t = useTranslations('Services');

  const services = [
    {
      title: t('web.title'),
      description: t('web.description'),
      icon: <Globe size={48} />,
      delay: 0.1
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      icon: <Smartphone size={48} />,
      delay: 0.2
    },
    {
      title: t('mvp.title'),
      description: t('mvp.description'),
      icon: <Rocket size={48} />,
      delay: 0.3
    },
    {
      title: t('design.title'),
      description: t('design.description'),
      icon: <Cpu size={48} />,
      delay: 0.35
    },
    {
      title: t('cloud.title'),
      description: t('cloud.description'),
      icon: <Shield size={48} />,
      delay: 0.4
    },
    {
      title: t('custom.title'),
      description: t('custom.description'),
      icon: <Code size={48} />,
      delay: 0.45
    }
  ];

  return (
    <section className="section services-preview">
      <div className="container">
        <div className="section-header">
          <ScrollReveal direction="up" delay={0.1}>
            <h2>{t('title')}</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p>{t('subtitle')}</p>
          </ScrollReveal>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={service.delay}
              distance={40}
              duration={0.6}
            >
              <div className="card card-service">
                <div className="service-icon">
                  {service.icon}
                  <div className="icon-glow"></div>
                </div>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
                <div className="service-line"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-preview {
          background: transparent;
          padding-bottom: 120px;
          position: relative;
          overflow: hidden;
        }

        .services-preview:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            var(--primary) 50%, 
            transparent 100%
          );
          opacity: 0.1;
        }

        @media (max-width: 767px) {
          .services-preview {
            padding-bottom: 60px;
          }
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .section-header h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
          border-radius: 2px;
          opacity: 0.3;
        }

        .section-header p {
          max-width: 600px;
          margin: 40px auto 0;
          color: var(--accent-2);
          font-size: 18px;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          justify-content: center;
        }

        @media (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
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
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .card-service:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .card-service:hover {
          background: var(--background);
          border-color: var(--primary);
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 40px rgba(9, 82, 76, 0.1);
        }

        .card-service:hover:before {
          transform: translateX(0);
        }

        .service-icon {
          color: var(--primary);
          margin-bottom: 32px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-flex;
          position: relative;
          z-index: 2;
        }

        .icon-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0;
          filter: blur(15px);
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .card-service:hover .service-icon {
          transform: scale(1.15) rotate(8deg);
        }

        .card-service:hover .icon-glow {
          opacity: 0.2;
        }

        .service-content {
          flex-grow: 1;
          position: relative;
          z-index: 2;
        }

        .card-service h4 {
          margin-bottom: 16px;
          color: var(--accent-1);
          font-size: 22px;
          font-weight: 700;
          transition: color 0.3s ease;
          position: relative;
          padding-bottom: 12px;
        }

        .card-service h4:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--border);
          transition: all 0.3s ease;
        }

        .card-service:hover h4 {
          color: var(--primary);
        }

        .card-service:hover h4:after {
          width: 60px;
          background: var(--primary);
        }

        .card-service p {
          color: var(--accent-2);
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 0;
          transition: color 0.3s ease;
        }

        .card-service:hover p {
          color: var(--accent-1);
        }

        .service-line {
          position: absolute;
          bottom: 0;
          left: 40px;
          right: 40px;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            var(--border) 50%, 
            transparent 100%
          );
          transition: all 0.3s ease;
        }

        .card-service:hover .service-line {
          background: linear-gradient(90deg, 
            transparent 0%, 
            var(--primary) 50%, 
            transparent 100%
          );
          opacity: 0.3;
        }

        /* Add a subtle background pattern */
        .services-preview:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(9, 82, 76, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(9, 82, 76, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </section>
  );
}