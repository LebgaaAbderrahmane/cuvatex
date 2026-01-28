'use client';

import { Link } from '@/i18n/routing';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(p => p && p !== 'en' && p !== 'ar');

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link href="/" className="breadcrumb-link">
            <Home size={14} />
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

          return (
            <li key={path} className="breadcrumb-item">
              <ChevronRight size={14} className="separator" />
              {isLast ? (
                <span className="breadcrumb-current" aria-current="page">{label}</span>
              ) : (
                <Link href={href} className="breadcrumb-link">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <style jsx>{`
        .breadcrumbs {
          margin-bottom: 24px;
          
        }

        .breadcrumb-list {
          display: flex;
          align-items: center;         
          list-style: none;
          padding: 0;
          
          margin: 0;
          flex-wrap: wrap;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
        }

        .breadcrumb-link {
          color: rgba(255, 255, 255, 0.7);
          align-items: end;
          transition: color 0.2s ease;
        }

        .breadcrumb-link:hover {
          color: #FFFFFF;
        }

        .separator {
          margin: 0 8px;
          opacity: 0.5;
        }

        .breadcrumb-current {
          color: #FFFFFF;
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
}
