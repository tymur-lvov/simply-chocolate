import type { IButton } from '@types';

export const Button: IButton = ({
  className,
  type = 'button',
  tabIndex = 0,
  text = '',
  children,
}) => {
  return (
    <button className={className} type={type} tabIndex={tabIndex}>
      {children}
      {text}
    </button>
  );
};
