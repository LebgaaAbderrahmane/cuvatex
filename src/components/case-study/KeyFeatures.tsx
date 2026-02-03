'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  subtitle?: string;
  title?: string;
  features: Feature[];
}

export default function KeyFeatures({
  subtitle = 'Features',
  title = 'Core Functionalities',
  features
}: KeyFeaturesProps) {
  return (
    <section className="section features-section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header centered">
            <span className="section-subtitle">{subtitle}</span>
            <h2 className="section-title">{title}</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="feature-card card-hover"
                  >
                    <div className="feature-icon-wrapper">
                      <div className="feature-icon">
                        <Icon size={28} />
                      </div>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <div className="feature-hover-effect"></div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>

      <style jsx>{`
        .section {
          padding: var(--section-padding) 0;
        }

        .features-section {
          background: var(--background);
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-header.centered {
          text-align: center;
        }

        .section-subtitle {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 12px;
          position: relative;
        }

        .section-subtitle::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: var(--primary);
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--accent-1);
          line-height: 1.2;
          margin: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .feature-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            var(--primary), 
            transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s ease;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon-wrapper {
          margin-bottom: 24px;
          position: relative;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: rgba(var(--primary-rgb), 0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .feature-card:hover .feature-icon {
          background: rgba(var(--primary-rgb), 0.15);
          transform: scale(1.1) rotate(5deg);
        }

        .feature-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(var(--primary-rgb), 0.03) 0%, 
            transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .feature-card:hover .feature-hover-effect {
          opacity: 1;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--accent-1);
          margin: 0 0 12px;
          transition: color 0.3s ease;
        }

        .feature-card:hover h3 {
          color: var(--primary);
        }

        .feature-card p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--accent-2);
          margin: 0;
        }

        @media (max-width: 1023px) {
          .section-title {
            font-size: 36px;
          }

          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 28px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            padding: 28px;
          }
        }
      `}</style>
    </section>
  );
}