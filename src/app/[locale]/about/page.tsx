"use client";

import { useTranslations } from 'next-intl';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import InnerHero from '@/components/sections/InnerHero';

export default function AboutPage() {
  const t = useTranslations('About');
  const navT = useTranslations('Navigation');

  const values = [
    {
      title: t('values.items.client.title'),
      description: t('values.items.client.description'),
      icon: <Users size={32} />
    },
    {
      title: t('values.items.quality.title'),
      description: t('values.items.quality.description'),
      icon: <Award size={32} />
    },
    {
      title: t('values.items.innovation.title'),
      description: t('values.items.innovation.description'),
      icon: <TrendingUp size={32} />
    }
  ];

  const team = [
    { name: "Abderrahmane LEBGAA", role: t('team.roles.founding'), avatar: "/images/Abdou.png" },
    { name: "Abdelmoumen NEDJAR", role: t('team.roles.designer'), avatar: "https://i.pravatar.cc/150?u=mike" },
    { name: "Amine AIBA", role: t('team.roles.dev'), avatar: "https://i.pravatar.cc/150?u=mike" }
  ];

  return (
    <main className="about-page">
      <InnerHero
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="section about-content">
        <div className="container grid-2">
          <div className="content-text">
            <h2>{t('who.title')}</h2>
            <p>{t('who.p1')}</p>
            <p>{t('who.p2')}</p>
          </div>
          <div className="content-visual">
            <div className="placeholder-image card">
              <img src="/images/team.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card card">
              <Target size={40} className="card-icon" />
              <h3>{t('mission.title')}</h3>
              <p>{t('mission.description')}</p>
            </div>
            <div className="mission-card card">
              <Target size={40} className="card-icon" />
              <h3>{t('vision.title')}</h3>
              <p>{t('vision.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">{t('values.title')}</h2>
          <div className="values-grid staggered">
            {values.map((value, index) => (
              <div key={index} className="value-card card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">{t('team.title')}</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card text-center">
                <div className="avatar-wrapper">
                  <img src={member.avatar} alt={member.name} className="avatar" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .grid-2 {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .content-text h2 {
          margin-bottom: 24px;
        }

        .content-text p {
          color: var(--accent-2);
          margin-bottom: 20px;
        }

        .placeholder-image {
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
        }

        .mission-vision {
          background: var(--surface);
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        @media (max-width: 767px) {
          .mission-grid {
            grid-template-columns: 1fr;
          }
        }

        .mission-card {
           padding: 48px;
           background: var(--background);
        }

        .card-icon {
          color: var(--primary);
          margin-bottom: 24px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 64px;
          color: var(--accent-1);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        @media (max-width: 1024px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        .value-card {
           background: var(--background);
        }

        .value-icon {
          color: var(--primary);
          margin-bottom: 24px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }

        @media (max-width: 767px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }

        .team-card {
          text-align: center;
        }

        .avatar-wrapper {
          width: 200px;
          height: 200px;
          margin: 0 auto 24px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--surface);
          border: 4px solid var(--surface);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }

        .avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: all 0.4s ease;
        }

        .team-card:hover .avatar {
          filter: grayscale(0%);
          transform: scale(1.1);
        }

        .team-card h3 {
          font-size: 20px;
          margin-bottom: 4px;
          color: var(--accent-1);
        }

        .team-card p {
          color: var(--accent-2);
          font-size: 15px;
        }
      `}</style>
    </main>
  );
}
