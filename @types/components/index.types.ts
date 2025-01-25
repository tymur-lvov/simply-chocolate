import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';

export interface IHeaderData {
  logo: {
    mainText: string;
    accentText: string;
  };
  navList: {
    navItems: {
      text: string;
    }[];
  };
  socialsList: {
    socialsItems: {
      fragment: string;
      href: string;
    }[];
  };
}

export interface IHeroData {
  title: {
    mobileText: string;
    tabletText: string;
  };
  ctaButtons: {
    orderButton: {
      text: string;
    };
    infoButton: {
      text: string;
    };
  };
  scrollLink: {
    text: string;
  };
}

export interface IIconProps {
  width: number;
  height: number;
  fragment: string;
}

export interface IButtonProps {
  children: ReactNode;
  className: string;
  type?: 'button' | 'submit';
}

export interface ILogoProps {
  logo: IHeaderData['logo'];
}

export interface INavListProps {
  navList: IHeaderData['navList'];
}

export interface INavItemProps {
  text: string;
}

export interface ISocialsListProps {
  socialsList: IHeaderData['socialsList'];
}

export interface ISocialsItemProps {
  fragment: string;
  href: string;
}

export interface IHeroTitleProps {
  title: IHeroData['title'];
}

export interface ICtaButtonsProps {
  ctaButtons: IHeroData['ctaButtons'];
}

export interface IScrollLinkProps {
  scrollLink: IHeroData['scrollLink'];
}

export interface IMediaQueryLists {
  mobileList: MediaQueryList;
  tabletList: MediaQueryList;
  desktopList: MediaQueryList;
}

export type IIcon = FC<IIconProps>;
export type IButton = FC<IButtonProps>;
export type ILogo = FC<ILogoProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;
export type IHeroTitle = FC<IHeroTitleProps>;
export type ICtaButtons = FC<ICtaButtonsProps>;
export type IScrollLink = FC<IScrollLinkProps>;

export type IStateSetter = Dispatch<SetStateAction<boolean>>;

export type IUpdateMediaQueryStates = (
  mediaQueryLists: IMediaQueryLists,
  setIsMobile: IStateSetter,
  setIsTablet: IStateSetter,
  setIsDesktop: IStateSetter
) => void;
