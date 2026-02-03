'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Show progress bar when pathname changes
        setLoading(true);
        setProgress(30);

        const timer = setTimeout(() => {
            setProgress(100);
            const finishTimer = setTimeout(() => {
                setLoading(false);
                setProgress(0);
            }, 300);
            return () => clearTimeout(finishTimer);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [pathname]);

    if (!loading && progress === 0) return null;

    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
            />
            <style jsx>{`
        .progress-bar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          z-index: 9999;
          pointer-events: none;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary);
          transition: width 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
