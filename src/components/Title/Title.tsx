import type { ITitle } from '@types';

export const Title: ITitle = ({ className, data: title }) => {
  return <h3 className={className}>{title}</h3>;
};
