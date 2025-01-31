import type { Dispatch, SetStateAction } from 'react';

export interface IMediaQueryLists {
  mobileList: MediaQueryList;
  tabletList: MediaQueryList;
  desktopList: MediaQueryList;
}

export type IUseMedia = () => {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type IUpdateMediaQueryStates = (
  mediaQueryLists: IMediaQueryLists,
  setIsMobile: Dispatch<SetStateAction<boolean>>,
  setIsTablet: Dispatch<SetStateAction<boolean>>,
  setIsDesktop: Dispatch<SetStateAction<boolean>>
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
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type ISocialsLinkClickHandle = (
  setSocialsLinkClickCount: Dispatch<SetStateAction<number>>
) => void;

export type IIsTargetElementAList = (target: EventTarget) => boolean;
