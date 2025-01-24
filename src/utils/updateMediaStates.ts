import type { IUpdateMediaStates } from '@types';

export const updateMediaStates: IUpdateMediaStates = (
  mediaList,
  setIsMobile,
  setIsTablet,
  setIsDesktop
) => {
  setIsMobile(mediaList.mobile.matches);
  setIsTablet(mediaList.tablet.matches);
  setIsDesktop(mediaList.desktop.matches);
};
