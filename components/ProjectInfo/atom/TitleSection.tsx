'use client';

import { motion } from 'framer-motion';

interface TitleSectionProps {
  title: string;
  titleColor: string;
  subtitle: string;
  description: string;
  titleEndTime: number;
  subtitleEndTime: number;
  duration: number;
  titleStartDelay: number;
  titleCharDelay: number;
}

export function TitleSection({
  title,
  titleColor,
  subtitle,
  description,
  titleEndTime,
  subtitleEndTime,
  duration,
  titleStartDelay,
  titleCharDelay,
}: TitleSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2.5">
        <h1
          style={{ color: titleColor }}
          className="text-[30px] font-black leading-[41px]"
        >
          {title.split('').map((v, i) => (
            <motion.span
              key={v + i.toString()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration,
                delay: titleStartDelay + i * titleCharDelay,
              }}
            >
              {v}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: titleEndTime }}
          className="text-lg font-bold leading-[25px] text-white"
        >
          {subtitle}
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay: subtitleEndTime }}
        className="text-base font-normal leading-[22px] text-[#DDDDDD]"
      >
        {description}
      </motion.p>
    </div>
  );
}
