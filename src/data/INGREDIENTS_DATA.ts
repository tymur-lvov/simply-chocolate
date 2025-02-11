import {
  chocolate_1x,
  chocolate_2x,
  milk_1x,
  milk_2x,
  nuts_1x,
  nuts_2x,
  coffee_1x,
  coffee_2x,
  cacao_1x,
  cacao_2x,
  raspberry_1x,
  raspberry_2x,
  coconut_1x,
  coconut_2x,
  vanilla_1x,
  vanilla_2x,
} from '@assets';

import type { IINGREDIENTS_DATA } from '@types';

export const INGREDIENTS_DATA: IINGREDIENTS_DATA = {
  sectionTitle: {
    startPart: 'It all adds up to one exceptional ',
    accentPart: 'taste',
    endPart: ' sensation',
  },

  ingredientsList: {
    ingredientsItems: [
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: chocolate_1x,
            x2: chocolate_2x,
          },
          alt: 'milk chocolate',
        },
        title: 'milk chocolate',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: milk_1x,
            x2: milk_2x,
          },
          alt: 'milk',
        },
        title: 'milk',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: nuts_1x,
            x2: nuts_2x,
          },
          alt: 'nuts',
        },
        title: 'nuts',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: coffee_1x,
            x2: coffee_2x,
          },
          alt: 'semi - sweet chocolate',
        },
        title: 'semi - sweet chocolate',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: cacao_1x,
            x2: cacao_2x,
          },
          alt: 'cacao',
        },
        title: 'cacao',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: raspberry_1x,
            x2: raspberry_2x,
          },
          alt: 'raspberry',
        },
        title: 'raspberry',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: coconut_1x,
            x2: coconut_2x,
          },
          alt: 'coconut oil',
        },
        title: 'coconut oil',
      },
      {
        link: {
          href: '/',
        },
        icon: {
          width: 24,
          height: 24,
          fragment: 'arrow_right',
        },
        image: {
          width: 236,
          height: 176,
          paths: {
            x1: vanilla_1x,
            x2: vanilla_2x,
          },
          alt: 'vanilla',
        },
        title: 'vanilla',
      },
    ],
  },
};
