'use client';

import { motion } from 'framer-motion';

interface DividerProps {
  delay: number;
  duration: number;
}

export function Divider({ delay, duration }: DividerProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100px' }}
      transition={{ duration, delay }}
      className="h-px bg-[#5C5C5C]"
    />
  );
}
