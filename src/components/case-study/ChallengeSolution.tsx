'use client';

import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ChallengeSolutionProps {
  subtitle?: string;
  title?: string;
  problem: {
    icon: LucideIcon;
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    icon: LucideIcon;
    title: string;
    description: string;
    points: string[];
  };
}

export default function ChallengeSolution({
  subtitle = 'The Challenge',
  title = 'Creating Digital Sanctuary',
  problem,
  solution
}: ChallengeSolutionProps) {
  const ProblemIcon = problem.icon;
  const SolutionIcon = solution.icon;

  return (
    <section className="section challenge-section">
      <div className="container">
        <ScrollReveal direction="up" distance={30}>
          <div className="section-header">
            <span className="section-subtitle">{subtitle}</span>
            <h2 className="section-title">{title}</h2>
          </div>
        </ScrollReveal>

        <div className="challenge-grid">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="challenge-card problem-card">
              <div className="card-header">
                <div className="problem-icon">
                  <div className="icon-bg"></div>
                  <ProblemIcon size={24} />
                </div>
                <h3>{problem.title}</h3>
              </div>
              <div className="card-content">
                <p>{problem.description}</p>
                <ul className="problem-list">
                  {problem.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="challenge-card solution-card">
              <div className="card-header">
                <div className="solution-icon">
                  <div className="icon-bg"></div>
                  <SolutionIcon size={24} />
                </div>
                <h3>{solution.title}</h3>
              </div>
              <div className="card-content">
                <p>{solution.description}</p>
                <ul className="solution-list">
                  {solution.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: var(--section-padding) 0;
        }

        .challenge-section {
          background: var(--background);
          position: relative;
          overflow: hidden;
        }

        .challenge-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, 
            rgba(var(--primary-rgb), 0.03) 0%, 
            transparent 70%);
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .container {
          position: relative;
          z-index: 1;
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
          position: relative;
          padding-left: 24px;
        }

        .section-subtitle::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 16px;
          height: 2px;
          background: var(--primary);
          transform: translateY(-50%);
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--accent-1);
          line-height: 1.2;
          margin: 0;
        }

        .challenge-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .challenge-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .challenge-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .problem-card::before {
          background: linear-gradient(90deg, #EF4444, #F87171);
        }

        .solution-card::before {
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
        }

        .challenge-card:hover::before {
          transform: scaleX(1);
        }

        .challenge-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .problem-card:hover {
          border-color: rgba(239, 68, 68, 0.3);
        }

        .solution-card:hover {
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .card-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--accent-1);
          margin: 0;
        }

        .problem-icon,
        .solution-icon {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .challenge-card:hover .problem-icon,
        .challenge-card:hover .solution-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .problem-icon {
          color: #EF4444;
        }

        .solution-icon {
          color: var(--primary);
        }

        .icon-bg {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          opacity: 0.1;
          z-index: -1;
          transition: all 0.3s ease;
        }

        .challenge-card:hover .icon-bg {
          opacity: 0.2;
          transform: scale(1.1);
        }

        .problem-icon .icon-bg {
          background: #EF4444;
        }

        .solution-icon .icon-bg {
          background: var(--primary);
        }

        .card-content p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--accent-2);
          margin: 0 0 20px;
        }

        .problem-list,
        .solution-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .problem-list li,
        .solution-list li {
          font-size: 15px;
          color: var(--accent-2);
          padding-left: 28px;
          position: relative;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .problem-list li:hover,
        .solution-list li:hover {
          transform: translateX(4px);
        }

        .problem-list li:hover {
          color: #EF4444;
        }

        .solution-list li:hover {
          color: var(--primary);
        }

        .problem-list li::before {
          content: '✕';
          position: absolute;
          left: 0;
          color: #EF4444;
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .solution-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .problem-list li:hover::before,
        .solution-list li:hover::before {
          transform: scale(1.2);
        }

        @media (max-width: 1023px) {
          .section-title {
            font-size: 36px;
          }

          .challenge-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 28px;
          }

          .challenge-card {
            padding: 28px;
          }

          .card-header h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}