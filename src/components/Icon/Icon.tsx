import { getIconPath } from '@helpers';

import type { IIcon } from '@types';

export const Icon: IIcon = ({ className, fragment, fragmentKey, data, onClick }) => {
  const iconPath = getIconPath(data?.fragment || fragment || '', fragmentKey, data?.fragments);

  return (
    <div className={className} onClick={onClick}>
      <svg width={data?.width} height={data?.height}>
        <use href={iconPath} />
      </svg>
    </div>
  );
};
