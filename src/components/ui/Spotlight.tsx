'use client';

import { useEffect, useRef } from 'react';

interface SpotlightProps {
    color?: string;
}

export default function Spotlight({ color = 'rgba(9, 82, 76, 0.15)' }: SpotlightProps) {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current) return;

            const { clientX, clientY } = e;
            const rect = spotlightRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const y = clientY - rect.top;

            spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${color}, transparent 80%)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [color]);

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
