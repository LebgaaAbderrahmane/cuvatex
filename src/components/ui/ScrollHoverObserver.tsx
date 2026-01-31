'use client';

import { useEffect } from 'react';

export default function ScrollHoverObserver() {
    useEffect(() => {
        function updateCenteredElements() {
            // Device detection for touch devices/small screens
            const isMobile = window.innerWidth < 1024 || 'ontouchstart' in window;
            const elements = document.querySelectorAll('.card, .btn, .nav-link, .mobile-nav-link, .timeline-item, .stat-card, .testimonial-card, .pricing-card, .card-service');
            const viewportCenter = window.innerHeight / 2;

            elements.forEach(el => {
                if (!isMobile) {
                    el.classList.remove('is-centered');
                    return;
                }

                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;

                // If element center is within the middle 30% of viewport
                if (Math.abs(elementCenter - viewportCenter) < window.innerHeight * 0.15) {
                    el.classList.add('is-centered');
                } else {
                    el.classList.remove('is-centered');
                }
            });
        }

        window.addEventListener('scroll', updateCenteredElements, { passive: true });
        window.addEventListener('resize', updateCenteredElements, { passive: true });

        // Initial check
        const timeoutId = setTimeout(updateCenteredElements, 1000);

        return () => {
            window.removeEventListener('scroll', updateCenteredElements);
            window.removeEventListener('resize', updateCenteredElements);
            clearTimeout(timeoutId);
        };
    }, []);

    return null;
}
