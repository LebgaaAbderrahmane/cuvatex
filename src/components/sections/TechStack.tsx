"use client";

import { useTranslations } from 'next-intl';
import { Rocket, Server, Smartphone } from 'lucide-react';

export default function TechStack() {
  const t = useTranslations('TechStack');
  const categories = [
    {
      title: t('categories.frontend'),
      icon: <Rocket size={24} />,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: t('categories.backend'),
      icon: <Server size={24} />,
      techs: ["Node.js", "Python", "Go", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: t('categories.mobile'),
      icon: <Smartphone size={24} />,
      techs: ["React Native", "Flutter", "Swift", "Kotlin"]
    }
  ];

  return (
    <section className="section tech-stack">
      <div className="container">
        <div className="section-header">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.title} className="category-group">
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="tech-pills">
                {category.techs.map((tech) => (
                  <div key={tech} className="tech-pill grayscale">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-stack {
          background: transparent;
          padding-bottom: 120px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .section-header h2 {
          margin-bottom: 16px;
        }

        .section-header p {
          color: var(--accent-2);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }

        @media (max-width: 1023px) {
          .categories-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: var(--primary);
        }

        .category-header h3 {
          font-size: 20px;
          color: var(--accent-1);
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-pill {
          padding: 8px 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 99px;
          font-size: 14px;
          font-weight: 500;
          color: var(--accent-2);
          transition: var(--transition-default);
          cursor: default;
        }

        .tech-pill.grayscale {
          filter: grayscale(100%);
          opacity: 0.7;
        }

        .tech-pill:hover {
          filter: grayscale(0%);
          opacity: 1;
          background: var(--surface);
          border-color: var(--primary);
          color: var(--primary);
        }
      `}</style>
    </section>
  );
}
