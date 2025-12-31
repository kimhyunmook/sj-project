'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface RoleToggleProps {
  isActive: boolean;
  onToggle: (isActive: boolean) => void;
}

export function RoleToggle({ isActive, onToggle }: RoleToggleProps) {
  const toggleWidth = 80;
  const toggleHeight = 40;
  const circleSize = 32;
  const padding = 4;
  const translateX = isActive ? toggleWidth - circleSize - padding : padding;

  return (
    <motion.button
      onClick={() => onToggle(!isActive)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative',
        'rounded-[100px]',
        'bg-[#404040]',
        'shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]'
      )}
      style={{
        width: `${toggleWidth}px`,
        height: `${toggleHeight}px`,
      }}
      aria-label={isActive ? '개발자 역할 활성화' : '디자이너 역할 활성화'}
    >
      <motion.div
        className={cn(
          'absolute',
          'rounded-full',
          'bg-[#FF7F08]',
          'shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]'
        )}
        animate={{
          x: translateX,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          top: `${(toggleHeight - circleSize) / 2}px`,
        }}
      />
    </motion.button>
  );
}
