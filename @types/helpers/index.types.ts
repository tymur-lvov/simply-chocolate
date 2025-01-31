import type { Dispatch, SetStateAction } from 'react';

export interface IMediaQueryLists {
  mobileList: MediaQueryList;
  tabletList: MediaQueryList;
  desktopList: MediaQueryList;
}

export type IBooleanStateSetter = Dispatch<SetStateAction<boolean>>;

export type IUseMedia = () => {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type IUpdateMediaQueryStates = (
  mediaQueryLists: IMediaQueryLists,
  setIsMobile: IBooleanStateSetter,
  setIsTablet: IBooleanStateSetter,
  setIsDesktop: IBooleanStateSetter
) => void;

export type IAddMediaQueryListChangeListeners = (
  mediaQueryLists: IMediaQueryLists,
  mediaQueryListChangeHandle: () => void
) => void;

export type IRemoveMediaQueryListChangeListeners = (
  mediaQueryLists: IMediaQueryLists,
  mediaQueryListChangeHandle: () => void
) => void;

export type IMobileMenuClickHandle = (
  target: EventTarget,
  setIsMobileMenuOpen: IBooleanStateSetter
) => void;

export type IIsTargetElementAList = (target: EventTarget) => boolean;
