"use client"

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>

            <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #09524C;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.2s ease, background 0.2s ease;
          box-shadow: 0 4px 12px rgba(9, 82, 76, 0.3);
          z-index: 1000;
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-to-top:hover {
          background: #0A6B62;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(9, 82, 76, 0.4);
        }

        .scroll-to-top:active {
          background: #063933;
          transform: translateY(0);
        }

        @media (max-width: 767px) {
          .scroll-to-top {
            width: 44px;
            height: 44px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
        </>
    )
}
