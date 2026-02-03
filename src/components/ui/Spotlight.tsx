'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Spotlight() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const currentTheme = resolvedTheme || theme;
        // Lower opacity for light mode as requested
        const spotlightColor = currentTheme === 'dark'
            ? 'rgba(18, 165, 148, 0.15)'
            : 'rgba(9, 82, 76, 0.06)';

        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current) return;

            const { clientX, clientY } = e;
            const rect = spotlightRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mounted, theme, resolvedTheme]);

    if (!mounted) return null;

    return (
        <>
            <div className="spotlight-container" ref={spotlightRef} />
            <style jsx>{`
        .spotlight-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          transition: background 0.15s ease-out;
        }
      `}</style>
        </>
    );
}
