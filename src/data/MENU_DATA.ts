import type { IMENU_DATA } from '@types';

export const MENU_DATA: IMENU_DATA = {
  toggleIcon: {
    width: 32,
    height: 32,
    fragments: {
      open: 'open',
      close: 'close',
    },
    getFragmentKey(isMenuOpen) {
      return (isMenuOpen ? this.fragments?.close : this.fragments?.open) || '';
    },
  },
  navList: {
    navItems: [
      {
        link: {
          href: '/',
          text: 'Home',
        },
      },
      {
        link: {
          href: '/',
          text: 'How it\u2019s made?',
        },
      },
      {
        link: {
          href: '/',
          text: 'Chocolate is loved',
        },
      },
    ],
  },
  socialsList: {
    socialsItems: [
      {
        link: {
          href: 'https://www.facebook.com/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'facebook',
        },
      },
      {
        link: {
          href: 'https://www.instagram.com/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'instagram',
        },
      },
      {
        link: {
          href: 'https://www.x.com/',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'twitter',
        },
      },
    ],
  },
};
