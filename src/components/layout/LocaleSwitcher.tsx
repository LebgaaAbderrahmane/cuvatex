'use client';

import { useLocale, useTranslations } from 'next-intl';
import { routing, useRouter, usePathname } from '@/i18n/routing';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useState, useTransition, useRef, useEffect } from 'react';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' }
];

interface LocaleSwitcherProps {
  up?: boolean;
}

export default function LocaleSwitcher({ up = false }: LocaleSwitcherProps) {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleLanguageChange(nextLocale: string) {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
    setIsOpen(false);
  }

  return (
    <div className="locale-switcher-wrapper" ref={dropdownRef}>
      <button
        className={`locale-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="current-flag">{currentLang.flag}</span>
        <span className="current-label">{currentLang.code.toUpperCase()}</span>
        <ChevronDown size={14} className={`chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      <div className={`locale-dropdown ${isOpen ? 'open' : ''} ${up ? 'drop-up' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`locale-option ${lang.code === locale ? 'selected' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="option-flag">{lang.flag}</span>
            <span className="option-label">{lang.label}</span>
            {lang.code === locale && <Check size={14} className="check-icon" />}
          </button>
        ))}
      </div>

      <style jsx>{`
        .locale-switcher-wrapper {
          position: relative;
          display: inline-block;
        }

        .locale-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          color: var(--accent-1);
          transition: all 0.2s ease;
          min-width: 80px;
        }

        .locale-trigger:hover {
          border-color: var(--primary);
        }

        .locale-trigger.active {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(9, 82, 76, 0.1);
        }

        .current-flag {
          font-size: 16px;
        }

        .chevron {
          transition: transform 0.2s ease;
          color: var(--placeholder);
        }

        .chevron.rotate {
          transform: rotate(180deg);
        }

        .locale-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          min-width: 160px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-theme='dark'] .locale-dropdown {
          background: var(--surface);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .locale-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .locale-dropdown.drop-up {
          top: auto;
          bottom: calc(100% + 8px);
          transform: translateY(10px);
        }

        .locale-dropdown.drop-up.open {
          transform: translateY(0);
        }

        .locale-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          transition: all 0.2s ease;
          color: var(--accent-1);
          width: 100%;
          text-align: left;
        }

        .locale-option:hover {
          background: var(--surface);
          color: var(--primary);
        }

        .locale-option.selected {
          background: rgba(9, 82, 76, 0.05);
          color: var(--primary);
          font-weight: 600;
        }

        .option-flag {
          font-size: 18px;
        }

        .option-label {
          flex: 1;
        }

        .check-icon {
          color: var(--primary);
        }

        // @media (max-width: 1023px) {
        //   .locale-dropdown {
        //     left: 0;
        //     right: auto;
        //   }
        // }
      `}</style>
    </div>
  );
}
