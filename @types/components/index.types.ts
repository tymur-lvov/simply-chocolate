import type { FC, ReactNode } from 'react';

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
    mobile: {
      text: string;
    };
    tablet: {
      text: string;
    };
  };
  mainBtns: {
    className: string;
    text: string;
  }[];
  scrollBtn: {
    text: string;
  };
}

export interface IIconProps {
  className: string;
  width: number;
  height: number;
  fragment: string;
}

export interface IButtonProps {
  className: string;
  type?: 'button' | 'submit';
  text?: string;
  children?: ReactNode;
}

export interface ILogoProps {
  mainText: string;
  accentText: string;
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

export type IIcon = FC<IIconProps>;
export type IButton = FC<IButtonProps>;
export type ILogo = FC<ILogoProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;
