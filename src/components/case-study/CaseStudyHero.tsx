'use client';

import { motion } from 'framer-motion';
import { Smartphone, Cpu, Layers, Palette, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface CaseStudyHeroProps {
    title: string;
    description: string;
    category?: string;
    date?: string;
    mockupImage: string;
    stats?: {
        platform: string;
        stack: string;
        role: string;
    };
}

export default function CaseStudyHero({
    title,
    description,
    category = 'Mobile Development',
    date = '2024',
    mockupImage,
    stats = {
        platform: 'iOS & Android',
        stack: 'React Native',
        role: 'Full Cycle Dev'
    }
}: CaseStudyHeroProps) {
    return (
        <section className="case-hero">
            <div className="container">
                <ScrollReveal direction="down" distance={20}>
                    <div className="breadcrumb-wrapper">
                        <Breadcrumbs />
                    </div>
                </ScrollReveal>

                <div className="hero-grid">
                    <div className="hero-content">
                        <ScrollReveal direction="right" delay={0.1}>
                            <div className="project-metadata">
                                <span className="project-category">
                                    <Smartphone size={16} />
                                    {category}
                                </span>
                                <span className="project-date">{date}</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.2}>
                            <h1 className="hero-title">
                                {title}
                                <span className="title-accent">
                                    <Sparkles size={24} />
                                </span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.3}>
                            <p className="hero-description">
                                {description}
                            </p>
                        </ScrollReveal>

                        <StaggerContainer>
                            <div className="hero-stats">
                                <StaggerItem>
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <Cpu size={20} />
                                        </div>
                                        <div className="stat-content">
                                            <span className="stat-label">Platform</span>
                                            <span className="stat-value">{stats.platform}</span>
                                        </div>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <Layers size={20} />
                                        </div>
                                        <div className="stat-content">
                                            <span className="stat-label">Stack</span>
                                            <span className="stat-value">{stats.stack}</span>
                                        </div>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="stat-card">
                                        <div className="stat-icon">
                                            <Palette size={20} />
                                        </div>
                                        <div className="stat-content">
                                            <span className="stat-label">Role</span>
                                            <span className="stat-value">{stats.role}</span>
                                        </div>
                                    </div>
                                </StaggerItem>
                            </div>
                        </StaggerContainer>
                    </div>

                    <div className="hero-visual">
                        <ScrollReveal direction="left" delay={0.4} duration={0.8}>
                            <div className="mockup-container">
                                <div className="mockup-wrapper">
                                    <img
                                        src={mockupImage}
                                        alt={`${title} Mockup`}
                                        className="hero-mockup"
                                    />
                                    <div className="mockup-glow"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .case-hero {
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .case-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(180deg, 
            var(--background) 0%, 
            rgba(var(--primary-rgb), 0.03) 100%);
          z-index: -1;
        }

        .breadcrumb-wrapper {
          margin-bottom: 40px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .project-metadata {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 14px;
          color: var(--accent-2);
        }

        .project-category {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(var(--primary-rgb), 0.08);
          border: 1px solid rgba(var(--primary-rgb), 0.15);
          border-radius: 20px;
          color: var(--primary);
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .project-category:hover {
          background: rgba(var(--primary-rgb), 0.12);
          transform: translateY(-1px);
        }

        .project-date {
          color: var(--accent-2);
        }

        .hero-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          color: var(--accent-1);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .title-accent {
          color: var(--primary);
          display: inline-flex;
          animation: sparkle 2s ease-in-out infinite;
        }

        .hero-description {
          font-size: 20px;
          line-height: 1.6;
          color: var(--accent-2);
          margin: 0;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 16px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(var(--primary-rgb), 0.05) 50%, 
            transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .stat-card:hover::before {
          transform: translateX(100%);
        }

        .stat-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(var(--primary-rgb), 0.12);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(var(--primary-rgb), 0.08);
          border-radius: 10px;
          color: var(--primary);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          background: rgba(var(--primary-rgb), 0.15);
          transform: scale(1.1);
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-label {
          font-size: 12px;
          color: var(--accent-2);
          font-weight: 500;
        }

        .stat-value {
          font-size: 14px;
          color: var(--accent-1);
          font-weight: 600;
        }

        .hero-visual {
          position: relative;
          max-width: 320px;
          margin: 0 auto;
        }

        .mockup-container {
          position: relative;
        }

        .mockup-wrapper {
          position: relative;
          padding: 20px;
        }

        .hero-mockup {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 2;
          transition: transform 0.6s ease;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
        }

        .hero-mockup:hover {
          transform: scale(1.05) rotateY(5deg);
        }

        .mockup-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, 
            rgba(var(--primary-rgb), 0.3) 0%, 
            rgba(var(--primary-rgb), 0.1) 50%, 
            transparent 100%);
          border-radius: 20px;
          filter: blur(40px);
          z-index: 1;
          animation: glowPulse 4s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-description {
            font-size: 18px;
          }
        }

        @media (max-width: 767px) {
          .case-hero {
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-description {
            font-size: 16px;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}