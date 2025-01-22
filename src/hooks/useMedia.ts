import { useEffect, useState } from 'react';

import type { IUseMedia } from '@types';

export const useMedia: IUseMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const matchMediaRules = [
    {
      isMediaMatches: () => window.matchMedia('(min-width: 1158px)').matches,
      setState: () => setIsDesktop(true),
    },
    {
      isMediaMatches: () => window.matchMedia('(min-width: 768px) and (max-width:1157px)').matches,
      setState: () => setIsTablet(true),
    },
    {
      isMediaMatches: () => window.matchMedia('(max-width: 767px)').matches,
      setState: () => setIsMobile(true),
    },
  ];

  useEffect(() => {
    matchMediaRules.find(({ isMediaMatches }) => isMediaMatches())?.setState();
  });

  return { isMobile, isTablet, isDesktop };
};
