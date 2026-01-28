import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Cuvatex',
  description: 'Cuvatex Landing Page',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import LoadingScreen from '@/components/ui/LoadingScreen';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import "../globals.css";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className="js-loading">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                var selectedTheme = theme || 'system';
                var activeTheme = selectedTheme === 'system' ? systemTheme : selectedTheme;
                document.documentElement.setAttribute('data-theme', activeTheme);
                document.documentElement.classList.add('js-loading');
              })();
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
               .js-loading body { overflow: hidden !important; }
               .js-loading #main-content, .js-loading nav, .js-loading footer { 
                 opacity: 0 !important; 
                 visibility: hidden !important; 
               }
             `
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            <LoadingScreen />
            <Navbar />
            <div id="main-content">
              {children}
            </div>
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
