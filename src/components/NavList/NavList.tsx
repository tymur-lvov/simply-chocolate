import { NavItem } from '@components';

import type { INavList } from '@types';

export const NavList: INavList = ({ className, navList: { navItems } }) => {
  return (
    <nav>
      <ul className={className}>
        {navItems.map(({ text }) => (
          <li key={text}>
            <NavItem className={className} text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
