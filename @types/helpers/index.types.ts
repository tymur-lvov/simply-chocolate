import type { Dispatch, SetStateAction } from 'react';

export interface IMediaQueryLists {
  mobileList: MediaQueryList;
  tabletList: MediaQueryList;
  desktopList: MediaQueryList;
}

export type IActionHandle = () => void;

export type IStateSetter = Dispatch<SetStateAction<boolean>>;

export type IUseMedia = () => {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type IUpdateMediaQueryStates = (
  mediaQueryLists: IMediaQueryLists,
  setIsMobile: IStateSetter,
  setIsTablet: IStateSetter,
  setIsDesktop: IStateSetter
) => void;

export type IAddMediaQueryListChangeListeners = (
  mediaQueryLists: IMediaQueryLists,
  mediaQueryListChangeHandle: IActionHandle
) => void;

export type IRemoveMediaQueryListChangeListeners = IAddMediaQueryListChangeListeners;
