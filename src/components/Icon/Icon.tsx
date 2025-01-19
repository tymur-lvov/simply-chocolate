import { icons } from '@assets';

import type { IIcon } from '@types';

export const Icon: IIcon = ({ className, width, height, fragment }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${icons}#${fragment}`} />
    </svg>
  );
};
