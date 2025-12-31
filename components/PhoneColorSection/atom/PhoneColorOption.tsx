'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface PhoneColorOptionProps {
  color: 'black' | 'white' | 'desert' | 'natural';
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const colorMap = {
  black: '#1C1C1E',
  white: '#F5F5F7',
  desert: '#E4D5C7',
  natural: '#D4C4B0',
};

export function PhoneColorOption({
  color,
  label,
  isSelected,
  onClick,
}: PhoneColorOptionProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative',
        'flex flex-col items-center gap-2',
        'px-6 py-4',
        'rounded-lg',
        'transition-all duration-300',
        isSelected
          ? 'bg-gray-800 dark:bg-gray-700'
          : 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
      )}
      aria-label={`${label} 색상 선택`}
    >
      <motion.div
        className={cn(
          'w-12 h-12 rounded-full border-2 transition-all duration-300',
          isSelected ? 'border-orange-500 scale-110' : 'border-gray-300'
        )}
        style={{
          backgroundColor: colorMap[color],
        }}
        animate={{
          scale: isSelected ? 1.1 : 1,
          boxShadow: isSelected
            ? '0 0 0 3px rgba(255, 127, 8, 0.3)'
            : '0 0 0 0px rgba(255, 127, 8, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
      <span
        className={cn(
          'text-sm font-medium transition-colors duration-300',
          isSelected ? 'text-orange-500' : 'text-gray-600 dark:text-gray-400'
        )}
      >
        {label}
      </span>
    </motion.button>
  );
}
