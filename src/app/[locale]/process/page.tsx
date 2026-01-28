"use client";

import { useTranslations } from 'next-intl';
import InnerHero from '@/components/sections/InnerHero';
import ProcessSection from '@/components/sections/ProcessSection';

export default function ProcessPage() {
  const t = useTranslations('ProcessPage');
  return (
    <main className="process-page">
      <InnerHero
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <section className="section-no-top-padding">
        <ProcessSection />
      </section>

      <style jsx>{`
        .section-no-top-padding {
          padding-bottom: 80px;
        }

        /* Hide the ProcessSection title when used on this page if needed, 
           or keep it for structure. I'll keep it as it looks good. */
      `}</style>
    </main>
  );
}
