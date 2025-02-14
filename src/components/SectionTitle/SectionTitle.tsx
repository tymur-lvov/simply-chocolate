import { clsx } from 'clsx';

import { filterClassNamesForHeading, wrapAccentPartsWithSpan } from '@helpers';

import type { ISectionTitle } from '@types';

export const SectionTitle: ISectionTitle = ({ className, classNames, data: { textParts } }) => {
  return (
    <>
      {typeof textParts === 'string' && <h2 className={className}>{textParts}</h2>}
      {typeof textParts === 'object' && classNames && (
        <h2 className={clsx(filterClassNamesForHeading(classNames))}>
          {wrapAccentPartsWithSpan(classNames, textParts)}
        </h2>
      )}
    </>
  );
};
