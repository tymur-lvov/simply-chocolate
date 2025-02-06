import type { ReactNode, MouseEvent, FC } from 'react';

import type { IHEADER_DATA, IHERO_DATA, IMENU_DATA } from '@types';

export interface IComponentProps {
  children?: ReactNode;
  className?: string;
}

export interface IIconProps extends IComponentProps {
  fragmentKey?: string;
  data: {
    width: number;
    height: number;
    fragment?: string;
    fragments?: {
      [key: string]: string;
    };
  };
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface ILogoProps extends IComponentProps {
  data: IHEADER_DATA['logo'];
}

export interface INavListProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['navList'];
}

export interface INavItemProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['navList']['navItems'][number];
}

export interface ISocialsListProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['socialsList'];
}

export interface ISocialsItemProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['socialsList']['socialsItems'][number];
}

export interface IMainTitleProps extends IComponentProps {
  data: IHERO_DATA['mainTitle'];
}

export type IComponent = FC<IComponentProps>;
export type IIcon = FC<IIconProps>;
export type IButton = FC<IButtonProps>;
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
