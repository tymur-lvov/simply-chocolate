import { icons } from '@assets';

import type { IIcon } from '@types';

export const Icon: IIcon = ({ className, fragment, width, height }) => {
  return (
    <div className={className}>
      <svg width={width} height={height}>
        <use href={`${icons}#${fragment}`} />
      </svg>
    </div>
  );
};
