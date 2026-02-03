'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessFlowProps {
  subtitle?: string;
  title?: string;
  steps: ProcessStep[];
}

export default function ProcessFlow({
  subtitle = 'Development Process',
  title = 'Engineering Journey',
  steps
}: ProcessFlowProps) {
  return (
    <section className="section process-section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-subtitle">{subtitle}</span>
            <h2 className="section-title">{title}</h2>
          </div>
        </ScrollReveal>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <ScrollReveal
              key={index}
              direction="right"
              delay={index * 0.1}
              className="process-step-wrapper"
            >
              <div className="process-step">
                <div className="step-marker">
                  <span className="step-number">{step.number}</span>
                  <div className="step-marker-pulse"></div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-line"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: var(--section-padding) 0;
        }

        .process-section {
          background: var(--surface);
          position: relative;
        }

        .process-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(var(--primary-rgb), 0.3), 
            transparent);
        }

        .section-header {
          text-align: left;
          margin-bottom: 60px;
        }

        .section-subtitle {
          display: inline-block;
          font-size: 14px;
          font-weight: 600;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--accent-1);
          line-height: 1.2;
          margin: 0;
        }

        .process-timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
          padding-left: 80px;
        }

        .process-timeline::before {
          content: '';
          position: absolute;
          left: 30px;
          top: 40px;
          bottom: 40px;
          width: 2px;
          background: linear-gradient(180deg, 
            var(--primary) 0%, 
            rgba(var(--primary-rgb), 0.2) 100%);
        }

        .process-step-wrapper {
          position: relative;
        }

        .process-step {
          display: flex;
          gap: 24px;
          position: relative;
        }

        .step-marker {
          position: absolute;
          left: -80px;
          width: 60px;
          height: 60px;
          background: var(--background);
          border: 3px solid var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .process-step:hover .step-marker {
          transform: scale(1.1);
          box-shadow: 0 0 0 8px rgba(var(--primary-rgb), 0.1);
        }

        .step-marker-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--primary);
          opacity: 0;
          animation: pulse 2s infinite;
        }

        .step-number {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
          position: relative;
          z-index: 1;
        }

        .step-content {
          flex: 1;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .step-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--primary);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s ease;
        }

        .step-content:hover::before {
          transform: scaleY(1);
        }

        .step-content:hover {
          border-color: rgba(var(--primary-rgb), 0.3);
          transform: translateX(12px);
          box-shadow: 0 15px 40px rgba(var(--primary-rgb), 0.15);
        }

        .step-line {
          position: absolute;
          left: -24px;
          top: 50%;
          width: 24px;
          height: 2px;
          background: var(--primary);
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step-content:hover .step-line {
          opacity: 1;
        }

        .step-content h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--accent-1);
          margin: 0 0 12px;
          transition: color 0.3s ease;
        }

        .step-content:hover h3 {
          color: var(--primary);
        }

        .step-content p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--accent-2);
          margin: 0;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @media (max-width: 1023px) {
          .section-title {
            font-size: 36px;
          }

          .process-timeline {
            padding-left: 70px;
          }

          .step-marker {
            left: -70px;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 28px;
          }

          .process-timeline {
            padding-left: 50px;
          }

          .step-marker {
            left: -50px;
            width: 48px;
            height: 48px;
          }

          .step-number {
            font-size: 16px;
          }

          .process-timeline::before {
            left: 24px;
          }

          .step-content {
            padding: 24px;
          }

          .step-content h3 {
            font-size: 18px;
          }

          .step-content p {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}