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

export type IIcon = FunctionComponent<IIconProps>;
export type IButton = FunctionComponent<IButtonProps>;
