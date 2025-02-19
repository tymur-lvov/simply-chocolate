import type { IFilterClassNameForSpan } from '@types';

export const filterClassNamesForSpan: IFilterClassNameForSpan = (classNames) => {
  return classNames.filter((className) => className.includes('accent'));
};
