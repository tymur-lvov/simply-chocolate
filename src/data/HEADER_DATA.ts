import type { IHEADER_DATA } from '@types';

export const HEADER_DATA: IHEADER_DATA = {
  logo: {
    link: {
      href: '/',
      text: {
        accentPart: 'SIMPLY',
        mainPart: 'CHOCOLATE',
      },
    },
    icon: {
      width: 21,
      height: 21,
      fragment: 'logo',
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
