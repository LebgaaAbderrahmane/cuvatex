'use client';

import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { SunMoon, Laptop, ChevronDown, Sun, Moon, Palette } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function ThemeToggle() {
  const t = useTranslations('Theme');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className="theme-toggle-placeholder">
        <div className="inner-placeholder" />
      </div>
    );
  }

  const themeOptions = [
    { id: 'light', label: t('light'), icon: <Sun size={14} /> },
    { id: 'dark', label: t('dark'), icon: <Moon size={14} /> },
    { id: 'system', label: t('system'), icon: <Laptop size={14} /> },
  ];

  const currentThemeOption = themeOptions.find(opt => opt.id === theme) || themeOptions[2];

  return (
    <div className="theme-dropdown-wrapper" ref={dropdownRef}>
      <button
        className={`theme-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select theme"
      >
        <div className="current-icon">
          <Palette size={18} />
        </div>
        <ChevronDown size={14} className={`chevron ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="theme-menu">
          {themeOptions.map((opt) => (
            <button
              key={opt.id}
              className={`menu-item ${theme === opt.id ? 'active' : ''}`}
              onClick={() => {
                setTheme(opt.id);
                setIsOpen(false);
              }}
            >
              <span className="item-icon">{opt.icon}</span>
              <span className="item-label">{opt.label}</span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
                .theme-dropdown-wrapper {
                    position: relative;
                }

                .theme-toggle-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    height: 40px;
                    padding: 0 8px 0 12px;
                    border-radius: 10px;
                    background: var(--surface);
                    border: 1px solid var(--border);
                    color: var(--accent-1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .theme-toggle-btn:hover {
                    border-color: var(--primary);
                    background: var(--background);
                }

                .theme-toggle-btn.open {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.1);
                }

                .current-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                }

                .chevron {
                    transition: transform 0.3s ease;
                    opacity: 0.5;
                }

                .chevron.rotate {
                    transform: rotate(180deg);
                }

                .theme-menu {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    width: 130px;
                    background: var(--background);
                    border: 1px solid var(--border);
                    border-radius: 12px;
                    padding: 6px;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    animation: slideDown 0.2s ease-out;
                }

                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .menu-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 12px;
                    border-radius: 8px;
                    border: none;
                    background: transparent;
                    color: var(--accent-2);
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    width: 100%;
                }

                .menu-item:hover {
                    background: var(--surface);
                    color: var(--accent-1);
                }

                .menu-item.active {
                    color: var(--primary);
                    background: rgba(var(--primary-rgb), 0.08);
                }

                .item-icon {
                    display: flex;
                    align-items: center;
                    opacity: 0.8;
                }

                .menu-item.active .item-icon {
                    opacity: 1;
                }

                .theme-toggle-placeholder {
                    width: 58px;
                    height: 40px;
                    background: var(--surface);
                    border-radius: 10px;
                    border: 1px solid var(--border);
                    opacity: 0.5;
                }

                :global([data-theme="dark"]) .theme-menu {
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
                }
            `}</style>
    </div>
  );
}
