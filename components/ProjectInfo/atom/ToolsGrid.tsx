'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ToolsGridProps {
  tools: string[];
  startDelay: number;
  duration: number;
}

export function ToolsGrid({ tools, startDelay, duration }: ToolsGridProps) {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {tools.length > 0 ? (
        tools.map((tool, index) => (
          <motion.div
            key={tool + index.toString()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration,
              delay: startDelay + index * 0.3,
            }}
            className="relative w-[50px] h-[50px] rounded overflow-hidden"
          >
            <Image
              src={tool}
              alt={`Tool ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))
      ) : (
        <>
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded" />
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded" />
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded" />
          <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded" />
        </>
      )}
    </div>
  );
}
