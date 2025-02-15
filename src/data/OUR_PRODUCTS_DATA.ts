import {
  honey_1x,
  honey_2x,
  orange_1x,
  orange_2x,
  pineapple_1x,
  pineapple_2x,
  classic_milk_1x,
  classic_milk_2x,
  classic_white_1x,
  classic_white_2x,
  roasted_fruits_1x,
  roasted_fruits_2x,
  lime_and_sea_salt_1x,
  lime_and_sea_salt_2x,
  apple_and_cranberry_1x,
  apple_and_cranberry_2x,
} from '@assets';
import type { IOUR_PRODUCTS_DATA } from '@types';

export const OUR_PRODUCTS_DATA: IOUR_PRODUCTS_DATA = {
  sectionTitle: {
    textParts: {
      base: 'Our ',
      accent: 'products',
    },
  },
  productsList: {
    productsItems: [
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with orange flavor',
          paths: {
            x1: orange_1x,
            x2: orange_2x,
          },
        },
        title: 'Orange',
        description: 'Dark chocolate',
        button: {
          text: '45 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with apple and cranberry flavor',
          paths: {
            x1: apple_and_cranberry_1x,
            x2: apple_and_cranberry_2x,
          },
        },
        title: 'Apple&cranberry',
        description: 'Milk chocolate',
        button: {
          text: '50 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with lime and sea salt flavor',
          paths: {
            x1: lime_and_sea_salt_1x,
            x2: lime_and_sea_salt_2x,
          },
        },
        title: 'Lime&sea salt',
        description: 'Dark chocolate',
        button: {
          text: '66 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with pineapple flavor',
          paths: {
            x1: pineapple_1x,
            x2: pineapple_2x,
          },
        },
        title: 'Pineapple',
        description: 'Dark chocolate',
        button: {
          text: '54 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with classic milk flavor',
          paths: {
            x1: classic_milk_1x,
            x2: classic_milk_2x,
          },
        },
        title: 'Classic',
        description: 'Milk chocolate',
        button: {
          text: '45 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with honey flavor',
          paths: {
            x1: honey_1x,
            x2: honey_2x,
          },
        },
        title: 'Honey',
        description: 'Milk chocolate',
        button: {
          text: '50 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with roasted fruits flavor',
          paths: {
            x1: roasted_fruits_1x,
            x2: roasted_fruits_2x,
          },
        },
        title: 'Roasted fruits',
        description: 'Dark chocolate',
        button: {
          text: '66 UAH',
        },
      },
      {
        image: {
          width: 230,
          height: 201,
          alt: 'Chocolate bar with classic white chocolate flavor',
          paths: {
            x1: classic_white_1x,
            x2: classic_white_2x,
          },
        },
        title: 'Classic',
        description: 'White chocolate',
        button: {
          text: '54 UAH',
        },
      },
    ],
  },
};
