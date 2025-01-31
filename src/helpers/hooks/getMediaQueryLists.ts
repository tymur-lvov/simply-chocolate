import { DESKTOP_MEDIA_QUERY, MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@constants';

import type { IMediaQueryLists } from '@types';

export const getMediaQueryLists = (): IMediaQueryLists => {
  return {
    mobileList: window.matchMedia(MOBILE_MEDIA_QUERY),
    tabletList: window.matchMedia(TABLET_MEDIA_QUERY),
    desktopList: window.matchMedia(DESKTOP_MEDIA_QUERY),
  };
};
