import { icons } from '@assets';

import type { IIcon } from '@types';

export const Icon: IIcon = ({ width, height, fragment }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#${fragment}`} />
    </svg>
  );
};
