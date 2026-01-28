'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function ProjectsSnapshot() {
  const t = useTranslations('Projects');

  const projects = [
    {
      title: t('items.fintech.title'),
      category: t('categories.web'),
      description: t('items.fintech.description'),
      image: "/images/fintech.jpg",
      link: "/portfolio/fintech"
    },
    {
      title: t('items.healthcare.title'),
      category: t('categories.mobile'),
      description: t('items.healthcare.description'),
      image: "/images/heathcare.jpg",
      link: "/portfolio/healthcare"
    },
    {
      title: t('items.ai.title'),
      category: t('categories.design'),
      description: t('items.ai.description'),
      image: "/images/AI SaaS Dashboard.jpg",
      link: "/portfolio/ai-dashboard"
    },
    {
      title: t('items.elearning.title'),
      category: t('categories.fullstack'),
      description: t('items.elearning.description'),
      image: "/images/E-learning Experience.jpg",
      link: "/portfolio/elearning"
    }
  ];

  return (
    <section className="section projects-snapshot">
      <div className="container">
        <div className="section-header">
          <div className="header-text">
            <h2>{t('title')}</h2>
            <p>{t('subtitle')}</p>
          </div>
          <Link href="/portfolio" className="btn btn-secondary hide-mobile">
            {t('view_all')}
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="projects-grid staggered">
          {projects.map((project, index) => (
            <div key={index} className="project-card card card-project">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <ExternalLink size={24} color="#FFF" />
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <Link href={project.link} className="btn-tertiary">
                  {t('cta')}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="show-mobile mt-32">
          <Link href="/portfolio" className="btn btn-secondary full-width">
            {t('view_all')}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .projects-snapshot {
          background: var(--background);
          padding-bottom: 100px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 80px;
        }

        .header-text h2 {
          margin-bottom: 12px;
        }

        .header-text p {
          color: var(--accent-2);
          font-size: 18px;
          margin-bottom: 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
        }

        @media (max-width: 1023px) {
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 64px;
          }
          
          .projects-grid {
            gap: 32px;
          }

          .hide-mobile {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        .project-card {
          padding: 0;
          overflow: hidden;
          transition: transform 0.3s ease;
          background: var(--surface);
        }

        .project-card:hover {
          transform: translateY(-8px);
        }

        .project-image-wrapper {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .project-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(var(--primary-rgb), 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .card-project:hover .overlay {
          opacity: 1;
        }

        .card-project:hover .project-image-wrapper img {
          transform: scale(1.05);
        }

        .project-info {
          padding: 32px;
        }

        .project-category {
          color: var(--primary);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
          letter-spacing: 0.1em;
        }

        .project-info h4 {
          margin-bottom: 12px;
          font-size: 22px;
          color: var(--accent-1);
        }

        .project-info p {
          color: var(--accent-2);
          font-size: 16px;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .full-width {
          width: 100%;
        }

        .mt-32 {
          margin - top: 32px;
        }

        .show-mobile {
          display: none;
        }

        @media (max-width: 1023px) {
          .show - mobile {
          display: block;
          }
        }
      `}</style>
    </section>
  );
}
