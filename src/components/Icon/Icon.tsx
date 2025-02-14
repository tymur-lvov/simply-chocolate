import { getIconPath } from '@helpers';

import type { IIcon } from '@types';

export const Icon: IIcon = ({
  className,
  fragmentKey,
  data: { width, height, fragments, fragment = '' },
}) => {
  return (
    <div className={className}>
      <svg width={width} height={height}>
        <use href={getIconPath(fragment, fragmentKey, fragments)} />
      </svg>
    </div>
  );
};
