import type { FunctionComponent } from 'react';

export interface IIconProps {
  className: string;
  width: number;
  height: number;
  fill?: string;
  fragment: string;
}

export interface IButtonProps {
  className: string;
  text?: string;
}

export type IIcon = FunctionComponent<IIconProps>;

export type IButton = FunctionComponent<IButtonProps>;
