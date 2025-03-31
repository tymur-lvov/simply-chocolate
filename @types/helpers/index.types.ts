import type {
  Dispatch,
  FormEvent,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  SetStateAction,
} from 'react';

import type { ICommonTitle } from '../common/index.types';

export type IBooleanStateSetter = Dispatch<SetStateAction<boolean>>;

export type INumberStateSetter = Dispatch<SetStateAction<number>>;

export type INumberOrNullStateSetter = Dispatch<SetStateAction<number | null>>;

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

export type IReviewFormStatus = {
  isSubmitAttempted: boolean;
  isAnyFieldChanged: boolean;
  isErrorPopupVisible: boolean;
  errorFieldIndex: number | null | undefined;
  fieldsErrorStatus: {
    isNameError: boolean;
    isEmailError: boolean;
    isPhoneError: boolean;
    isCommentError: boolean;
    isPrivacyError: boolean;
  };
};

export type IReviewFormStatusSetter = React.Dispatch<React.SetStateAction<IReviewFormStatus>>;

export type IReviewFieldValues = {
  name: '';
  email: '';
  phone: '';
  comment: '';
  privacy: '';
};

export type IReviewFieldValuesStateSetter = React.Dispatch<
  React.SetStateAction<IReviewFieldValues>
>;

export type IReviewFormSubmitHandle = (
  event: FormEvent,
  formStatus: IReviewFormStatus,
  setFormStatus: IReviewFormStatusSetter,
  setFieldValues: IReviewFieldValuesStateSetter,
  setIsOnSubmitModalOpen: IBooleanStateSetter,
  setIsReviewFormModalOpen: IBooleanStateSetter
) => void;

export type IReviewFormClickHandle = (
  event: MouseEvent,
  setFormStatus: IReviewFormStatusSetter
) => void;

export type IValidateReviewField = (field: HTMLInputElement) => boolean;

export type IReviewFieldChangeHandle = (
  event: ChangeEvent,
  setFormStatus: IReviewFormStatusSetter,
  setIsFieldValid: IBooleanStateSetter
) => void;

export type IReviewFieldErrorIconClickHandle = (
  formStatus: IReviewFormStatus,
  fieldIndex: number,
  isFieldValid: boolean,
  setFormStatus: IReviewFormStatusSetter
) => void;

export type IIngredientsItemClickHandle = (setIsModalOpen: IBooleanStateSetter) => void;

export type IErrorIconMouseEnterHandle = (
  fieldIndex: number,
  setFormStatus: IReviewFormStatusSetter
) => void;

export type IErrorIconMouseLeaveHandle = (setFormStatus: IReviewFormStatusSetter) => void;

export type ISubscriptionFormSubmitHandle = (
  event: FormEvent,
  setIsModalOpen: IBooleanStateSetter
) => void;

export type ISaveToLocalStorage = (key: string, data: string) => void;

export type IGetSavedValue = (key: string) => string | null;
