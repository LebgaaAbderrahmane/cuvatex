import ContactSection from '@/components/sections/ContactSection';
import InnerHero from '@/components/sections/InnerHero';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <main>
            <InnerHero
                title={t('title')}
                subtitle={t('subtitle')}
            />
            <ContactSection />
        </main>
    );
}
