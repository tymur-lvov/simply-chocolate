import { useEffect, useState } from 'react';

import {
  getMediaQueryLists,
  updateMediaQueryStates,
  addMediaQueryListChangeListeners,
  removeMediaQueryListChangeListeners,
} from '@utils';

import type { IMediaQueryListChangeHandle } from '@types';

// import type { IUseMedia } from '@types';

export const useMedia = (): { isMobile: boolean; isTablet: boolean; isDesktop: boolean } => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQueryLists = getMediaQueryLists();

  const mediaQueryListChangeHandle: IMediaQueryListChangeHandle = () => {
    updateMediaQueryStates(mediaQueryLists, setIsMobile, setIsTablet, setIsDesktop);
  };

  useEffect(() => {
    mediaQueryListChangeHandle();

    addMediaQueryListChangeListeners(mediaQueryLists, mediaQueryListChangeHandle);

    return () => removeMediaQueryListChangeListeners(mediaQueryLists, mediaQueryListChangeHandle);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
