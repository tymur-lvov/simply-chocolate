import type { IHERO_DATA } from '@types';

export const HERO_DATA: IHERO_DATA = {
  mainTitle: {
    textVariants: {
      mobile: {
        text: 'Treat yourself or a loved one\nto our finest ingredients for a\nmoment of pure delight!',
      },
      tablet: {
        text: 'Treat yourself or a loved one to\nour finest ingredients for a moment\nof pure delight!',
      },
    },
  },
  orderLink: {
    href: '#products_section',
    text: 'Buy now',
  },
  infoLink: {
    href: '#recipe_section',
    text: `How it\u2019s made`,
  },
  scrollBlock: {
    link: {
      href: '#ingredients_section',
      text: 'scroll down',
    },
    icon: {
      width: 16,
      height: 16,
      fragment: 'arrow_down',
    },
  },
};
