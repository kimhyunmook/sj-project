'use client';

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
  width: string;
  titleSize?: 'base' | 'sm';
  gap?: 'gap-1' | 'gap-2';
}

export function InfoBox({
  title,
  children,
  width,
  titleSize = 'base',
  gap = 'gap-2',
}: InfoBoxProps) {
  const titleClass =
    titleSize === 'sm'
      ? 'text-sm font-black leading-[19px] text-white'
      : 'text-base font-black leading-[22px] text-white';

  return (
    <div className={`flex flex-col ${gap} ${width}`}>
      <h3 className={titleClass}>{title}</h3>
      {children}
    </div>
  );
}
