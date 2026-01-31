'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, ChevronDown, MessageCircle, Code, Cpu, Globe, Zap, Layers } from 'lucide-react';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ProjectsSnapshot from '@/components/sections/ProjectsSnapshot';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TechStack from '@/components/sections/TechStack';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import Spotlight from '@/components/ui/Spotlight';

export default function Home() {
  const t = useTranslations('Index');
  const whatappNumber = "+213796269301"; // Placeholder
  const whatappLink = `https://wa.me/${whatappNumber.replace('+', '')}`;

  return (
    <main>
      <section className="hero">
        <div className="hero-background-pattern">
          <div className="floating-elements">
            <div className="float-item item-1"><Code size={40} /></div>
            <div className="float-item item-2"><Cpu size={32} /></div>
            <div className="float-item item-3"><Globe size={36} /></div>
            <div className="float-item item-4"><Zap size={28} /></div>
            {/* <div className="float-item item-5"><Layers size={44} /></div> */}
          </div>
        </div>

        <div className="container hero-container fade-in">
          <div className="hero-content">
            <span className="badge">{t('hero.badge')}</span>
            <h1 className="hero-title-responsive">
              {t('hero.title_start')}<span className="text-primary-gradient">{t('hero.title_highlight')}</span>
            </h1>
            <p className="hero-subtitle-responsive">
              {t('hero.subtitle')}
            </p>
            <div className="hero-actions">
              <a href={whatappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary ">
                <MessageCircle size={20} />
                {t('hero.cta_start')}
              </a>
              <Link href="/portfolio" className="btn btn-secondary btn-lg">
                {t('hero.cta_explore')}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          {/* <div className="scroll-indicator">
            <ChevronDown size={32} />
          </div> */}
        </div>
      </section>

      <StatisticsSection />

      <ServicesPreview />
      <ProjectsSnapshot />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <TechStack />
      <FAQSection />
      <ContactSection />

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          padding: 120px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background-pattern {
          position: absolute;
          height: 100%;
          width: 100%;
          inset: 0;
          z-index: 1;
        }

        .gradient-sphere {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 70%;
          height: 70%;
          background: radial-gradient(circle, rgba(9, 82, 76, 0.12) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
        }

        .gradient-sphere-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(9, 82, 76, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
        }

        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }

        .float-item {
          position: absolute;
          color: var(--primary);
          opacity: 0.1;
          filter: blur(0.5px);
        }

        .item-1 { top: 15%; left: 10%; animation: float 6s infinite ease-in-out; }
        .item-2 { top: 25%; right: 15%; animation: float 8s infinite ease-in-out 1s; }
        .item-3 { bottom: 20%; left: 15%; animation: float 7s infinite ease-in-out 0.5s; }
        .item-4 { bottom: 30%; right: 10%; animation: float 9s infinite ease-in-out 1.5s; }
        .item-5 { top: 60%; left: 50%; animation: float 10s infinite ease-in-out 2s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .text-primary-gradient {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(9, 82, 76, 0.08);
          color: var(--primary);
          border: 1px solid rgba(9, 82, 76, 0.1);
          border-radius: 99px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 16px;
        }

        .btn-lg {
          padding: 14px 32px;
          font-size: 16px;
          border-radius: 12px;
          height: auto;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--placeholder);
          animation: bounce 2s infinite;
          opacity: 0.8;
          z-index: 10;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -10px); }
          60% { transform: translate(-50%, -5px); }
        }

        @media (max-width: 767px) {
          .hero {
            padding-bottom: 180px;
            padding-top: 100px;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          
          :global(.btn-lg) {
            width: 100%;
            max-width: 320px;
          }

          // .scroll-indicator {
          //   bottom: 24px;
          // }
        }
      `}</style>
    </main >
  );
}
