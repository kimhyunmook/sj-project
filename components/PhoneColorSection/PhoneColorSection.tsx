'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { PhoneDisplay } from './atom/PhoneDisplay';
import { PhoneColorOption } from './atom/PhoneColorOption';

import { cn } from '@/lib/utils';

type PhoneColor = 'black' | 'white' | 'desert' | 'natural';

interface PhoneColorSectionProps {
  className?: string;
}

const colorOptions: Array<{ color: PhoneColor; label: string }> = [
  { color: 'black', label: 'Black Titanium' },
  { color: 'white', label: 'White Titanium' },
  { color: 'desert', label: 'Desert Titanium' },
  { color: 'natural', label: 'Natural Titanium' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function PhoneColorSection({ className }: PhoneColorSectionProps) {
  const [selectedColor, setSelectedColor] = useState<PhoneColor>('black');

  return (
    <motion.div
      className={cn('relative w-full', className)}
      style={{
        width: '2156px',
        height: '732px',
        left: '-113px',
        top: '1924px',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Click to see design - Top Text */}
      <motion.div
        variants={textVariants}
        className="absolute"
        style={{
          width: '2058px',
          height: '327px',
          left: 'calc(50% - 2058px/2 + 54px)',
          top: '78px',
          fontFamily: "'Noto Sans', sans-serif",
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '240px',
          lineHeight: '327px',
          color: '#999999',
        }}
      >
        Click to see design
      </motion.div>

      {/* Click to see design - Bottom Text */}
      <motion.div
        variants={textVariants}
        className="absolute"
        style={{
          width: '2058px',
          height: '326px',
          left: 'calc(50% - 2058px/2 - 44px)',
          top: '324px',
          fontFamily: "'Noto Sans', sans-serif",
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '240px',
          lineHeight: '327px',
          color: '#999999',
        }}
      >
        Click to see design
      </motion.div>

      {/* Phone Colors Container */}
      <motion.div
        variants={containerVariants}
        className="absolute"
        style={{
          width: '500px',
          height: '732px',
          left: 'calc(50% - 500px/2)',
          top: '0px',
        }}
      >
        {/* Phone Display */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
            visible: {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              transition: {
                duration: 0.6,
                ease: 'easeOut',
              },
            },
          }}
          className="absolute"
          style={{
            left: '0px',
            top: '0px',
          }}
        >
          <PhoneDisplay selectedColor={selectedColor} />
        </motion.div>
      </motion.div>

      {/* Color Selection Options */}
      <motion.div
        variants={containerVariants}
        className="absolute flex gap-4"
        style={{
          left: 'calc(50% - 200px)',
          top: '750px',
        }}
      >
        {colorOptions.map((option, index) => (
          <motion.div
            key={option.color}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                },
              },
            }}
          >
            <PhoneColorOption
              color={option.color}
              label={option.label}
              isSelected={selectedColor === option.color}
              onClick={() => setSelectedColor(option.color)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
