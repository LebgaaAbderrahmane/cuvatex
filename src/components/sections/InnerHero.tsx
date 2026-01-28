'use client';

import Breadcrumbs from '../ui/Breadcrumbs';
import Spotlight from '../ui/Spotlight';
import { Sparkles, Star, Circle, Triangle, Layers, Database } from 'lucide-react';

interface InnerHeroProps {
  title: string;
  subtitle: string;
  cta?: React.ReactNode;
}

export default function InnerHero({ title, subtitle, cta }: InnerHeroProps) {
  return (
    <section className="inner-hero">
      {/* <Spotlight color="rgba(255, 255, 255, 0.1)" /> */}

      <div className="inner-hero-decorations">
        <div className="decoration-item decor-1"><Layers size={24} /></div>
        <div className="decoration-item decor-2"><Database size={20} /></div>
        <div className="decoration-item decor-3"><Circle size={16} /></div>
        <div className="decoration-item decor-4"><Triangle size={18} /></div>
      </div>

      <div className="container">
        <div className="hero-card">
          <Breadcrumbs />
          <h1 className="hero-title-responsive">{title}</h1>
          <p className="hero-subtitle-responsive">{subtitle}</p>
          {cta && <div className="inner-hero-cta">{cta}</div>}
        </div>
      </div>

      <style jsx>{`
        .inner-hero {
          background: transparent;
          padding: 90px 0 100px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          position: relative;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
          overflow: visible;
        }

        .inner-hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .inner-hero-background :global(svg) {
          color: rgba(255, 255, 255, 0.15);
          fill: transparent;
        }

        .inner-hero :global(.container) {
          position: relative;
          z-index: 1;
          text-align: left;
          width: 100%;
          max-width: var(--max-width);
          margin: 0 auto;
          padding-left: var(--container-padding);
          padding-right: var(--container-padding);
        }

        .inner-hero :global(.hero-title-responsive),
        .inner-hero :global(.hero-subtitle-responsive) {
          color: #FFFFFF;
        }

        .inner-hero :global(.hero-subtitle-responsive) {
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
        }

        .hero-card {
          background: #09524C;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 60px;
          border-radius: 32px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 2;
        }

        .inner-hero-decorations {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .decoration-item {
          position: absolute;
          color: rgba(255, 255, 255, 0.2);
          filter: blur(0.5px);
        }

        .decor-1 { top: 15%; right: 10%; animation: float 6s infinite ease-in-out; }
        .decor-2 { bottom: 20%; left: 5%; animation: float 8s infinite ease-in-out 1s; }
        .decor-3 { top: 40%; left: 15%; animation: float 7s infinite ease-in-out 0.5s; }
        .decor-4 { bottom: 40%; right: 15%; animation: float 9s infinite ease-in-out 1.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        .inner-hero-cta {
          margin-top: 32px;
        }

        @media (max-width: 767px) {
          .inner-hero {
            padding: 100px 0 60px;
            min-height: 320px;
          }
          
          .hero-card {
            padding: 32px 24px;
            border-radius: 20px;
          }

          .inner-hero-cta {
            margin-top: 24px;
          }
        }
      `}</style>
    </section>
  );
}
