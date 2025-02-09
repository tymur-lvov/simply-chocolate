import type { IDescription } from '@types';

export const Description: IDescription = ({ className, data: description }) => {
  return <p className={className}>{description}</p>;
};
