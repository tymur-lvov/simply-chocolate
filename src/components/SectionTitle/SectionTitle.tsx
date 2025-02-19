import { clsx } from 'clsx';

import { Heading } from '@components';

import { filterClassNamesForHeading, filterClassNamesForSpan } from '@helpers';

import type { ITitle } from '@types';

export const SectionTitle: ITitle = ({ className, classNames, data }) => {
  return (
    <>
      {className && (
        <h2 className={className}>
          <Heading data={data} />
        </h2>
      )}
      {classNames && (
        <h2 className={clsx(filterClassNamesForHeading(classNames))}>
          <Heading classNames={filterClassNamesForSpan(classNames)} data={data} />
        </h2>
      )}
    </>
  );
};
