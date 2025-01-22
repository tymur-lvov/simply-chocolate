import type { ILink } from '@types';

export const Link: ILink = ({ className, href, children }) => {
  return (
    <a className={className} href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};
