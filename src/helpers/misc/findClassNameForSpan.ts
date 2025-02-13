import type { IFindClassNameForSpan } from '@types';

export const findClassNameForSpan: IFindClassNameForSpan = (classNames) => {
  return classNames.find((className) => className.includes('accent')) || '';
};
