"use client";

import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TestimonialsSection() {
  const t = useTranslations('Testimonials');

  const avatars = [
    "https://i.pravatar.cc/150?u=sarah",
    "https://i.pravatar.cc/150?u=michael",
    "https://i.pravatar.cc/150?u=david",
    "https://i.pravatar.cc/150?u=elena"
  ];

  const testimonials = t.raw('items') as Array<{ quote: string, author: string, position: string }>;

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <ScrollReveal direction="up" delay={0.1}>
            <h2>{t('title')}</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p>{t('subtitle')}</p>
          </ScrollReveal>
        </div>

        <div className="testimonials-grid staggered">
          {testimonials.map((tr, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.3 + index * 0.1}
              distance={30}
            >
              <div className="testimonial-card card">
                <div className="quote-icon-wrapper">
                  <Quote size={40} className="quote-icon" />
                </div>
                <p className="quote-text">{tr.quote}</p>
                <div className="author-info">
                  <img src={avatars[index]} alt={tr.author} className="author-photo" />
                  <div className="author-meta">
                    <div className="author-name">{tr.author}</div>
                    <div className="author-position">{tr.position}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--surface);
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          margin-bottom: 20px;
        }

        .section-header p {
          color: var(--accent-2);
          font-size: 18px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
        }

        @media (max-width: 1023px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 700px;
            margin: 0 auto;
          }
        }

        .testimonial-card {
          padding: 48px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: var(--background);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .quote-icon-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .quote-icon {
          color: var(--primary);
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover .quote-icon {
          opacity: 0.3;
          transform: scale(1.1);
        }

        .quote-text {
          font-size: 18px;
          line-height: 1.8;
          color: var(--accent-1);
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .author-photo {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--surface);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover .author-photo {
          transform: scale(1.05);
          border-color: var(--primary);
        }

        .author-name {
          font-weight: 700;
          color: var(--accent-1);
          font-size: 16px;
          margin-bottom: 2px;
        }

        .author-position {
          color: var(--accent-2);
          font-size: 14px;
        }
      `}</style>
    </section>
  );
}