'use client';

import { useTranslations } from 'next-intl';
import InnerHero from '@/components/sections/InnerHero';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TermsOfService() {
    const t = useTranslations('Terms');

    return (
        <main className="terms-page">
            <InnerHero
                title={t('title')}
                subtitle={t('subtitle')}
            />

            <section className="section py-80">
                <div className="container">
                    <ScrollReveal>
                        <div className="content-narrow">
                            <p className="last-updated mb-40">{t('last_updated')}</p>

                            <div className="terms-content">
                                <section className="terms-section">
                                    <h2>1. Acceptance of Terms</h2>
                                    <p>
                                        By accessing or using the services provided by Cuvatex, you agree to be bound by these
                                        Terms of Service. If you do not agree to these terms, please do not use our services.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h2>2. Description of Service</h2>
                                    <p>
                                        Cuvatex provides software development, design, and consulting services. We reserve
                                        the right to modify or discontinue any aspect of our services at any time.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h2>3. User Obligations</h2>
                                    <p>
                                        You agree to provide accurate, current, and complete information when communicating
                                        with us and to use our services only for lawful purposes in accordance with these Terms.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h2>4. Intellectual Property</h2>
                                    <p>
                                        Unless otherwise agreed in a separate contract, all intellectual property rights related
                                        to the software and designs created by Cuvatex remain the property of Cuvatex until full
                                        payment is received, at which point rights are transferred as specified in the service agreement.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h2>5. Limitation of Liability</h2>
                                    <p>
                                        Cuvatex shall not be liable for any indirect, incidental, special, consequential, or
                                        punitive damages resulting from your use of or inability to use our services.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h2>6. Termination</h2>
                                    <p>
                                        We reserve the right to terminate or suspend your access to our services at our sole
                                        discretion, without notice, for conduct that we believe violates these Terms of Service.
                                    </p>
                                </section>

                                <section className="terms-section">
                                    <h2>7. Governing Law</h2>
                                    <p>
                                        These terms shall be governed by and construed in accordance with the laws of the
                                        jurisdiction in which Cuvatex operates, without regard to its conflict of law principles.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <style jsx>{`
        .terms-page {
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

        .terms-content h2 {
          color: var(--accent-1);
          font-size: 28px;
          margin: 40px 0 20px;
          font-weight: 700;
        }

        .terms-content p {
          color: var(--accent-2);
          line-height: 1.8;
          font-size: 17px;
          margin-bottom: 24px;
        }

        .terms-section {
          margin-bottom: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border);
        }

        .terms-section:last-child {
          border-bottom: none;
        }

        @media (max-width: 767px) {
          .terms-content h2 {
            font-size: 24px;
          }
          .terms-content p {
            font-size: 16px;
          }
        }
      `}</style>
        </main>
    );
}
