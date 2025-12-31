'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface PhoneDisplayProps {
  selectedColor: 'black' | 'white' | 'desert' | 'natural';
  className?: string;
}

export function PhoneDisplay({ selectedColor, className }: PhoneDisplayProps) {
  return (
    <motion.div
      className={cn('relative', className)}
      style={{
        width: '500px',
        height: '732px',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Shadow Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/Shadow.png)',
          mixBlendMode: 'plus-darker',
          opacity: 0.9,
        }}
        animate={{ opacity: selectedColor === 'black' ? 0.9 : 0.7 }}
        transition={{ duration: 0.3 }}
      />

      {/* Phone Base Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/images/${selectedColor === 'black' ? 'Black' : selectedColor === 'white' ? 'White' : selectedColor === 'desert' ? 'Desert' : 'Natural'} Titanium.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        key={selectedColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Highlight Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/Highlight.png)',
          mixBlendMode: 'plus-lighter',
        }}
      />

      {/* Light Effect */}
      <motion.div
        className="absolute"
        style={{
          width: '472.25px',
          height: '709.94px',
          left: '13.88px',
          top: '7.64px',
          backgroundImage: 'url(/images/Light.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Screen */}
      <motion.div
        className="absolute"
        style={{
          width: '472.25px',
          height: '709.94px',
          left: '13.88px',
          top: '7.64px',
          backgroundImage: 'url(/images/Screen.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Image Here - Placeholder for screen content */}
      <motion.div
        className="absolute"
        style={{
          width: '499.86px',
          height: '732.14px',
          left: '5.52px',
          top: '-0.85px',
          backgroundImage: 'url(/images/screen-content.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
    </motion.div>
  );
}

