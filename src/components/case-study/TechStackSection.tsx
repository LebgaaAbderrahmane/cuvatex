'use client';

import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface TechCategory {
  title: string;
  technologies: string[];
}

interface TechStackSectionProps {
  subtitle?: string;
  title?: string;
  categories: TechCategory[];
}

export default function TechStackSection({
  subtitle = 'Technology',
  title = 'Built with Modern Stack',
  categories
}: TechStackSectionProps) {
  return (
    <section className="section tech-section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="section-header centered">
            <span className="section-subtitle">{subtitle}</span>
            <h2 className="section-title">{title}</h2>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="tech-stack-grid">
            {categories.map((category, index) => (
              <StaggerItem key={index}>
                <div className="tech-category">
                  <h3>{category.title}</h3>
                  <div className="tech-tags">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag"
                        style={{
                          animationDelay: `${techIndex * 0.1}s`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>

      <style jsx>{`
        .section {
          padding: var(--section-padding) 0;
        }

        .tech-section {
          background: var(--surface);
          position: relative;
        }

        .tech-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(var(--primary-rgb), 0.2), 
            transparent);
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
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, 
            transparent, 
            var(--primary), 
            transparent);
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--accent-1);
          line-height: 1.2;
          margin: 0;
        }

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .tech-category {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .tech-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(var(--primary-rgb), 0.05) 0%, 
            transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-category:hover::before {
          opacity: 1;
        }

        .tech-category:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0 20px 60px rgba(var(--primary-rgb), 0.15);
        }

        .tech-category h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--accent-1);
          margin: 0 0 20px;
          position: relative;
          padding-left: 16px;
        }

        .tech-category h3::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          transform: translateY(-50%);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(var(--primary-rgb), 0.08);
          color: var(--primary);
          border: 1px solid rgba(var(--primary-rgb), 0.15);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(10px);
          animation: slideUp 0.5s forwards;
        }

        .tech-category:hover .tech-tag {
          animation-play-state: running;
        }

        .tech-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent);
          transition: left 0.6s ease;
        }

        .tech-tag:hover::before {
          left: 100%;
        }

        .tech-tag:hover {
          background: rgba(var(--primary-rgb), 0.15);
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.15);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1023px) {
          .section-title {
            font-size: 36px;
          }

          .tech-stack-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 28px;
          }

          .tech-stack-grid {
            grid-template-columns: 1fr;
          }

          .tech-category {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}