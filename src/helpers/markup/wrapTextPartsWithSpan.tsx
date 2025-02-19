import { clsx } from 'clsx';

import type { IWrapTextPartsWithSpan } from '@types';

export const wrapTextPartsWithSpan: IWrapTextPartsWithSpan = (classNames = [], textParts) => {
  return (
    <>
      {textParts &&
        Object.entries(textParts).map(([key, value]) => {
          if (key.includes('accent')) {
            return (
              <span className={clsx(classNames)} key={value}>
                {value}
              </span>
            );
          }

          return value;
        })}
    </>
  );
};
