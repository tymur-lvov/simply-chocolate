import type { FC, ReactNode } from 'react';

export interface IFCProps {
  children?: ReactNode;
  className?: string;
  variant?: string;
}

export interface IIconProps extends IFCProps {
  width: number;
  height: number;
  fragment: string;
}

export interface IButtonProps extends IFCProps {
  type?: 'button' | 'submit' | 'reset';
}

export interface ILogoProps extends IFCProps {
  logo: {
    mainText: string;
    accentText: string;
  };
}

export interface INavListProps extends IFCProps {
  navList: {
    navItems: {
      text: string;
    }[];
  };
}

export interface INavItemProps extends IFCProps {
  text: string;
}

export interface ISocialsListProps extends IFCProps {
  socialsList: {
    socialsItems: {
      fragment: string;
      href: string;
    }[];
  };
}

export interface ISocialsItemProps extends IFCProps {
  fragment: string;
  href: string;
}

export interface IHeroTitleProps extends IFCProps {
  title: {
    mobileText: string;
    tabletText: string;
  };
}

export interface ICtaButtonsProps extends IFCProps {
  ctaButtons: {
    orderButton: {
      text: string;
    };
    infoButton: {
      text: string;
    };
  };
}

export interface IScrollLinkProps extends IFCProps {
  scrollLink: {
    text: string;
  };
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
