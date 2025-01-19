import { useEffect, useState } from 'react';

import type { IUseMedia } from '@types';

export const useMedia: IUseMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const viewportWidth = window.innerWidth;

  const mediaConditions = [
    {
      condition: () => viewportWidth >= 1158,
      result: () => setIsDesktop(true),
    },
    {
      condition: () => viewportWidth >= 768 && viewportWidth < 1024,
      result: () => setIsTablet(true),
    },
    {
      condition: () => true,
      result: () => setIsMobile(true),
    },
  ];

  useEffect(() => {
    mediaConditions.find(({ condition }) => condition())?.result();
  });

  return [isMobile, isTablet, isDesktop];
};
