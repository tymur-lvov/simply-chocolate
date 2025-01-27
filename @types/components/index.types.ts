import type { FC, ReactNode } from 'react';

export interface IComponentProps {
  children?: ReactNode;
  className?: string;
  block?: string;
  variant?: string;
}

export interface IIconProps extends IComponentProps {
  fragment: string;
  width: number;
  height: number;
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
}

export interface ILogoProps extends IComponentProps {
  data: {
    text: {
      basePart: string;
      accentPart: string;
    };
  };
}

export interface INavListProps extends IComponentProps {
  navList: {
    navItems: {
      text: string;
    }[];
  };
}

export interface INavItemProps extends IComponentProps {
  text: string;
}

export interface ISocialsListProps extends IComponentProps {
  socialsList: {
    socialsItems: {
      fragment: string;
      href: string;
    }[];
  };
}

export interface ISocialsItemProps extends IComponentProps {
  fragment: string;
  href: string;
}

export interface IHeroTitleProps extends IComponentProps {
  title: {
    mobileText: string;
    tabletText: string;
  };
}

export interface ICtaButtonsProps extends IComponentProps {
  ctaButtons: {
    orderButton: {
      text: string;
    };
    infoButton: {
      text: string;
    };
  };
}

export interface IScrollLinkProps extends IComponentProps {
  scrollLink: {
    text: string;
  };
}

export type IIcon = FC<IIconProps>;
export type IButton = FC<IButtonProps>;
export type ILogo = FC<ILogoProps>;
export type IMenuButton = FC<IComponentProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;
export type IHeroTitle = FC<IHeroTitleProps>;
export type ICtaButtons = FC<ICtaButtonsProps>;
export type IScrollLink = FC<IScrollLinkProps>;
