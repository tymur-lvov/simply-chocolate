import { icons } from '@assets';

import type { IIcon } from '@types';

export const Icon: IIcon = ({ className, width, height, fill = 'none', fragment }) => {
  return (
    <svg className={className} width={width} height={height} fill={fill}>
      <use href={`${icons}#${fragment}`} />
    </svg>
  );
};
