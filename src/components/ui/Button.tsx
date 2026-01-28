'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
      <style jsx>{`
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: var(--transition-smooth);
          border-radius: 8px;
          cursor: pointer;
        }

        .btn-sm { padding: 8px 16px; font-size: 0.875rem; }
        .btn-md { padding: 12px 28px; font-size: 1rem; }
        .btn-lg { padding: 16px 40px; font-size: 1.125rem; }

        .btn-primary {
          background: var(--primary);
          color: var(--white);
        }

        .btn-secondary {
          background: var(--dark-gray);
          color: var(--white);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
          padding: 10px 26px; /* adjust for border */
        }

        .btn-white {
          background: var(--white);
          color: var(--primary);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
    </button>
  );
}
