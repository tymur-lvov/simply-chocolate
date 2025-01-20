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

export interface IHeaderNavItemProps {
  text: string;
}

export interface IHeaderSocialsItemProps {
  fragment: string;
  href: string;
}

export interface ILogoTextProps {
  accentText: string;
  mainText: string;
}

export type IIcon = FunctionComponent<IIconProps>;
export type IButton = FunctionComponent<IButtonProps>;
export type IHeaderNavItem = FunctionComponent<IHeaderNavItemProps>;
export type IHeaderSocialsItem = FunctionComponent<IHeaderSocialsItemProps>;
export type ILogoText = FunctionComponent<ILogoTextProps>;
