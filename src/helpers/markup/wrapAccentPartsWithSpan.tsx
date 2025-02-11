import type { IWrapAccentPartsWithSpan } from '@types';

export const wrapAccentPartsWithSpan: IWrapAccentPartsWithSpan = (
  [key, value],
  index,
  classNames
) => {
  if (key.includes('accentPart')) {
    return (
      <span className={classNames[index]} key={value}>
        {value}
      </span>
    );
  }

  return value;
};
