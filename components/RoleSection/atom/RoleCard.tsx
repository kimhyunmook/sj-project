'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface RoleCardProps {
  label: string;
  width: number;
  height: number;
  variant: 'developer' | 'designer';
  isActive?: boolean;
}

export function RoleCard({
  label,
  width,
  height,
  variant,
  isActive = false,
}: RoleCardProps) {
  // 각 카드마다 고유한 random 값 생성 (마운트 시 한 번만 생성)
  const animationConfig = useState(() => {
    const randomScale = 0.05 + Math.random() * 0.1; // 0.05 ~ 0.15
    const randomDuration = 3 + Math.random() * 3; // 3.0 ~ 6.0초 (더 차분하게)
    const randomDelay = Math.random() * 2; // 0 ~ 2초

    return {
      scaleMin: 1 - randomScale,
      scaleMax: 1 + randomScale,
      duration: randomDuration,
      delay: randomDelay,
    };
  })[0];
  const isDeveloper = variant === 'developer';

  // 개발자 카드: active일 때 주황색, 비활성일 때 회색
  // 디자이너 카드: active일 때 하늘색, 비활성일 때 회색
  const getBgColor = () => {
    if (isActive) {
      return isDeveloper
        ? 'rgba(255, 127, 8, 0.8)' // 주황색
        : 'rgba(135, 206, 250, 0.8)'; // 하늘색
    }
    return 'rgba(64, 64, 64, 0.8)'; // 회색
  };

  const getTextColor = () => {
    if (isActive) {
      return '#FFFFFF';
    }
    return '#999999';
  };

  const bgColor = getBgColor();
  const textColor = getTextColor();
  const fontWeight = 600;

  // 텍스트 크기 결정 (카드 크기에 따라)
  const getFontSize = () => {
    if (width >= 140) return 'text-[14px]';
    if (width >= 120) return 'text-[16px]';
    if (width >= 100) return 'text-[16px]';
    return 'text-[14px]';
  };

  const fontSize = getFontSize();
  const lineHeight = height >= 80 ? 'leading-[19px]' : 'leading-[22px]';

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isActive
          ? {
              scale: [
                animationConfig.scaleMin,
                animationConfig.scaleMax,
                animationConfig.scaleMin,
              ],
            }
          : { scale: 1 }
      }
      transition={
        isActive
          ? {
              duration: animationConfig.duration,
              delay: animationConfig.delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          : {
              duration: 0.3,
              ease: 'easeInOut',
            }
      }
      className={cn('relative rounded-[12px]')}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* 배경 (blur 적용) */}
      <motion.div
        className={cn('absolute inset-0 rounded-[12px]')}
        animate={{
          backgroundColor: bgColor,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        style={{
          filter: 'blur(3px)',
        }}
      />
      {/* 텍스트 (blur 없음) */}
      <motion.div
        className={cn(
          'relative z-10',
          'flex items-center justify-center',
          'h-full',
          'rounded-[12px]',
          fontSize,
          lineHeight,
          'text-center',
          'px-2'
        )}
        animate={{
          color: textColor,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        style={{
          fontFamily: 'Noto Sans, sans-serif',
          fontStyle: 'normal',
          fontWeight: fontWeight,
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
