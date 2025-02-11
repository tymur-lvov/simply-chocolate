import { x1_QUERY, x2_QUERY } from '@constants';

import type { IImage } from '@types';

export const Image: IImage = ({ className, data: { width, height, paths, alt } }) => {
  return (
    <div className={className}>
      <picture>
        <source media={x1_QUERY} srcSet={paths.x1} />
        <source media={x2_QUERY} srcSet={paths.x2} />
        <img width={width} height={height} src={paths.x1} alt={alt} />
      </picture>
    </div>
  );
};
