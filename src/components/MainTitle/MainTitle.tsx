import { clsx } from 'clsx';

import { Heading } from '@components';

import { filterClassNamesForHeading, filterClassNamesForSpan } from '@helpers';

import type { IMainTitle } from '@types';

export const MainTitle: IMainTitle = ({ className, classNames, data }) => {
  return (
    <>
      {className && (
        <h1 className={className}>
          <Heading data={data} />
        </h1>
      )}
      {classNames && (
        <h1 className={clsx(filterClassNamesForHeading(classNames))}>
          <Heading classNames={filterClassNamesForSpan(classNames)} data={data} />
        </h1>
      )}
    </>
  );
};
