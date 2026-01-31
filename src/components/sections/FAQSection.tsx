'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('FAQ');
  const faqs = t.raw('items') as { question: string; answer: string }[];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>

        <div className="faq-list staggered">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={20} className="chevron" />
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background: transparent;
          padding-bottom: 100px;
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

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
        }

        .faq-question {
          width: 100%;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--accent-1);
          text-align: left;
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: var(--primary);
        }

        .faq-item.active .faq-question {
          color: var(--primary);
        }

        .chevron {
          transition: transform 0.3s ease;
          color: var(--placeholder);
        }

        .faq-item.active .chevron {
          transform: rotate(180deg);
          color: var(--primary);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item.active .faq-answer {
          max-height: 400px;
        }

        .faq-answer-inner {
          padding-bottom: 32px;
          color: var(--accent-2);
          line-height: 1.8;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}
