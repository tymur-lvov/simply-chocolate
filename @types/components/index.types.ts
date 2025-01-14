import type { FunctionComponent } from 'react';

export interface IIconProps {
  width: number;
  height: number;
  fragment: string;
}

export type IIcon = FunctionComponent<IIconProps>;
