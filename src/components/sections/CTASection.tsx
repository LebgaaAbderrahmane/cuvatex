'use client';

import { useTranslations } from 'next-intl';

export default function CTASection() {
    const t = useTranslations('Index');

    return (
        <section className="section cta-section">
            <div className="container">
                <div className="cta-box">
                    <h2>Ready to build your next big idea?</h2>
                    <p>Let's talk about your project and how we can help you scale.</p>
                    <button className="btn btn-white">Start Your Project</button>
                </div>
            </div>

            <style jsx>{`
        .cta-section {
          padding-bottom: 120px;
        }

        .cta-box {
          background: var(--primary);
          padding: 80px 40px;
          border-radius: 24px;
          text-align: center;
          color: var(--white);
        }

        .cta-box h2 {
          font-size: clamp(32px, 5vw, 48px);
          margin-bottom: 24px;
        }

        .cta-box p {
          font-size: 1.25rem;
          margin-bottom: 40px;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-white {
          background: var(--white);
          color: var(--primary);
          padding: 16px 40px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.125rem;
          transition: var(--transition-smooth);
        }

        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
      `}</style>
        </section>
    );
}
