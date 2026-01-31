import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
const siteUrl = 'https://cuvatex.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: 'Cuvatex – Next-Gen Software Development Agency',
    description: 'Bespoke digital solutions for startups and enterprises.',
    url: siteUrl,
    siteName: 'Cuvatex',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cuvatex Branding',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cuvatex – Next-Gen Software Development Agency',
    description: 'Bespoke digital solutions for startups and enterprises.',
    images: [`${siteUrl}/og-image.jpg`],
  },
};

import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Spotlight from '@/components/ui/Spotlight';
import ScrollHoverObserver from '@/components/ui/ScrollHoverObserver';
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
  // Keep layout LTR even for Arabic as requested
  const dir = 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className="js-loading">
      <head>
        {/* ===== DISCORD / OPEN GRAPH (STATIC, ROOT) ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cuvatex" />
        <meta
          property="og:title"
          content="Cuvatex – Next-Gen Software Development Agency"
        />
        <meta
          property="og:description"
          content="Bespoke digital solutions for startups and enterprises."
        />
        <meta
          property="og:url"
          content="https://cuvatex.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://cuvatex.netlify.app/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ===== TWITTER (DISCORD READS THIS TOO) ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cuvatex – Next-Gen Software Development Agency"
        />
        <meta
          name="twitter:description"
          content="Bespoke digital solutions for startups and enterprises."
        />
        <meta
          name="twitter:image"
          content="https://cuvatex.netlify.app/og-image.jpg"
        />

        {/* ===== YOUR THEME SCRIPT (KEEP) ===== */}
        <script
          id="theme-strategy-script"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          try {
            var theme = localStorage.getItem('theme');
            var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            var selectedTheme = theme || 'system';
            var activeTheme = selectedTheme === 'system' ? systemTheme : selectedTheme;
            document.documentElement.setAttribute('data-theme', activeTheme);
            document.documentElement.classList.add('js-loading');
          } catch (e) {}
        })();
      `,
          }}
        />

        {/* ===== CRITICAL STYLES ===== */}
        <style
          id="critical-path-styles"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `.js-loading body { overflow: hidden !important; }
        .js-loading #main-content,
        .js-loading nav,
        .js-loading footer {
          opacity: 0 !important;
          visibility: hidden !important;
        }
        .global-glow-container {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
        }
        .global-gradient-sphere {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 70%;
          height: 70%;
          background: radial-gradient(circle, rgba(9, 82, 76, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
        }
        .global-gradient-sphere-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(9, 82, 76, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
        }
        section, footer, nav {
          position: relative;
          z-index: 10;
        }
        .hero {
          background: transparent !important;
        }
        * {
          box-sizing: border-box;
        }`,
          }}
        />
      </head>

      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            <div className="global-glow-container">
              <Spotlight color="rgba(9, 82, 76, 0.1)" />
              <div className="global-gradient-sphere" />
              <div className="global-gradient-sphere-2" />
            </div>
            <LoadingScreen />
            <Navbar />
            <div id="main-content">
              {children}
            </div>
            <Footer />
            <ScrollToTop />
            <ScrollHoverObserver />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
