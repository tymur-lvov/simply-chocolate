import type { IFilterClassNamesForHeading } from '@types';

export const filterClassNamesForHeading: IFilterClassNamesForHeading = (classNames) => {
  return classNames.filter((className) => !className?.includes('accent'));
};
