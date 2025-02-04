import type { ReactNode, MouseEvent, FC } from 'react';

export interface IComponentProps {
  children?: ReactNode;
  className?: string;
  variant?: string;
  block?: string;
}

export interface IIconData {
  width: number;
  height: number;
  fragment: string;
}

export interface IIconProps extends IComponentProps {
  data: IIconData;
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface ILogoProps extends IComponentProps {
  data: {
    href: string;
    text: {
      accent: string;
      main: string;
    };
    icon: IIconData;
  };
}

export interface INavListProps extends IComponentProps {
  variant: string;
  data: {
    navItems: {
      text: string;
    }[];
  };
}

export interface INavItemProps extends IComponentProps {
  variant: string;
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

export type IIcon = FC<IIconProps>;
export type IButton = FC<IButtonProps>;
export type IComponent = FC<IComponentProps>;
export type IApp = FC<IComponentProps>;

export type IHeader = FC<IComponentProps>;
export type ILogo = FC<ILogoProps>;
export type IMenu = FC<IComponentProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;

export type IMain = FC<IComponentProps>;
export type IMainTitle = FC<IMainTitleProps>;
export type IHero = FC<IComponentProps>;
