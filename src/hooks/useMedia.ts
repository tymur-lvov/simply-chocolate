import { useEffect, useState } from 'react';

import {
  getMediaList,
  updateMediaStates,
  addMediaChangeListeners,
  removeMediaChangeListeners,
} from '@utils';

import type { IUseMedia } from '@types';

export const useMedia: IUseMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaList = getMediaList();

  const mediaChangeHandle = () => {
    updateMediaStates(mediaList, setIsMobile, setIsTablet, setIsDesktop);
  };

  useEffect(() => {
    mediaChangeHandle();

    addMediaChangeListeners(mediaList, mediaChangeHandle);

    return () => removeMediaChangeListeners(mediaList, mediaChangeHandle);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
