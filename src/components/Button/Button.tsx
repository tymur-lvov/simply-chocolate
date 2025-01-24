import type { IButton } from '@types';

export const Button: IButton = ({ children, className, type = 'button' }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
