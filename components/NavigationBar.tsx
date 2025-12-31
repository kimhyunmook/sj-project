'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface NavigationBarProps {
  activeTab?: 'home' | 'app' | 'web' | 'design';
  onTabChange?: (tab: 'home' | 'app' | 'web' | 'design') => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export function NavigationBar({
  activeTab: controlledActiveTab,
  onTabChange,
}: NavigationBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<
    'home' | 'app' | 'web' | 'design'
  >('app');
  const navRef = useRef<HTMLElement>(null);
  const [sliderX, setSliderX] = useState(0);

  // controlled 모드인지 확인 (activeTab prop이 전달되면 controlled)
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const handleTabClick = (tab: 'home' | 'app' | 'web' | 'design') => {
    if (!isControlled) {
      setInternalActiveTab(tab);
    }
    onTabChange?.(tab);
  };

  const tabs = [
    { id: 'home' as const, label: 'Home' },
    { id: 'app' as const, label: 'App' },
    { id: 'web' as const, label: 'Web' },
    { id: 'design' as const, label: 'Design' },
  ];

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    const navElement = navRef.current;
    const buttons = navElement.querySelectorAll('button');
    const activeButton = buttons[activeIndex];

    if (activeButton) {
      const navRect = navElement.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      const x = buttonRect.left - navRect.left + (buttonRect.width - 84) / 2;
      setSliderX(x);
    }
  }, [activeIndex]);

  return (
    <motion.nav
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        'relative flex flex-row justify-center items-center',
        'px-6 py-2 gap-3',
        'w-[348px] h-[57px]',
        'bg-white rounded-[50px]',
        'shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]'
      )}
    >
      {/* 배경 슬라이더 */}
      <motion.div
        className={cn('absolute bg-[#222222] rounded-[40px] left-0 top-0')}
        initial={false}
        animate={{
          x: sliderX,
          y: 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        style={{
          width: 84,
          height: 41,
        }}
      />

      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            variants={itemVariants}
            onClick={() => handleTabClick(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'relative z-10',
              'flex items-center justify-center',
              'w-[60px] h-[25px]',
              'text-lg font-medium leading-[25px] text-center',
              'transition-colors duration-200'
            )}
            style={{
              color: isActive ? '#FFFFFF' : '#222222',
            }}
          >
            {tab.label}
          </motion.button>
        );
      })}
    </motion.nav>
  );
}
