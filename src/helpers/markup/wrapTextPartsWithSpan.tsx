import { clsx } from 'clsx';

import type { IWrapTextPartsWithSpan } from '@types';

export const wrapTextPartsWithSpan: IWrapTextPartsWithSpan = (classNames, textParts) => {
  return (
    <>
      {textParts &&
        Object.entries(textParts).map(([partType, textPart]) => {
          if (partType.includes('accent')) {
            return (
              <span className={clsx(classNames)} key={textPart}>
                {textPart}
              </span>
            );
          }

          return textPart;
        })}
    </>
  );
};
