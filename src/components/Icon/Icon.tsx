import { getIconPath } from '@helpers';

import type { IIcon } from '@types';

export const Icon: IIcon = ({
  data,
  fragment,
  className,
  fragmentKey,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const iconPath = getIconPath(data?.fragment || fragment || '', fragmentKey, data?.fragments);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg width={data?.width} height={data?.height}>
        <use href={iconPath} />
      </svg>
    </div>
  );
};
