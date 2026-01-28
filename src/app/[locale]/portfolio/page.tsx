'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import InnerHero from '@/components/sections/InnerHero';

export default function PortfolioPage() {
  const t = useTranslations('PortfolioDetail');
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: "fintech",
      title: t('projects.fintech.title'),
      category: "Web",
      description: t('projects.fintech.description'),
      tech: "Next.js, Node.js, PostgreSQL",
      image: "/images/fintech.jpg",
    },
    {
      id: "ecommerce",
      title: t('projects.ecommerce.title'),
      category: "Mobile",
      description: t('projects.ecommerce.description'),
      tech: "React Native, Firebase",
      image: "/images/heathcare.jpg",
    },
    {
      id: "ai_manager",
      title: t('projects.ai_manager.title'),
      category: "SaaS",
      description: t('projects.ai_manager.description'),
      tech: "Python, React, AWS",
      image: "/images/AI SaaS Dashboard.jpg",
    },
    {
      id: "delivery",
      title: t('projects.delivery.title'),
      category: "Mobile",
      description: t('projects.delivery.description'),
      tech: "Flutter, Google Maps API",
      image: "/images/E-learning Experience.jpg",
    }
  ];

  const categories = [
    { id: 'All', label: t('categories.all') },
    { id: 'Web', label: t('categories.web') },
    { id: 'Mobile', label: t('categories.mobile') },
    { id: 'SaaS', label: t('categories.saas') }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <main className="portfolio-page">
      <InnerHero
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="section portfolio-grid-section">
        <div className="container">
          <div className="filter-bar-container">
            <div className="filter-bar">
              {categories.map(cat => {
                const isSelected = filter === cat.id;
                return (
                  <button
                    key={cat.id}
                    className={`filter-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => setFilter(cat.id)}
                  >
                    <span className="btn-text">{cat.label}</span>
                    {isSelected && (
                      <motion.div
                        layoutId="active-pill"
                        className="active-pill"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card card-project">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="overlay">
                    <ExternalLink size={24} color="#FFF" />
                  </div>
                </div>
                <div className="project-info">
                  <span className="cat">{t(`categories.${project.category.toLowerCase()}`)}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.split(', ').map(techItem => (
                      <span key={techItem} className="tech-tag">{techItem}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .filter-bar-container {
          display: flex;
          justify-content: center;
          margin-bottom: 64px;
        }

        .filter-bar {
          display: flex;
          background: #F1F5F9;
          padding: 6px;
          border-radius: 99px;
          gap: 4px;
          position: relative;
        }

        :global([data-theme="dark"]) .filter-bar {
          background: #1E293B;
        }

        .filter-btn {
          position: relative;
          padding: 10px 24px;
          border-radius: 99px;
          font-weight: 600;
          font-size: 14px;
          color: #64748B;
          transition: color 0.3s ease;
          border: none;
          background: transparent;
          cursor: pointer;
          outline: none;
        }

        .filter-btn.active {
          color: #FFFFFF;
          background-color: var(--primary);
        }

        :global([data-theme="dark"]) .filter-btn {
          color: #94A3B8;
        }

        :global([data-theme="dark"]) .filter-btn.active {
          color: #FFFFFF;
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .active-pill {
          position: absolute;
          inset: 0;
          background: var(--primary);
          border-radius: 99px;
          z-index: 1;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        @media (max-width: 1023px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        .project-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
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
          background: rgba(9, 82, 76, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }

        .project-card:hover .project-image-wrapper img {
          transform: scale(1.05);
        }

        .project-info {
          padding: 32px;
        }

        .cat {
          display: inline-block;
          color: #09524C;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.05em;
        }

        .project-info h3 {
          margin-bottom: 12px;
        }

        .project-info p {
          color: #64748B;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 12px;
          font-weight: 500;
          background: #F1F5F9;
          color: #475569;
          padding: 4px 12px;
          border-radius: 99px;
        }
      `}</style>
    </main>
  );
}
