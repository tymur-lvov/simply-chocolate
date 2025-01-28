import type { FC, ReactNode } from 'react';

export interface IComponentProps {
  children?: ReactNode;
  block?: string;
  modifier?: string;
  className?: string;
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
}

export interface IIconProps extends IComponentProps {
  fragment: string;
  width: number;
  height: number;
}

export interface IMainTitleProps extends IComponentProps {
  data: {
    mobile: {
      text: string;
    };
    tablet?: {
      text: string;
    };
    desktop?: {
      text: string;
    };
  };
}

export interface ILogoProps extends IComponentProps {
  data: {
    text: {
      basePart: string;
      accentPart: string;
    };
  };
}

export interface IMenuButtonProps extends IComponentProps {
  modifier: string;
}

export interface INavListProps extends IComponentProps {
  data: {
    navItems: {
      text: string;
    }[];
  };
}

export interface INavItemProps extends IComponentProps {
  data: {
    text: string;
  };
}

export interface ISocialsListProps extends IComponentProps {
  data: {
    socialsItems: {
      fragment: string;
      href: string;
    }[];
  };
}

export interface ISocialsItemProps extends IComponentProps {
  data: {
    fragment: string;
    href: string;
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

export type IButton = FC<IButtonProps>;
export type IIcon = FC<IIconProps>;
export type IMainTitle = FC<IMainTitleProps>;
export type ILogo = FC<ILogoProps>;
export type IMenuButton = FC<IMenuButtonProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;
export type ICtaButtons = FC<ICtaButtonsProps>;
export type IScrollLink = FC<IScrollLinkProps>;
