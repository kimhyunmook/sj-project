'use client';

import { motion } from 'framer-motion';
import { InfoBox } from './atom/InfoBox';
import { TitleSection } from './atom/TitleSection';
import { Divider } from './atom/Divider';
import { ToolsGrid } from './atom/ToolsGrid';
import { DownloadSection } from './atom/DownloadSection';
import { formatPeriod, formatEnvironment } from './utils/utils';
import { useAnimationTiming } from './utils/useAnimationTiming';

interface ProjectInfoProps {
  title?: string;
  titleColor?: string;
  subtitle?: string;
  description?: string;
  period?: string | [string, string];
  role?: string;
  tools?: string[];
  environment?: string | string[];
  downloadUrl?: string;
}

const ANIMATION_CONFIG = {
  duration: 1,
  titleStartDelay: 0.5,
  titleCharDelay: 0.1,
} as const;

const INFO_BOX_WIDTH = 'w-[280px]';

export function ProjectInfo({
  title = 'App Project',
  titleColor = '#FF7F08',
  subtitle = 'App Project Subtitle',
  description = 'App Project Description',
  period = ['2025.01.01', '2025.12.31'],
  role = 'Project Role',
  tools = [],
  environment = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  downloadUrl = 'App-download-url',
}: ProjectInfoProps) {
  const {
    titleEndTime,
    subtitleEndTime,
    toolsStartDelay,
    lastToolAnimationEndTime,
  } = useAnimationTiming({
    title,
    toolsLength: tools.length,
    ...ANIMATION_CONFIG,
  });

  const formattedPeriod = formatPeriod(period);
  const formattedEnvironment = formatEnvironment(environment);

  return (
    <div className="relative w-[616px]">
      <div className="flex flex-col gap-3">
        <TitleSection
          title={title}
          titleColor={titleColor}
          subtitle={subtitle}
          description={description}
          titleEndTime={titleEndTime}
          subtitleEndTime={subtitleEndTime}
          {...ANIMATION_CONFIG}
        />

        <Divider
          delay={subtitleEndTime + 0.5}
          duration={ANIMATION_CONFIG.duration}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION_CONFIG.duration,
            delay: subtitleEndTime + 0.5,
          }}
          className="flex flex-col gap-6 mt-3"
        >
          <div className="flex flex-row gap-8">
            <InfoBox
              title="제작 기간"
              width={INFO_BOX_WIDTH}
              titleSize="base"
              gap="gap-2"
            >
              <p className="text-base font-normal leading-[22px] text-[#DDDDDD]">
                {formattedPeriod}
              </p>
            </InfoBox>
            <InfoBox
              title="역할"
              width={INFO_BOX_WIDTH}
              titleSize="base"
              gap="gap-2"
            >
              <p className="text-base font-normal leading-[22px] text-[#DDDDDD]">
                {role}
              </p>
            </InfoBox>
          </div>

          <div className="flex flex-row gap-8">
            <InfoBox
              title="사용 도구"
              width={INFO_BOX_WIDTH}
              titleSize="base"
              gap="gap-2"
            >
              <ToolsGrid
                tools={tools}
                startDelay={toolsStartDelay}
                duration={ANIMATION_CONFIG.duration}
              />
            </InfoBox>
            <InfoBox
              title="개발 · 테스트 · 배포 환경"
              width={INFO_BOX_WIDTH}
              titleSize="sm"
              gap="gap-1"
            >
              <p className="text-sm font-normal leading-[19px] text-[#DDDDDD]">
                {formattedEnvironment}
              </p>
            </InfoBox>
          </div>
        </motion.div>

        <DownloadSection
          downloadUrl={downloadUrl}
          delay={lastToolAnimationEndTime + 0.5}
          duration={ANIMATION_CONFIG.duration}
        />
      </div>
    </div>
  );
}
