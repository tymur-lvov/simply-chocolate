import type { IHeaderData } from '@types';

export const HeaderData: IHeaderData = {
  logo: {
    mainText: ' CHOCOLATE',
    accentText: 'SIMPLY',
  },
  navList: {
    navItems: [{ text: 'Home' }, { text: 'How it’s made?' }, { text: 'Chocolate is loved' }],
  },
  socialsList: {
    socialsItems: [
      { fragment: 'facebook', href: 'https://www.facebook.com/' },
      { fragment: 'instagram', href: 'https://www.instagram.com/' },
      { fragment: 'twitter', href: 'https://www.x.com/' },
    ],
  },
};