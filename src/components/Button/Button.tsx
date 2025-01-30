import type { IButton } from '@types';

export const Button: IButton = ({ children, className, type = 'button', onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
