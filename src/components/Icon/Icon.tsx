import { icons } from '@assets';

import { IconModule as css } from '@styles';

export const Icon = ({ width, height, fragment }) => {
  return (
    <div className={css.wrapper}>
      <svg width={width} height={height}>
        <use href={`${icons}#${fragment}`} />
      </svg>
    </div>
  );
};
