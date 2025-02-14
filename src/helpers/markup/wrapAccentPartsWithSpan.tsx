import { findClassNameForSpan } from '@helpers';

import type { IWrapAccentPartsWithSpan } from '@types';

export const wrapAccentPartsWithSpan: IWrapAccentPartsWithSpan = (classNames, sectionTitle) => {
  return Object.entries(sectionTitle).map(([key, value]) => {
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
