'use client';

import { useTranslations } from 'next-intl';
import {
  Smartphone,
  Headphones,
  Youtube,
  Download,
  Database,
  Lock,
  Palette,
  Shield,
  Sparkles
} from 'lucide-react';
import FloatingIcons from '@/components/ui/FloatingIcons';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ChallengeSolution from '@/components/case-study/ChallengeSolution';
import TechStackSection from '@/components/case-study/TechStackSection';
import KeyFeatures from '@/components/case-study/KeyFeatures';
import ProcessFlow from '@/components/case-study/ProcessFlow';
import ResultsImpact from '@/components/case-study/ResultsImpact';
import CaseStudyCTA from '@/components/case-study/CaseStudyCTA';

export default function StudyCase() {
  const t = useTranslations('StudyCase');
  const tp = useTranslations('PortfolioDetail.projects.surah');

  // Data configuration
  const challengeSolutionData = {
    problem: {
      icon: Shield,
      title: 'The Problem',
      description: 'Traditional streaming platforms are designed to keep users engaged via algorithms, notifications, and ads. For a user trying to focus on Quranic recitation, these features become active hurdles.',
      points: [
        'Digital distractions during worship',
        'Inconsistent data connectivity',
        'Algorithm-driven content',
        'Lack of dedicated spiritual space'
      ]
    },
    solution: {
      icon: Sparkles,
      title: 'The Solution',
      description: 'An offline-first Quran audio application that provides a dedicated sanctuary for Quranic listening through high-performance audio processing and minimal UI design.',
      points: [
        'Offline-first architecture',
        'Minimal, distraction-free interface',
        'High-quality audio processing',
        'Personalized recitation library'
      ]
    }
  };

  const techStackData = [
    {
      title: 'Frontend & UI',
      technologies: ['React Native', 'Expo', 'Reanimated 2', 'FlashList']
    },
    {
      title: 'State & Data',
      technologies: ['Redux Toolkit', 'SQLite', 'Redux Persist']
    },
    {
      title: 'Audio & Media',
      technologies: ['Expo AV', 'Background Tasks', 'Audio Processing']
    },
    {
      title: 'Infrastructure',
      technologies: ['CI/CD Pipeline', 'App Store Connect', 'Google Play Console']
    }
  ];

  const featuresData = [
    {
      icon: Download,
      title: 'Offline-First',
      description: 'Complete audio library available without internet connection, with intelligent caching and storage management.'
    },
    {
      icon: Youtube,
      title: 'Smart Import',
      description: 'One-click YouTube import with automatic metadata extraction and audio conversion.'
    },
    {
      icon: Headphones,
      title: 'Advanced Audio',
      description: 'A-B repeat, playback speed control, sleep timer, and background playback support.'
    },
    {
      icon: Database,
      title: 'Smart Library',
      description: 'Intelligent categorization by reciter, surah, and riwayah with fast search and filters.'
    },
    {
      icon: Palette,
      title: 'Minimal UI',
      description: 'Clean, distraction-free interface designed for focus and spiritual contemplation.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Encrypted local storage and secure metadata handling for user collections.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Research & Planning',
      description: 'Analyzed user needs, technical requirements, and created comprehensive architecture diagrams for the offline-first system.'
    },
    {
      number: '02',
      title: 'Core Development',
      description: 'Built the audio processing engine, SQLite database layer, and implemented Redux for state management across the application.'
    },
    {
      number: '03',
      title: 'UI/UX Design',
      description: 'Created a minimal, focused interface with smooth animations and intuitive navigation tailored for spiritual use.'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing across devices, performance optimization, and implementing background task management.'
    }
  ];

  const resultsData = {
    metrics: [
      { value: '99.9%', label: 'Crash-Free Rate' },
      { value: '0ms', label: 'Offline Latency' },
      { value: '15%', label: 'Battery Optimization' },
      { value: '4.9★', label: 'App Store Rating' }
    ],
    outcomes: [
      'Successfully created a distraction-free digital sanctuary',
      'Implemented efficient offline audio processing',
      'Delivered smooth, native-like performance on both platforms',
      'Received positive user feedback for the minimalist design'
    ]
  };

  return (
    <main className="study-case-page">
      <FloatingIcons
        icons={[Smartphone, Headphones, Youtube]}
        count={6}
        opacity={0.02}
      />

      <CaseStudyHero
        title={tp('title')}
        description={tp('description')}
        category="Mobile Development"
        date="2024"
        mockupImage="/images/Surah_mockup.png"
        stats={{
          platform: 'iOS & Android',
          stack: 'React Native',
          role: 'Full Cycle Dev'
        }}
      />

      <ScrollReveal>
        <ChallengeSolution
          subtitle="The Challenge"
          title="Creating Digital Sanctuary"
          problem={challengeSolutionData.problem}
          solution={challengeSolutionData.solution}
        />
      </ScrollReveal>

      <ScrollReveal>
        <TechStackSection
          subtitle="Technology"
          title="Built with Modern Stack"
          categories={techStackData}
        />
      </ScrollReveal>

      <ScrollReveal>
        <KeyFeatures
          subtitle="Features"
          title="Core Functionalities"
          features={featuresData}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProcessFlow
          subtitle="Development Process"
          title="Engineering Journey"
          steps={processSteps}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ResultsImpact
          subtitle="Results"
          title="Project Impact"
          metrics={resultsData.metrics}
          outcomes={resultsData.outcomes}
          showcaseImage="/images/surah_pages.png"
          showcaseAlt="Surah App Interfaces"
        />
      </ScrollReveal>

      <ScrollReveal>
        <CaseStudyCTA />
      </ScrollReveal>
    </main>
  );
}