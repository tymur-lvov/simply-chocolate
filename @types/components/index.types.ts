import type { FunctionComponent, ReactNode } from 'react';

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

export interface INavItemProps {
  text: string;
}

export interface ISocialsItemProps {
  fragment: string;
  href: string;
}

export interface ILogoTextProps {
  accentText: string;
  mainText: string;
}

export type IIcon = FunctionComponent<IIconProps>;
export type IButton = FunctionComponent<IButtonProps>;
export type INavItem = FunctionComponent<INavItemProps>;
export type ISocialsItem = FunctionComponent<ISocialsItemProps>;
export type ILogoText = FunctionComponent<ILogoTextProps>;
