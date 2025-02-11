import { wrapAccentPartsWithSpan } from '@helpers';

import type { ISectionTitle } from '@types';

export const SectionTitle: ISectionTitle = ({ className, classNames, data: sectionTitle }) => {
  return (
    <>
      {typeof sectionTitle !== 'object' && <h2 className={className}>{sectionTitle}</h2>}
      {typeof sectionTitle === 'object' && classNames && (
        <h2 className={classNames[0]}>
          {Object.entries(sectionTitle).map((titleParts, index) =>
            wrapAccentPartsWithSpan(titleParts, index, classNames)
          )}
        </h2>
      )}
    </>
  );
};
