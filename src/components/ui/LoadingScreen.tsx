'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const removeLoader = () => {
      // Add a small delay for smoother transition
      setTimeout(() => {
        document.documentElement.classList.remove('js-loading');
        setIsVisible(false);
      }, 600);
    };

    if (document.readyState === 'complete') {
      removeLoader();
    } else {
      window.addEventListener('load', removeLoader);
      // Fallback: remove after 3 seconds if load event hasn't fired
      const timeout = setTimeout(removeLoader, 3000);
      return () => {
        window.removeEventListener('load', removeLoader);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loader-content">
        <div className="logo-wrapper">
          <img
            src="/Cuvatex_logo.svg"
            alt="Cuvatex Logo"
            width={120}
            height={40}
            className="loader-logo"
          />
        </div>
        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}
