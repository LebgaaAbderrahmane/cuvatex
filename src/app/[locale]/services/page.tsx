"use client";

import { useTranslations } from 'next-intl';
import { Smartphone, Rocket, Shield, Zap, Layout, Code, Database, Server, ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import InnerHero from '@/components/sections/InnerHero';
import styles from './services.module.css';

export default function ServicesPage() {
  const t = useTranslations('ServicesDetail');

  const services = [
    {
      title: t('web.title'),
      description: t('web.description'),
      icon: <Code size={40} />,
      features: t.raw('web.features') as string[]
    },
    {
      title: t('mobile.title'),
      description: t('mobile.description'),
      icon: <Smartphone size={40} />,
      features: t.raw('mobile.features') as string[]
    },
    {
      title: t('mvp.title'),
      description: t('mvp.description'),
      icon: <Rocket size={40} />,
      features: t.raw('mvp.features') as string[]
    }
  ];

  const infrastructureServices = [
    { title: t('infrastructure.items.design'), icon: <Layout size={24} /> },
    { title: t('infrastructure.items.cloud'), icon: <Server size={24} /> },
    { title: t('infrastructure.items.scalability'), icon: <Zap size={24} /> },
    { title: t('infrastructure.items.db'), icon: <Database size={24} /> },
    { title: t('infrastructure.items.security'), icon: <Shield size={24} /> },
  ];

  return (
    <main className="services-page">
      <InnerHero
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className={`section ${styles.servicesGridSection}`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={`card staggered ${styles.serviceCard}`}>
                <div className={styles.cardIconWrapper}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.cardFeatures}>
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <ChevronRight size={14} className={styles.featureIcon} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-tertiary">{t('learn_more')}</Link>
              </div>
            ))}
          </div>

          <div className={styles.secondaryServices}>
            <h4 className={styles.secondaryTitle}>{t('infrastructure.title')}</h4>
            <div className={styles.asGrid}>
              {infrastructureServices.map((as, i) => (
                <div key={i} className={`card ${styles.asTag}`}>
                  {as.icon}
                  <span>{as.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
