import { icons } from '@assets';

import { getIconFragment } from '@helpers';

import type { IGetIconPath } from '@types';

export const getIconPath: IGetIconPath = (...props) => {
  return `${icons}#${getIconFragment(...props)}`;
};
