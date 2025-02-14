import { findClassNameForSpan } from '@helpers';

import type { IWrapAccentPartsWithSpan } from '@types';

export const wrapAccentPartsWithSpan: IWrapAccentPartsWithSpan = (classNames, textParts) => {
  return Object.entries(textParts).map(([key, value]) => {
    if (key.includes('accentPart')) {
      return (
        <span className={findClassNameForSpan(classNames)} key={value}>
          {value}
        </span>
      );
    }

    return value;
  });
};
