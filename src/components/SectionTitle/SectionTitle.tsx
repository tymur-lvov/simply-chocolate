import { clsx } from 'clsx';

import { filterClassNamesForHeading, wrapAccentPartsWithSpan } from '@helpers';

import type { ISectionTitle } from '@types';

export const SectionTitle: ISectionTitle = ({ className, classNames, data: sectionTitle }) => {
  const isTitleWithAccent = typeof sectionTitle !== 'string';

  return (
    <>
      {!isTitleWithAccent && <h2 className={className}>{sectionTitle}</h2>}
      {isTitleWithAccent && classNames && (
        <h2 className={clsx(filterClassNamesForHeading(classNames))}>
          {wrapAccentPartsWithSpan(sectionTitle, classNames)}
        </h2>
      )}
    </>
  );
};
