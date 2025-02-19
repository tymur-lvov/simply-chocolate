import type { ICommonTitle } from '@types';
import type { Dispatch, ReactNode, SetStateAction, MouseEvent } from 'react';

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

export type IOnClick = (event: MouseEvent<HTMLElement>) => void;

export type IBooleanStateSetter = Dispatch<SetStateAction<boolean>>;

export type INumberStateSetter = Dispatch<SetStateAction<number>>;

export type INumberOrNullStateSetter = Dispatch<SetStateAction<number | null>>;

export type IMenuClickHandle = (target: EventTarget, setIsMenuOpen: IBooleanStateSetter) => void;

export type ISocialsLinkClickHandle = (setLinkClickCount: INumberStateSetter) => void;

export type IIsTargetElementAList = (target: EventTarget) => boolean;

export type IGetIconPath = (
  fragment: string,
  fragmentKey?: string,
  fragments?: {
    [key: string]: string;
  }
) => string;

export type IGetIconFragment = IGetIconPath;

export type IWrapTextPartsWithSpan = (
  classNames?: string[],
  textParts?: ICommonTitle['textParts'],
  textVariants?: ICommonTitle['textVariants']
) => string | ReactNode;

export type IFilterClassNameForSpan = (classNames: string[]) => string[];

export type IFilterClassNamesForHeading = (classNames: string[]) => string[];

export type ITopSellersItemClickHandle = (
  itemIndex: number,
  topSellersItemClickHandle: number | null,
  setActiveItemIndex: INumberOrNullStateSetter
) => void;
