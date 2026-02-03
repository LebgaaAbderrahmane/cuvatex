'use client';

import { Link } from '@/i18n/routing';
import { Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface CaseStudyCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CaseStudyCTA({
  title = 'Ready to Build Your Next Project?',
  description = "Let's collaborate to create exceptional digital experiences that solve real problems and delight users.",
  primaryButtonText = 'Start a Project',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'View More Work',
  secondaryButtonHref = '/portfolio'
}: CaseStudyCTAProps) {
  return (
    <section className="section cta-section">
      <div className="container">
        <ScrollReveal direction="up" distance={40}>
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">{title}</h2>
              <p className="cta-description">{description}</p>
              <div className="cta-buttons">
                <ScrollReveal direction="left" delay={0.2}>
                  <Link href={primaryButtonHref} className="btn-white-cta">
                    {primaryButtonText}
                  </Link>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={0.3}>
                  <Link href={secondaryButtonHref} className="btn-secondary">
                    {secondaryButtonText}
                  </Link>
                </ScrollReveal>
              </div>
            </div>
            <div className="cta-decoration">
              <Sparkles size={48} />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .section {
          padding: var(--section-padding) 0;
        }

        .cta-section {
          background: var(--background);
        }

        .cta-card {
          position: relative;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          border-radius: 32px;
          padding: 80px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(var(--primary-rgb), 0.2);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .cta-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 80px rgba(var(--primary-rgb), 0.3);
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 80%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: pulse 8s ease-in-out infinite;
        }

        .cta-content {
          flex: 1;
          z-index: 2;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 32px;
          max-width: 600px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        :global(.btn-white-cta) {
          background: #FFFFFF;
          color: #09524C;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid #FFFFFF;
        }

        :global(.btn-white-cta:hover) {
          background: #F8FAFC;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        :global(.btn-secondary) {
          background: transparent;
          color: #FFFFFF;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 16px 32px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        :global(.btn-secondary:hover) {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .cta-decoration {
          color: rgba(255, 255, 255, 0.2);
          z-index: 1;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        @media (max-width: 1023px) {
          .cta-card {
            flex-direction: column;
            text-align: center;
            padding: 60px 40px;
          }

          .cta-title {
            font-size: 36px;
          }

          .cta-description {
            max-width: 100%;
          }

          .cta-buttons {
            justify-content: center;
          }

          .cta-decoration {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .cta-card {
            padding: 40px 24px;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          :global(.btn-white-cta),
          :global(.btn-secondary) {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}