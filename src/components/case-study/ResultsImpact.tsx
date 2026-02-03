'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface Metric {
  value: string;
  label: string;
}

interface ResultsImpactProps {
  subtitle?: string;
  title?: string;
  metrics: Metric[];
  outcomes: string[];
  showcaseImage: string;
  showcaseAlt?: string;
}

export default function ResultsImpact({
  subtitle = 'Results',
  title = 'Project Impact',
  metrics,
  outcomes,
  showcaseImage,
  showcaseAlt = 'Project Showcase'
}: ResultsImpactProps) {
  return (
    <section className="section results-section">
      <div className="container">
        <div className="results-grid">
          <div className="results-content">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="section-header">
                <span className="section-subtitle">{subtitle}</span>
                <h2 className="section-title">{title}</h2>
              </div>
            </ScrollReveal>

            <StaggerContainer>
              <div className="impact-metrics">
                {metrics.map((metric, index) => (
                  <StaggerItem key={index}>
                    <div className="metric-card">
                      <span className="metric-value">{metric.value}</span>
                      <span className="metric-label">{metric.label}</span>
                      <div className="metric-wave"></div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="key-outcomes">
                <h3>Key Outcomes</h3>
                <ul className="outcome-list">
                  {outcomes.map((outcome, index) => (
                    <li key={index}>
                      <span className="outcome-text">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="results-visual">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="device-showcase">
                <img
                  src={showcaseImage}
                  alt={showcaseAlt}
                  className="showcase-image"
                />
                <div className="showcase-frame"></div>
                <div className="showcase-glow"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: var(--section-padding) 0;
        }

        .results-section {
          background: var(--background);
          position: relative;
          overflow: hidden;
        }

        .results-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%);
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .results-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-subtitle {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 12px;
          background: rgba(var(--primary-rgb), 0.1);
          padding: 6px 16px;
          border-radius: 20px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--accent-1);
          line-height: 1.2;
          margin: 0;
        }

        .impact-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .metric-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .metric-card::before {
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

        .metric-card:hover::before {
          transform: scaleX(1);
        }

        .metric-card:hover {
          border-color: var(--primary);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(var(--primary-rgb), 0.15);
        }

        .metric-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            var(--primary) 0%, 
            rgba(var(--primary-rgb), 0.3) 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s ease;
        }

        .metric-card:hover .metric-wave {
          transform: scaleX(1);
        }

        .metric-value {
          display: block;
          font-size: 36px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
          transition: transform 0.3s ease;
        }

        .metric-card:hover .metric-value {
          transform: scale(1.1);
        }

        .metric-label {
          display: block;
          font-size: 14px;
          color: var(--accent-2);
          font-weight: 500;
        }

        .key-outcomes h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--accent-1);
          margin: 0 0 20px;
          position: relative;
          padding-left: 24px;
        }

        .key-outcomes h3::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 16px;
          height: 2px;
          background: var(--primary);
          transform: translateY(-50%);
        }

        .outcome-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .outcome-list li {
          font-size: 16px;
          line-height: 1.7;
          color: var(--accent-2);
          padding-left: 32px;
          position: relative;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .outcome-list li:hover {
          transform: translateX(4px);
          color: var(--accent-1);
        }

        .outcome-text {
          display: block;
        }

        .outcome-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 700;
          font-size: 18px;
          transition: transform 0.2s ease;
        }

        .outcome-list li:hover::before {
          transform: scale(1.2) rotate(10deg);
        }

        .results-visual {
          position: relative;
        }

        .device-showcase {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .device-showcase:hover {
          transform: translateY(-8px);
          box-shadow: 0 35px 100px rgba(0, 0, 0, 0.3);
        }

        .showcase-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.6s ease;
        }

        .device-showcase:hover .showcase-image {
          transform: scale(1.05);
        }

        .showcase-frame {
          position: absolute;
          inset: 0;
          border: 2px solid rgba(var(--primary-rgb), 0.1);
          border-radius: 24px;
          pointer-events: none;
          transition: border-color 0.3s ease;
        }

        .device-showcase:hover .showcase-frame {
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .showcase-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, 
            rgba(var(--primary-rgb), 0.1) 0%, 
            transparent 70%);
          border-radius: 44px;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .device-showcase:hover .showcase-glow {
          opacity: 1;
        }

        @media (max-width: 1023px) {
          .results-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .section-title {
            font-size: 36px;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 28px;
          }

          .impact-metrics {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .metric-value {
            font-size: 28px;
          }

          .key-outcomes h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}