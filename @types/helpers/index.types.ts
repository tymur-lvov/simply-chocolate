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

export type IMenuClickHandle = (
  target: EventTarget,
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type ISocialsLinkClickHandle = (setLinkClickCount: Dispatch<SetStateAction<number>>) => void;

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
  setActiveItemIndex: Dispatch<SetStateAction<number | null>>
) => void;

export type IGetVariantText = (textVariants: ICommonTitle['textVariants']) => string;

export type IGetVariantTextParts = (
  textVariants: ICommonTitle['textVariants']
) => ICommonTitle['textParts'];

export type IToggleModal = (
  action: 'open' | 'close',
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type IReviewsButtonClickHandle = (setIsModalOpen: Dispatch<SetStateAction<boolean>>) => void;

export type IKeydownHandle = (
  event: KeyboardEvent,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type IBackdropClickHandle = (
  event: MouseEvent<HTMLElement>,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type ICloseButtonClickHandle = (
  event: MouseEvent<HTMLElement>,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type IAddKeydownEventListener = (
  keydownHandle: IKeydownHandle,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => void;

export type IRemoveKeydownEventListener = (
  keydownHandle: IKeydownHandle,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
) => void;
