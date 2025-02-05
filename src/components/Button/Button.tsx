import type { IButton } from '@types';

export const Button: IButton = ({ children, data, ...props }) => {
  return (
    <button type={data?.type || 'button'} {...props}>
      {children}
    </button>
  );
};
