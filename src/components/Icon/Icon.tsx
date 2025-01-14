import { icons } from '@assets';

export const Icon = ({ width, height, fragment }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#${fragment}`} />
    </svg>
  );
};
