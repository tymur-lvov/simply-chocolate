import type { IButton } from '@types';

export const Button: IButton = ({ className, text = '' }) => {
  return <button className={className}>{text}</button>;
};
