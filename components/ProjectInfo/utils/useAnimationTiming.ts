import { useMemo } from 'react';

interface UseAnimationTimingProps {
  title: string;
  toolsLength: number;
  duration: number;
  titleStartDelay: number;
  titleCharDelay: number;
}

export function useAnimationTiming({
  title,
  toolsLength,
  duration,
  titleStartDelay,
  titleCharDelay,
}: UseAnimationTimingProps) {
  const titleEndTime = useMemo(() => {
    const titleLength = title.split('').length;
    const lastCharDelay = titleStartDelay + (titleLength - 1) * titleCharDelay;
    return lastCharDelay + duration;
  }, [title, duration, titleStartDelay, titleCharDelay]);

  const subtitleEndTime = useMemo(() => {
    return titleEndTime + duration;
  }, [titleEndTime, duration]);

  const toolsStartDelay = useMemo(() => {
    return subtitleEndTime + 0.6;
  }, [subtitleEndTime]);

  const lastToolAnimationEndTime = useMemo(() => {
    if (toolsLength === 0) {
      return toolsStartDelay;
    }
    const lastToolDelay = toolsStartDelay + (toolsLength - 1) * 0.3;
    return lastToolDelay + duration;
  }, [toolsStartDelay, toolsLength, duration]);

  return {
    titleEndTime,
    subtitleEndTime,
    toolsStartDelay,
    lastToolAnimationEndTime,
  };
}
