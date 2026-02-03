'use client';

import ContactSection from '@/components/sections/ContactSection';
import InnerHero from '@/components/sections/InnerHero';
import FloatingIcons from '@/components/ui/FloatingIcons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <main>
            <FloatingIcons icons={[Mail, MessageCircle, Phone, Send]} count={10} opacity={0.03} />
            <InnerHero
                title={t('title')}
                subtitle={t('subtitle')}
            />
            <ContactSection />
        </main>
    );
}
