import type { Dispatch, SetStateAction } from 'react';

export interface IMediaQueryLists {
  mobileList: MediaQueryList;
  tabletList: MediaQueryList;
  desktopList: MediaQueryList;
}

export type IMouseEvent = React.MouseEvent<HTMLElement, MouseEvent>;

export type IBooleanStateSetter = Dispatch<SetStateAction<boolean>>;

export type IActionHandle = () => void;

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
  mediaQueryListChangeHandle: IActionHandle
) => void;

export type IRemoveMediaQueryListChangeListeners = IAddMediaQueryListChangeListeners;

export type IToggleMobileMenu = (
  event: IMouseEvent,
  setIsMobileMenuOpen: IBooleanStateSetter
) => void;

export type IIsTargetElementAList = (event: IMouseEvent) => boolean;
