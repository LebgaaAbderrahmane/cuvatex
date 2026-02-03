'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
}

/**
 * Lightweight scroll reveal component optimized for performance.
 * Uses simple opacity + transform animations without heavy viewport calculations.
 */
export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    distance = 30,
    className = '',
}: ScrollRevealProps) {

    // Calculate initial transform based on direction
    const getInitialTransform = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: distance };
            case 'down': return { opacity: 0, y: -distance };
            case 'left': return { opacity: 0, x: distance };
            case 'right': return { opacity: 0, x: -distance };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: distance };
        }
    };

    const getFinalTransform = () => {
        switch (direction) {
            case 'up':
            case 'down':
                return { opacity: 1, y: 0 };
            case 'left':
            case 'right':
                return { opacity: 1, x: 0 };
            case 'none':
                return { opacity: 1 };
            default:
                return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            initial={getInitialTransform()}
            whileInView={getFinalTransform()}
            viewport={{
                once: true,
                amount: 0.15,
                margin: "0px 0px -10% 0px"
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0], // Custom ease for smoothness
            }}
            className={className}
            style={{ touchAction: 'auto' }}
        >
            {children}
        </motion.div>
    );
}

// Optional: Stagger container for lists
interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = ''
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    }
                }
            }}
            className={className}
            style={{ touchAction: 'auto' }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1.0]
                    }
                }
            }}
            className={className}
            style={{ touchAction: 'auto' }}
        >
            {children}
        </motion.div>
    );
}
