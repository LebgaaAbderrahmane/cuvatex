'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="theme-toggle-skeleton" />;
    }

    return (
        <>
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="theme-toggle"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--light-gray);
          color: var(--foreground);
          transition: var(--transition-smooth);
        }

        .theme-toggle:hover {
          background: var(--primary);
          color: var(--white);
        }

        .theme-toggle-skeleton {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: var(--light-gray);
        }
      `}</style>
        </>
    );
}
