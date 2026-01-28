"use client";

import { useTranslations } from 'next-intl';
import InnerHero from '@/components/sections/InnerHero';
import FAQSection from '@/components/sections/FAQSection';

export default function FAQPage() {
    const t = useTranslations('FAQPage');
    return (
        <main className="faq-page">
            <InnerHero
                title={t('title')}
                subtitle={t('subtitle')}
            />
            <section className="section-no-top-padding">
                <FAQSection />
            </section>

            <style jsx>{`
        .section-no-top-padding {
          padding-bottom: 80px;
        }
      `}</style>
        </main>
    );
}
