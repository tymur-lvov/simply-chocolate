import type { IButton } from '@types';

export const Button: IButton = ({ className, type = 'button', text = '', children }) => {
  return (
    <button className={className} type={type}>
      {children}
      {text}
    </button>
  );
};
