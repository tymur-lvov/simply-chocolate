import type { FC, ReactNode } from 'react';

export interface IComponentProps {
  children?: ReactNode;
  block?: string;
  className?: string;
}

export interface IAssetProps extends IComponentProps {
  width: number;
  height: number;
}

export interface IIconProps extends IAssetProps {
  fragment: string;
}

export interface IImageProps extends IAssetProps {
  src: string;
  alt: string;
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
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

export type IComponent = FC<IComponentProps>;
export type IIcon = FC<IIconProps>;
export type IImage = FC<IImageProps>;
export type IButton = FC<IButtonProps>;

export type ILogo = FC<ILogoProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;
export type IMainTitle = FC<IMainTitleProps>;
