"use client";

import { useTranslations } from 'next-intl';
import { Search, PenTool, Code2, ShieldCheck, Rocket } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ProcessSection() {
  const t = useTranslations('Process');

  const steps = [
    {
      title: t('steps.discovery.title'),
      description: t('steps.discovery.description'),
      icon: <Search size={22} />,
      delay: 0.1
    },
    {
      title: t('steps.design.title'),
      description: t('steps.design.description'),
      icon: <PenTool size={22} />,
      delay: 0.2
    },
    {
      title: t('steps.development.title'),
      description: t('steps.development.description'),
      icon: <Code2 size={22} />,
      delay: 0.3
    },
    {
      title: t('steps.testing.title'),
      description: t('steps.testing.description'),
      icon: <ShieldCheck size={22} />,
      delay: 0.4
    },
    {
      title: t('steps.deployment.title'),
      description: t('steps.deployment.description'),
      icon: <Rocket size={22} />,
      delay: 0.5
    }
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="section-header">
          <ScrollReveal direction="up" delay={0.1}>
            <h2>{t('title')}</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p>{t('subtitle')}</p>
          </ScrollReveal>
        </div>

        <div className="timeline">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? "right" : "left"}
              delay={step.delay}
              distance={50}
              duration={0.8}
            >
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon-box">
                    {step.icon}
                    <div className="icon-glow"></div>
                  </div>
                  {index < steps.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content card">
                  <span className="step-number">{t('step')} 0{index + 1}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          background: var(--surface);
          position: relative;
          overflow: hidden;
        }

        .process-section:before {
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
          position: relative;
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
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          position: relative;
        }

        .icon-glow {
          position: absolute;
          inset: -4px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0;
          filter: blur(8px);
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .timeline-item:hover .timeline-icon-box {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.3);
        }

        .timeline-item:hover .icon-glow {
          opacity: 0.3;
        }

        .timeline-line {
          width: 2px;
          height: calc(100% + 12px);
          background: linear-gradient(
            to bottom, 
            var(--border) 0%, 
            var(--primary) 50%, 
            var(--border) 100%
          );
          position: absolute;
          top: 68px;
          z-index: 1;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-line {
          opacity: 1;
          background: linear-gradient(
            to bottom, 
            var(--primary) 0%, 
            var(--primary-light) 50%, 
            var(--primary) 100%
          );
        }

        .timeline-content {
          flex: 1;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .timeline-content:before {
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

        .timeline-item:hover .timeline-content {
          border-color: var(--primary);
          transform: translateX(12px) translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .timeline-item:hover .timeline-content:before {
          transform: translateX(0);
        }

        .step-number {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .step-number {
          opacity: 1;
          letter-spacing: 0.15em;
        }

        .timeline-content h4 {
          margin-bottom: 8px;
          font-size: 20px;
          color: var(--accent-1);
          transition: color 0.3s ease;
        }

        .timeline-item:hover .timeline-content h4 {
          color: var(--primary);
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
          
          .timeline-item:hover .timeline-content {
            transform: translateX(8px) translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}