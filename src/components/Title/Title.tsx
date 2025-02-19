import { clsx } from 'clsx';

import { Heading } from '@components';

import { filterClassNamesForHeading, filterClassNamesForSpan } from '@helpers';

import type { ITitle } from '@types';

export const Title: ITitle = ({ className, classNames, data }) => {
  return (
    <>
      {className && (
        <h3 className={className}>
          <Heading data={data} />
        </h3>
      )}
      {classNames && (
        <h3 className={clsx(filterClassNamesForHeading(classNames))}>
          <Heading classNames={filterClassNamesForSpan(classNames)} data={data} />
        </h3>
      )}
    </>
  );
};
