import { useEffect, useState } from 'react';

import {
  getMediaQueryLists,
  updateMediaQueryStates,
  // addMediaChangeListeners,
  // removeMediaChangeListeners,
} from '@utils';

// import type { IUseMedia } from '@types';

export const useMedia = (): void => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQueryLists = getMediaQueryLists();
  console.log(mediaQueryLists);

  const mediaChangeHandle = () => {
    updateMediaQueryStates(mediaQueryLists, setIsMobile, setIsTablet, setIsDesktop);
  };

  useEffect(() => {
    // mediaChangeHandle();
    // addMediaChangeListeners(mediaQueryLists, mediaChangeHandle);
    // return () => removeMediaChangeListeners(mediaQueryLists, mediaChangeHandle);
  }, []);

  // return { isMobile, isTablet, isDesktop };
};
