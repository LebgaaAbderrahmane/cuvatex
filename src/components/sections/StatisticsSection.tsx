'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Target, Users, Rocket, Trophy } from 'lucide-react';

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export default function StatisticsSection() {
  const t = useTranslations('Statistics');

  const stats = [
    { id: 1, label: t('projects'), value: 120, suffix: '+', icon: Rocket },
    { id: 2, label: t('clients'), value: 85, suffix: '+', icon: Users },
    { id: 3, label: t('success'), value: 99, suffix: '%', icon: Target },
    { id: 4, label: t('awards'), value: 12, suffix: '', icon: Trophy },
  ];

  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid staggered">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card card">
              <div className="stat-icon-wrapper">
                <stat.icon size={28} />
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background: var(--surface);
          position: relative;
          z-index: 10;
          margin-top: -64px;
          padding-bottom: 64px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          border: 1px solid var(--border);
          background: var(--background);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
        }

        .stat-icon-wrapper {
          width: 56px;
          height: 56px;
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-number {
          font-size: 32px;
          font-weight: 700;
          color: var(--accent-1);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--accent-2);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1023px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .stats-section {
            margin-top: -48px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
          .stat-card {
             padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
