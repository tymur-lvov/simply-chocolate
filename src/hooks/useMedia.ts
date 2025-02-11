import { useEffect, useState } from 'react';

import {
  getMediaQueryLists,
  updateMediaQueryStates,
  addMediaQueryListChangeListeners,
  removeMediaQueryListChangeListeners,
} from '@helpers';

import type { IUseMedia } from '@types';

export const useMedia: IUseMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQueryLists = getMediaQueryLists();

  const mediaQueryListChangeHandle = () => {
    updateMediaQueryStates(mediaQueryLists, setIsMobile, setIsTablet, setIsDesktop);
  };

  useEffect(() => {
    mediaQueryListChangeHandle();

    addMediaQueryListChangeListeners(mediaQueryLists, mediaQueryListChangeHandle);

    return () => removeMediaQueryListChangeListeners(mediaQueryLists, mediaQueryListChangeHandle);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
