"use client";

import { useTranslations } from 'next-intl';
import { Search, PenTool, Code2, ShieldCheck, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const t = useTranslations('Process');

  const steps = [
    {
      title: t('steps.discovery.title'),
      description: t('steps.discovery.description'),
      icon: <Search size={22} />
    },
    {
      title: t('steps.design.title'),
      description: t('steps.design.description'),
      icon: <PenTool size={22} />
    },
    {
      title: t('steps.development.title'),
      description: t('steps.development.description'),
      icon: <Code2 size={22} />
    },
    {
      title: t('steps.testing.title'),
      description: t('steps.testing.description'),
      icon: <ShieldCheck size={22} />
    },
    {
      title: t('steps.deployment.title'),
      description: t('steps.deployment.description'),
      icon: <Rocket size={22} />
    }
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon-box">
                  {step.icon}
                </div>
                {index < steps.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content card">
                <span className="step-number">{t('step')} 0{index + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: var(--surface);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          margin-bottom: 16px;
        }

        .section-header p {
          color: var(--accent-2);
          font-size: 18px;
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          gap: 48px;
          margin-bottom: 32px;
          position: relative;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding-top: 12px;
        }

        .timeline-icon-box {
          width: 56px;
          height: 56px;
          background: var(--background);
          border: 2px solid var(--border);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .timeline-item:hover .timeline-icon-box {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
          transform: scale(1.1);
        }

        .timeline-line {
          width: 2px;
          height: calc(100% + 12px);
          background: var(--border);
          position: absolute;
          top: 68px;
          z-index: 1;
        }

        .timeline-content {
          flex: 1;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-content {
          border-color: var(--primary);
          transform: translateX(8px);
        }

        .step-number {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .timeline-content h4 {
          margin-bottom: 8px;
          font-size: 20px;
          color: var(--accent-1);
        }

        .timeline-content p {
          color: var(--accent-2);
          line-height: 1.6;
          margin-bottom: 0;
        }

        @media (max-width: 767px) {
          .timeline-item {
            gap: 24px;
          }
          
          .timeline-icon-box {
            width: 48px;
            height: 48px;
          }

          .timeline-line {
            top: 60px;
          }

          .timeline-content {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
