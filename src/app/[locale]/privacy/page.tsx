'use client';

import { useTranslations } from 'next-intl';
import InnerHero from '@/components/sections/InnerHero';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PrivacyPolicy() {
    const t = useTranslations('Privacy');

    return (
        <main className="privacy-page">
            <InnerHero
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <section className="section py-80">
                <div className="container">
                    <ScrollReveal>
                        <div className="content-narrow">
                            <p className="last-updated mb-40">{t('last_updated')}</p>

                            <div className="policy-content">
                                <section className="policy-section">
                                    <h2>1. Information We Collect</h2>
                                    <p>
                                        We collect information that you provide directly to us, such as when you fill out a contact form,
                                        email us, or communicate with us via WhatsApp. This may include your name, email address,
                                        company name, and any other information you choose to provide.
                                    </p>
                                </section>

                                <section className="policy-section">
                                    <h2>2. How We Use Your Information</h2>
                                    <p>
                                        We use the information we collect to:
                                    </p>
                                    <ul>
                                        <li>Provide, maintain, and improve our services;</li>
                                        <li>Respond to your comments, questions, and requests;</li>
                                        <li>Develop new products and services;</li>
                                        <li>Communicate with you about products, services, offers, and events;</li>
                                        <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                                    </ul>
                                </section>

                                <section className="policy-section">
                                    <h2>3. Data Protection</h2>
                                    <p>
                                        We take reasonable measures to help protect information about you from loss, theft,
                                        misuse, and unauthorized access, disclosure, alteration, and destruction.
                                    </p>
                                </section>

                                <section className="policy-section">
                                    <h2>4. Third-Party Services</h2>
                                    <p>
                                        We may use third-party service providers to help us operate our business or administer
                                        activities on our behalf, such as sending out newsletters or surveys.
                                    </p>
                                </section>

                                <section className="policy-section">
                                    <h2>5. Your Rights</h2>
                                    <p>
                                        Depending on your location, you may have certain rights regarding your personal data,
                                        including the right to access, correct, or delete the information we hold about you.
                                    </p>
                                </section>

                                <section className="policy-section">
                                    <h2>6. Contact Us</h2>
                                    <p>
                                        If you have any questions about this Privacy Policy, please contact us at hello@cuvatex.com.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <style jsx>{`
        .privacy-page {
          background: var(--background);
        }
        
        .last-updated {
          color: var(--placeholder);
          font-style: italic;
          font-size: 14px;
        }

        .content-narrow {
          max-width: 900px;
          margin: 0 auto;
        }

        .policy-content h2 {
          color: var(--accent-1);
          font-size: 28px;
          margin: 40px 0 20px;
          font-weight: 700;
        }

        .policy-content p {
          color: var(--accent-2);
          line-height: 1.8;
          font-size: 17px;
          margin-bottom: 24px;
        }

        .policy-content ul {
          margin-bottom: 32px;
          padding-left: 20px;
        }

        .policy-content li {
          color: var(--accent-2);
          line-height: 1.8;
          font-size: 17px;
          margin-bottom: 12px;
          position: relative;
        }

        .policy-section {
          margin-bottom: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border);
        }

        .policy-section:last-child {
          border-bottom: none;
        }

        @media (max-width: 767px) {
          .policy-content h2 {
            font-size: 24px;
          }
          .policy-content p, .policy-content li {
            font-size: 16px;
          }
        }
      `}</style>
        </main>
    );
}
