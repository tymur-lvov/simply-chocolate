import { useEffect, useState } from 'react';

import { icons } from '@assets';

import type { IIcon } from '@types';

export const Icon: IIcon = ({
  className,
  fragmentKey,
  data: { width, height, fragment, fragments },
}) => {
  const [fragmentState, setFragmentState] = useState('');

  useEffect(() => {
    if (fragments && fragmentKey) {
      setFragmentState(fragments[fragmentKey]);
    }
  });

  return (
    <div className={className}>
      <svg width={width} height={height}>
        <use href={`${icons}#${fragment || fragmentState}`} />
      </svg>
    </div>
  );
};
