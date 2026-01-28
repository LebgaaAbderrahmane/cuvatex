'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="animated-bg-container">
      <motion.div
        className="blob blob-1"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="blob blob-2"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <style jsx>{`
        .animated-bg-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .blob-1 {
          background: var(--primary);
          top: -15%;
          left: -10%;
        }

        .blob-2 {
          background: #4A90E2;
          bottom: -15%;
          right: -10%;
        }
      `}</style>
    </div>
  );
}
