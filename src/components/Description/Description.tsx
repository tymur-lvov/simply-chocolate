import type { IDescription } from '@types';

export const Description: IDescription = ({ className, data: { text } }) => {
  return <p className={className}>{text}</p>;
};
