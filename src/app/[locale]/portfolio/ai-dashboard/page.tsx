'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import {
  ArrowLeft,
  Smartphone,
  WifiOff,
  Youtube,
  Headphones,
  Search,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Palette,
  BarChart3,
  Zap,
  Globe,
  Database,
  Lock,
  MessageSquare
} from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function StudyCase() {
  const t = useTranslations('StudyCase');
  const tp = useTranslations('Projects.items.ai');

  return (
    <main className="study-case-page">
      {/* Hero Section */}
      <section className="case-hero">
        <div className="container">
          <div className="breadcrumb-wrapper">
            <Breadcrumbs />
          </div>

          <div className="hero-grid">
            <div className="hero-content">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="category-badge"
              >
                Mobile Development
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {tp('title')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lead"
              >
                {tp('description')}
              </motion.p>

              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Platform</span>
                  <span className="stat-value">iOS & Android</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Stack</span>
                  <span className="stat-value">React Native</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Role</span>
                  <span className="stat-value">Full Cycle Dev</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="placeholder-image main-mockup shadow-hover"
              >
                <Smartphone size={48} />
                <span>[Main App Mockup]</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Problem */}
      <section className="section bg-surface">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="section-title">{t('sections.overview')}</h2>
              <p>
                Surah is an offline-first Quran audio application created to solve the issue of digital distractions during worship. By allowing users to import high-quality recitations from YouTube and listen to them offline, it provides a dedicated sanctuary for Quranic listening.
              </p>
              <p>
                The engineering focused on high-performance audio processing and a "clinical" UI design that stays out of the user's way.
              </p>

              <h3 className="mt-48 sub-title">{t('sections.problem')}</h3>
              <p>
                Traditional streaming platforms are designed to keep users engaged via algorithms, notifications, and ads. For a user trying to focus on Quranic recitation, these features become active hurdles. Additionally, data connectivity can be inconsistent, making a reliable offline solution mandatory for a premium experience.
              </p>
            </div>

            <div className="sidebar">
              <div className="card tech-card shadow-hover">
                <h3>{t('sections.tech')}</h3>
                <ul className="tech-list">
                  <li><strong>Core:</strong> React Native (Expo)</li>
                  <li><strong>State:</strong> Redux Toolkit & Persist</li>
                  <li><strong>Database:</strong> SQLite (Local Storage)</li>
                  <li><strong>Audio:</strong> Expo AV & Background Actions</li>
                  <li><strong>UI:</strong> FlashList & Reanimated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Design Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">User Interface & Design</h2>
            <p className="subtitle">Minimalist aesthetics for maximum focus.</p>
          </div>

          <div className="gallery-grid">
            <motion.div whileHover={{ y: -10 }} className="placeholder-image gallery-item shadow-hover">
              <span>[Interface: Library View]</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="placeholder-image gallery-item shadow-hover">
              <span>[Interface: Audio Player]</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="placeholder-image gallery-item shadow-hover">
              <span>[Interface: Search & Discovery]</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="placeholder-image gallery-item shadow-hover">
              <span>[Interface: Settings & Customization]</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="placeholder-image gallery-item shadow-hover">
              <span>[Interface: Offline Manager]</span>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="placeholder-image gallery-item shadow-hover">
              <span>[Interface: Onboarding Flow]</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="section bg-surface">
        <div className="container">
          <div className="content-narrow">
            <h2 className="centered section-title sub-title">{t('sections.journey')}</h2>

            <div className="process-flow">
              <motion.div whileHover={{ x: 10 }} className="process-step card shadow-hover">
                <div className="icon-badge"><Zap /></div>
                <div className="step-content">
                  <h4>Background Efficiency</h4>
                  <p>Implemented a custom background task manager to handle long-running audio downloads and metadata extraction without draining CPU resources.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="process-step card shadow-hover">
                <div className="icon-badge"><Layers /></div>
                <div className="step-content">
                  <h4>Smart Audio Indexing</h4>
                  <p>Developed an intelligent parser that reads YouTube video titles and automatically identifies Reciter names and Surah numbers using regex and fuzzy matching.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="process-step card shadow-hover">
                <div className="icon-badge"><Database /></div>
                <div className="step-content">
                  <h4>Offline Data Integrity</h4>
                  <p>Utilized SQLite to manage a complex relational database of Surahs, Ayahs, and local file paths, ensuring the library remains consistent even after app updates.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="process-step card shadow-hover">
                <div className="icon-badge"><Lock /></div>
                <div className="step-content">
                  <h4>Secure Content Storage</h4>
                  <p>Encrypted local metadata to prevent unauthorized tampering with user collections while maintaining high-speed retrieval rates.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">{t('sections.features')}</h2>
            <p className="subtitle">Engineered for a seamless spiritual journey.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card-detailed card shadow-hover">
              <div className="icon-wrapper"><WifiOff /></div>
              <h3>Offline-First Architecture</h3>
              <p>Complete data availability without internet. Every recitation is stored locally with high-fidelity audio quality.</p>
            </div>
            <div className="feature-card-detailed card shadow-hover">
              <div className="icon-wrapper"><Youtube /></div>
              <h3>YouTube Meta-Extractor</h3>
              <p>One-click import system that handles the conversion and organization automatically.</p>
            </div>
            <div className="feature-card-detailed card shadow-hover">
              <div className="icon-wrapper"><Palette /></div>
              <h3>Reverent UI/UX</h3>
              <p>A clean interface with high contrast, readable typography, and smooth transitions that reflect the sanctity of the content.</p>
            </div>
            <div className="feature-card-detailed card shadow-hover">
              <div className="icon-wrapper"><Headphones /></div>
              <h3>Advanced Audio Controls</h3>
              <p>A-B repeat functionality, playback speed adjustment, and a dedicated 'focus mode' for memorization.</p>
            </div>
            <div className="feature-card-detailed card shadow-hover">
              <div className="icon-wrapper"><Globe /></div>
              <h3>Multi-Source Support</h3>
              <p>Support for multiple recitation sources beyond YouTube, including local file imports and cloud storage sync.</p>
            </div>
            <div className="feature-card-detailed card shadow-hover">
              <div className="icon-wrapper"><MessageSquare /></div>
              <h3>Intelligent Categorization</h3>
              <p>Automatic tagging of Riwayats (Hafs, Warsh, etc.) based on audio signature analysis and metadata parsing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Deliverables */}
      <section className="section bg-surface">
        <div className="container">
          <div className="content-grid align-center">
            <div className="hero-image">
              <div className="placeholder-image mockup-device shadow-hover">
                <div className="inner-placeholder">
                  <CheckCircle2 size={40} className="mb-16" />
                  <span>[Final Production Result]</span>
                </div>
              </div>
            </div>
            <div className="main-content">
              <h2 className="section-title">{t('sections.deliverables')}</h2>
              <ul className="checklist">
                <li><CheckCircle2 color="var(--primary)" /> Full system architecture design</li>
                <li><CheckCircle2 color="var(--primary)" /> Cross-platform mobile app (iOS & Android)</li>
                <li><CheckCircle2 color="var(--primary)" /> Intelligent metadata parsing engine</li>
                <li><CheckCircle2 color="var(--primary)" /> Offline storage & database management</li>
                <li><CheckCircle2 color="var(--primary)" /> Background audio playback system</li>
                <li><CheckCircle2 color="var(--primary)" /> Automated CI/CD pipeline for rapid deployments</li>
                <li><CheckCircle2 color="var(--primary)" /> Post-launch maintenance & technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-impact text-white impact-section">
        <div className="container">
          <div className="content-narrow centered">
            <BarChart3 size={48} className="impact-icon" />
            <h2 className="text-white">Project Impact & Results</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <span className="impact-value">99.9%</span>
                <span className="impact-label">Crash-Free Rate</span>
              </div>
              <div className="impact-item">
                <span className="impact-value">0ms</span>
                <span className="impact-label">Offline Latency</span>
              </div>
              <div className="impact-item">
                <span className="impact-value">15%</span>
                <span className="impact-label">Less Battery Drain</span>
              </div>
            </div>
            <p className="lead text-white-80">
              Surah successfully redefined how users interact with religious content on mobile, moving from a "consumption" mindset to a "contemplation" mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-case-section">
        <div className="container">
          <div className="cta-case-card shadow-hover">
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <Link href="/contact" className="btn btn-primary">{t('cta.button')}</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .study-case-page {
          background: var(--background);
          color: var(--accent-2);
        }

        .case-hero {
          padding: 100px 0 80px;
          background: linear-gradient(to bottom, var(--surface) 0%, var(--background) 100% );
        }

        .breadcrumb-wrapper {
           margin-bottom: 24px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 64px;
          align-items: center;
        }

        .category-badge {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 24px;
        }

        h1 {
          font-size: 48px;
          color: var(--accent-1);
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .section-title {
           color: var(--accent-1);
           margin-bottom: 24px;
        }

        .sub-title {
           color: var(--accent-1);
        }

        .lead {
          font-size: 20px;
          color: var(--accent-2);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .text-white-80 {
          color: rgba(255, 255, 255, 0.8);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          border-top: 1px solid var(--border);
          padding-top: 32px;
        }

        .stat-label {
          display: block;
          font-size: 14px;
          color: var(--placeholder);
          margin-bottom: 4px;
        }

        .stat-value {
          font-weight: 600;
          color: var(--accent-1);
        }

        .placeholder-image {
          background: var(--surface);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--placeholder);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .main-mockup {
          aspect-ratio: 4/5;
          gap: 16px;
        }

        .mockup-device {
          aspect-ratio: 16/10;
        }

        .inner-placeholder {
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
        }

        .mb-16 { margin-bottom: 16px; }

        .shadow-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: var(--primary);
        }

        :global([data-theme="dark"]) .shadow-hover:hover {
           box-shadow: 0 20px 40px rgba(0,0,0,0.2);
           background: rgba(var(--primary-rgb), 0.1);
        }

        .bg-surface {
          background: var(--surface);
        }

        .bg-impact {
          background: var(--accent-1);
        }

        :global([data-theme="dark"]) .bg-impact {
          background: var(--surface);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
        }

        .sidebar {
          position: sticky;
          top: 120px;
        }

        .sidebar h3 {
           color: var(--accent-1);
        }

        .tech-card {
          padding: 40px;
          background: var(--background);
        }

        .tech-list {
          list-style: none;
          padding: 0;
          margin-top: 24px;
        }

        .tech-list li {
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          font-size: 15px;
          color: var(--accent-2);
        }

        .tech-list li strong {
          color: var(--accent-1);
        }

        .gallery-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 24px;
           margin-top: 48px;
        }

        .gallery-item {
           aspect-ratio: 4/5;
           font-size: 14px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 64px;
        }

        .feature-card-detailed {
          padding: 40px;
          background: var(--background);
        }

        .feature-card-detailed h3 {
           color: var(--accent-1);
           margin-bottom: 12px;
           font-size: 18px;
        }

        .icon-wrapper {
          color: var(--primary);
          margin-bottom: 24px;
        }

        .icon-wrapper :global(svg) {
          width: 32px;
          height: 32px;
        }

        .process-flow {
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .process-step {
          display: flex;
          align-items: center;
          gap: 32px;
          padding: 32px;
          background: var(--background);
        }

        .icon-badge {
           width: 56px;
           height: 56px;
           border-radius: 12px;
           background: rgba(var(--primary-rgb), 0.1);
           color: var(--primary);
           display: flex;
           align-items: center;
           justify-content: center;
           flex-shrink: 0;
        }

        .step-content h4 {
          margin-bottom: 8px;
          color: var(--accent-1);
        }

        .checklist {
          list-style: none;
          padding: 0;
          margin-top: 24px;
        }

        .checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-weight: 500;
          color: var(--accent-2);
        }

        .impact-section {
           padding: 100px 0;
        }

        .impact-icon {
           color: var(--primary);
           margin-bottom: 24px;
        }

        .impact-grid {
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           gap: 40px;
           margin-bottom: 40px;
        }

        .impact-item {
           display: flex;
           flex-direction: column;
        }

        .impact-value {
           font-size: 32px;
           font-weight: 700;
           color: #fff;
        }

        :global([data-theme="dark"]) .impact-value {
           color: var(--accent-1);
        }

        .impact-label {
           font-size: 14px;
           color: rgba(255,255,255,0.6);
        }

        :global([data-theme="dark"]) .impact-label {
           color: var(--accent-2);
        }

        .cta-case-section {
          padding-bottom: 120px;
        }

        .cta-case-card {
          background: var(--primary);
          padding: 80px;
          border-radius: 24px;
          text-align: center;
          color: #fff;
        }

        .cta-case-card h2 {
          color: #fff;
          margin-bottom: 16px;
        }

        .cta-case-card p {
          color: rgba(255,255,255,0.8);
          margin-bottom: 32px;
          font-size: 18px;
        }

        .mt-48 { margin-top: 48px; }
        .centered { text-align: center; }
        .content-narrow { max-width: 800px; margin: 0 auto; }

        @media (max-width: 1023px) {
          .hero-grid, .content-grid, .gallery-grid, .impact-grid, .features-grid {
            grid-template-columns: 1fr;
          }
          
          .sidebar {
            position: static;
          }
          
          h1 { font-size: 36px; }
        }
      `}</style>
    </main>
  );
}
