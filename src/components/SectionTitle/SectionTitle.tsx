import { clsx } from 'clsx';

import { filterClassNamesForHeading, wrapAccentPartsWithSpan } from '@helpers';

import type { ISectionTitle } from '@types';

export const SectionTitle: ISectionTitle = ({
  className,
  classNames,
  data: { text, textParts },
}) => {
  return (
    <>
      {text && <h2 className={className}>{text}</h2>}
      {textParts && classNames && (
        <h2 className={clsx(filterClassNamesForHeading(classNames))}>
          {wrapAccentPartsWithSpan(classNames, textParts)}
        </h2>
      )}
    </>
  );
};
