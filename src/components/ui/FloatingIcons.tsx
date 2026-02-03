'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FloatingIconsProps {
    icons: LucideIcon[];
    count?: number;
    opacity?: number;
}

interface FloatingItem {
    Icon: LucideIcon;
    id: number;
    style: any;
    animate: any;
    transition: any;
    size: number;
}

export default function FloatingIcons({ icons, count = 10, opacity = 0.05 }: FloatingIconsProps) {
    const [mounted, setMounted] = useState(false);
    const [items, setItems] = useState<FloatingItem[]>([]);

    useEffect(() => {
        setMounted(true);
        // Generate random positions and animations only on the client
        const newItems = Array.from({ length: count }).map((_, i) => {
            const Icon = icons[i % icons.length];
            const delay = Math.random() * 5;
            const duration = 15 + Math.random() * 20;
            const size = 30 + Math.random() * 60;

            // Distribute across the page
            const left = Math.random() * 100;
            const top = Math.random() * 100;

            return {
                Icon,
                id: i,
                style: {
                    left: `${left}%`,
                    top: `${top}%`,
                    opacity: opacity,
                    position: 'absolute' as const,
                    zIndex: 0,
                    pointerEvents: 'none' as const,
                },
                animate: {
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 10, -10, 0],
                },
                transition: {
                    duration,
                    repeat: Infinity,
                    delay,
                    ease: "linear" as any
                },
                size
            };
        });
        setItems(newItems);
    }, [icons, count, opacity]);

    if (!mounted) return null;

    return (
        <div className="floating-icons-container">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    style={item.style}
                    animate={item.animate}
                    transition={item.transition}
                >
                    <item.Icon size={item.size} strokeWidth={1} />
                </motion.div>
            ))}
            <style jsx>{`
        .floating-icons-container {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
}
