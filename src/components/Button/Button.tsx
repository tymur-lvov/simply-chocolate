import type { IButton } from '@types';

export const Button: IButton = ({ className, children, type = 'button' }) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};
