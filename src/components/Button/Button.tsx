import type { IButton } from '@types';

export const Button: IButton = ({ children, type = 'button', ...props }) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
