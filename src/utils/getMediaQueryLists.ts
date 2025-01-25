import type { IMediaQueryLists } from '@types';

export const getMediaQueryLists = (): IMediaQueryLists => {
  return {
    mobileList: window.matchMedia('(max-width: 767px)'),
    tabletList: window.matchMedia('(min-width: 768px) and (max-width:1157px)'),
    desktopList: window.matchMedia('(min-width: 1158px)'),
  };
};
