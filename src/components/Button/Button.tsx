import type { IButton } from '@types';

export const Button: IButton = ({ children, data, type = 'button', ...props }) => {
  return (
    <button type={type} {...props}>
      {children}
      {data?.text}
    </button>
  );
};
