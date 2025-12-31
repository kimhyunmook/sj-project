'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface RoleTitleProps {
  label: string;
  isActive: boolean;
  left: number;
  delay?: number;
  onClick?: () => void;
}

export function RoleTitle({
  label,
  isActive,
  left,
  delay = 0.2,
  onClick,
}: RoleTitleProps) {
  const baseFontSize = 18;
  const activeFontSize = 26;
  const baseLineHeight = 25;
  const activeLineHeight = 35;
  const textColor = isActive ? '#FFFFFF' : '#DDDDDD';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        fontSize: isActive ? `${activeFontSize}px` : `${baseFontSize}px`,
        lineHeight: isActive ? `${activeLineHeight}px` : `${baseLineHeight}px`,
        color: textColor,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        opacity: { duration: 0.4, delay },
        y: { duration: 0.4, delay },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'absolute font-semibold',
        'cursor-pointer',
        'transition-all duration-200'
      )}
      style={{
        fontFamily: 'Noto Sans, sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        left: `${left}px`,
        top: `320px`,
        background: 'transparent',
        border: 'none',
        padding: 0,
      }}
    >
      {label}
    </motion.button>
  );
}
