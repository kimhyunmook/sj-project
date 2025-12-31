'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RoleCard } from './atom/RoleCard';
import { RoleToggle } from './atom/RoleToggle';
import { RoleTitle } from './atom/RoleTitle';

import { cn } from '@/lib/utils';

interface RoleItem {
  id: string;
  label: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

interface RoleSectionProps {
  developerRoles?: RoleItem[];
  designerRoles?: RoleItem[];
}

const defaultDeveloperRoles: RoleItem[] = [
  {
    id: 'flutter',
    label: 'Flutter',
    width: 130,
    height: 120,
    x: 884,
    y: 1444,
  },
  {
    id: 'publishing',
    label: '퍼블리싱',
    width: 80,
    height: 50,
    x: 400,
    y: 1470,
  },
  {
    id: 'api',
    label: 'API 연동',
    width: 100,
    height: 100,
    x: 1480,
    y: 1344,
  },
  {
    id: 'admob',
    label: 'AdMob 연결',
    width: 120,
    height: 120,
    x: 680,
    y: 1072,
  },
  {
    id: 'component',
    label: '공통 컴포넌트화',
    width: 120,
    height: 60,
    x: 1400,
    y: 984,
  },
  {
    id: 'ios-deploy',
    label: 'IOS 배포 진행',
    width: 130,
    height: 60,
    x: 960,
    y: 1180,
  },
  {
    id: 'simulator',
    label: 'IOS / Android 시뮬레이터 테스트',
    width: 140,
    height: 80,
    x: 340,
    y: 1004,
  },
];

const defaultDesignerRoles: RoleItem[] = [
  {
    id: 'figma',
    label: 'figma',
    width: 80,
    height: 50,
    x: 1233,
    y: 1471,
  },
  {
    id: 'planning',
    label: '기획 단계 누락 디자인으로 보완',
    width: 150,
    height: 80,
    x: 440,
    y: 1242,
  },
  {
    id: 'ui-redesign',
    label: 'UI 재설계',
    width: 80,
    height: 80,
    x: 620,
    y: 1400,
  },
  {
    id: 'logo',
    label: '로고 디자인',
    width: 100,
    height: 100,
    x: 1110,
    y: 984,
  },
  {
    id: 'uiux',
    label: 'UI/UX 전담 설계',
    width: 150,
    height: 90,
    x: 1260,
    y: 1160,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};

export function RoleSection({
  developerRoles = defaultDeveloperRoles,
  designerRoles = defaultDesignerRoles,
}: RoleSectionProps) {
  const [isDeveloperActive, setIsDeveloperActive] = useState(true);

  const baseX = 340;
  const baseY = 984;

  return (
    <div className="relative w-[1240px] h-[720px]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={cn('w-[1240px] h-[720px]')}
        style={{
          position: 'absolute',
        }}
      >
        {/* 개발자 역할 제목 */}
        <RoleTitle
          label="개발자로서의 역할"
          isActive={isDeveloperActive}
          left={721 - baseX}
          delay={0.2}
          onClick={() => setIsDeveloperActive(true)}
        />

        {/* 디자이너 역할 제목 */}
        <RoleTitle
          label="디자이너로서의 역할"
          isActive={!isDeveloperActive}
          left={1000 - baseX}
          delay={0.3}
          onClick={() => setIsDeveloperActive(false)}
        />

        {/* 개발자 역할 카드들 */}
        {developerRoles.map((role, index) => (
          <motion.div
            key={`developer-${role.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
            drag={isDeveloperActive}
            dragMomentum={false}
            dragElastic={0}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
            className={cn(
              'absolute',
              isDeveloperActive && 'cursor-grab active:cursor-grabbing'
            )}
            style={{
              left: `${role.x - baseX}px`,
              top: `${role.y - baseY}px`,
            }}
          >
            <RoleCard
              label={role.label}
              width={role.width}
              height={role.height}
              variant="developer"
              isActive={isDeveloperActive}
            />
          </motion.div>
        ))}

        {/* 디자이너 역할 카드들 */}
        {designerRoles.map((role, index) => (
          <motion.div
            key={`designer-${role.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: (developerRoles.length + index) * 0.1,
              ease: 'easeOut',
            }}
            drag={!isDeveloperActive}
            dragMomentum={false}
            dragElastic={0}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: 'grabbing' }}
            className={cn(
              'absolute',
              !isDeveloperActive && 'cursor-grab active:cursor-grabbing'
            )}
            style={{
              left: `${role.x - baseX}px`,
              top: `${role.y - baseY}px`,
            }}
          >
            <RoleCard
              label={role.label}
              width={role.width}
              height={role.height}
              variant="designer"
              isActive={!isDeveloperActive}
            />
          </motion.div>
        ))}

        {/* 토글 스위치 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute"
          style={{
            left: `${1500 - baseX}px`,
            top: `${1664 - baseY}px`,
          }}
        >
          <RoleToggle
            isActive={isDeveloperActive}
            onToggle={setIsDeveloperActive}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
