import { getIconPath } from '@helpers';

import type { IIcon } from '@types';

export const Icon: IIcon = ({ className, fragmentKey, data }) => {
  return (
    <div className={className}>
      <svg width={data?.width} height={data?.height}>
        <use href={getIconPath(data?.fragment || '', fragmentKey, data?.fragments)} />
      </svg>
    </div>
  );
};
