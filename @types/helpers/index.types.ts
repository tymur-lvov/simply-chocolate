import type { Dispatch, ReactNode, SetStateAction, MouseEvent } from 'react';

import type { ICommonTitle } from '../common/index.types';

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

export type IGetVariantText = (textVariants: ICommonTitle['textVariants']) => string;

export type IGetVariantTextParts = (
  textVariants: ICommonTitle['textVariants']
) => ICommonTitle['textParts'];

export type IToggleModal = (action: 'open' | 'close', setIsModalOpen: IBooleanStateSetter) => void;

export type IReviewsButtonClickHandle = (setIsModalOpen: IBooleanStateSetter) => void;

export type IKeydownHandle = (event: KeyboardEvent, setIsModalOpen: IBooleanStateSetter) => void;

export type IBackdropClickHandle = (
  event: MouseEvent<HTMLElement>,
  setIsModalOpen: IBooleanStateSetter
) => void;

export type ICloseButtonClickHandle = (
  event: MouseEvent<HTMLElement>,
  setIsModalOpen: IBooleanStateSetter
) => void;

export type IAddKeydownEventListener = (
  keydownHandle: IKeydownHandle,
  setIsModalOpen: IBooleanStateSetter
) => void;

export type IRemoveKeydownEventListener = (
  keydownHandle: IKeydownHandle,
  setIsModalOpen: IBooleanStateSetter
) => void;
