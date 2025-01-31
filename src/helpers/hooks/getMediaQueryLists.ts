import { desktopMediaQuery, mobileMediaQuery, tabletMediaQuery } from '@constants';

import type { IMediaQueryLists } from '@types';

export const getMediaQueryLists = (): IMediaQueryLists => {
  return {
    mobileList: window.matchMedia(mobileMediaQuery),
    tabletList: window.matchMedia(tabletMediaQuery),
    desktopList: window.matchMedia(desktopMediaQuery),
  };
};
