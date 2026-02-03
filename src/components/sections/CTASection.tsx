'use client';

import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function CTASection() {
  const t = useTranslations('Index');

  return (
    <section className="section cta-section">
      <div className="container">
        <ScrollReveal>
          <div className="cta-box">
            <h2>Ready to build your next big idea?</h2>
            <p>Let's talk about your project and how we can help you scale.</p>
            <button className="btn-white">Start Your Project</button>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .cta-section {
          padding-bottom: 120px;
        }

        .cta-box {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          padding: 80px 40px;
          border-radius: 32px;
          text-align: center;
          color: #fff;
          box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.2);
        }

        .cta-box h2 {
          font-size: clamp(32px, 5vw, 48px);
          margin-bottom: 24px;
          color: #fff;
        }

        .cta-box p {
          font-size: 1.25rem;
          margin-bottom: 40px;
          opacity: 0.95;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-white {
          background: #fff;
          color: var(--primary);
          padding: 18px 48px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .btn-white:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          color: var(--primary-dark);
        }
      `}</style>
    </section>
  );
}
