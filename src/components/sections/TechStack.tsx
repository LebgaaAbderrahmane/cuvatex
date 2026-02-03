"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

const techItems = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Postgres", slug: "postgresql" },
  { name: "Flutter", slug: "flutter" },
  { name: "Python", slug: "python" },
  { name: "Firebase", slug: "firebase" },
  { name: "Docker", slug: "docker" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Auth0", slug: "auth0" },
  { name: "Stripe", slug: "stripe" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
];

export default function TechStack() {
  const t = useTranslations('TechStack');

  return (
    <section className="tech-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </div>

      <div className="marquee-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative', display: 'flex' }}>
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>

        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '24px',
            width: 'max-content',
            padding: '40px 0'
          }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40, // Even slower for a more premium, cinematic feel
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Repeating for infinite loop */}
          {[...techItems, ...techItems, ...techItems].map((item, i) => (
            <div className="tech-item-card" key={i}>
              <div className="icon-box">
                <img
                  src={`https://cdn.simpleicons.org/${item.slug}`}
                  alt={item.name}
                />
              </div>
              <span className="label">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .tech-section {
          padding: 80px 0;
          overflow: hidden;
          background: transparent;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--accent-1);
        }

        .subtitle {
          font-size: 18px;
          color: var(--accent-2);
          max-width: 600px;
          margin: 0 auto;
        }

        .tech-item-card {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 140px;
          height: 140px;
          padding: 20px;
          background: var(--surface);
          backdrop-filter: blur(90px);
          border: 1px solid rgba(var(--primary-rgb), 0.1);
          border-radius: 20px;
          color: var(--accent-1);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
          cursor: default;
        }

        :global([data-theme="dark"]) .tech-item-card {
           background: rgba(255, 255, 255, 0.02);
           border-color: rgba(255, 255, 255, 0.05);
           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .tech-item-card:hover {
          background: rgba(var(--primary-rgb), 0.1);
          border-color: var(--primary);
          transform: translateY(-8px) scale(1.02);
          color: var(--primary);
          box-shadow: 0 12px 40px rgba(var(--primary-rgb), 0.15);
        }

        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          transition: transform 0.4s ease;
        }

        .icon-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .tech-item-card:hover .icon-box {
          transform: scale(1.1) rotate(5deg);
        }

        .label {
          font-size: 15px;
          letter-spacing: -0.01em;
          opacity: 0.9;
        }

        .marquee-fade-left,
        .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15vw;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, var(--background), transparent);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, var(--background), transparent);
        }

        @media (max-width: 768px) {
          .title { font-size: 32px; }
          .tech-item-card {
            width: 110px;
            height: 110px;
            padding: 15px;
            font-size: 14px;
            gap: 12px;
          }
          .icon-box {
            width: 36px;
            height: 36px;
          }
          .label {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}