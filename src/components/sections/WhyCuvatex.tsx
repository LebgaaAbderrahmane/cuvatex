"use client";

import { useTranslations } from 'next-intl';
import { Shield, Zap, TrendingUp, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyCuvatex() {
  const t = useTranslations('WhyCuvatex');

  const icons = [
    <Shield size={32} key="shield" />,
    <Zap size={32} key="zap" />,
    <TrendingUp size={32} key="trending" />,
    <Cpu size={32} key="cpu" />
  ];

  const items = t.raw('items') as Array<{ title: string, description: string }>;

  return (
    <section className="section why-cuvatex">
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        <div className="values-grid">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="value-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">{icons[index % icons.length]}</div>
              <div className="value-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-cuvatex {
          background: var(--white);
        }

        .section-title {
          text-align: center;
          margin-bottom: 80px;
        }

        .values-grid {
          display: flex;
          flex-direction: column;
          gap: 60px;
          max-width: 900px;
          margin: 0 auto;
        }

        .value-item {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        @media (max-width: 640px) {
          .value-item {
            flex-direction: column;
            gap: 20px;
          }
        }

        .value-icon {
          color: var(--primary);
          flex-shrink: 0;
          padding-top: 5px;
        }

        .value-content h3 {
          margin-bottom: 12px;
          font-size: 1.5rem;
        }

        .value-content p {
          color: var(--foreground-muted);
          font-size: 1.125rem;
        }
      `}</style>
    </section>
  );
}
