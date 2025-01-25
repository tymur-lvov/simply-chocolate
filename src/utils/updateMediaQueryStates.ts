import type { IUpdateMediaQueryStates } from '@types';

export const updateMediaQueryStates: IUpdateMediaQueryStates = (
  mediaQueryLists,
  setIsMobile,
  setIsTablet,
  setIsDesktop
) => {
  setIsMobile(mediaQueryLists.mobileList.matches);
  setIsTablet(mediaQueryLists.tabletList.matches);
  setIsDesktop(mediaQueryLists.desktopList.matches);
};
