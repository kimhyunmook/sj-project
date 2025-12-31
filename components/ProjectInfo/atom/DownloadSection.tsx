'use client';

import { motion } from 'framer-motion';

interface DownloadSectionProps {
  downloadUrl: string;
  delay: number;
  duration: number;
}

export function DownloadSection({
  downloadUrl,
  delay,
  duration,
}: DownloadSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className="flex flex-col gap-1.5 mt-6"
    >
      <h3 className="text-base font-black leading-[22px] text-white">
        다운로드 url
      </h3>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-normal leading-[22px] text-white underline hover:text-[#FF7F08] transition-colors"
      >
        {downloadUrl}
      </a>
    </motion.div>
  );
}
