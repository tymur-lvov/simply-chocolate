import {
  dark_chocolate_1x,
  dark_chocolate_2x,
  chocolate_with_nuts_1x,
  chocolate_with_nuts_2x,
  chocolate_with_fruits_1x,
  chocolate_with_fruits_2x,
} from '@assets';
import type { ITOP_SELLERS_DATA } from '@types';

export const TOP_SELLERS_DATA: ITOP_SELLERS_DATA = {
  sectionTitle: {
    textParts: {
      accent: 'Top',
      base: ' sellers',
    },
    isAccented: true,
  },
  topSellersList: {
    topSellersItems: [
      {
        image: {
          width: 335,
          height: 464,
          alt: 'Chocolate with nuts',
          paths: {
            x1: chocolate_with_nuts_1x,
            x2: chocolate_with_nuts_2x,
          },
        },
        title: {
          text: 'Chocolate with nuts',
        },
        description:
          "Chocolate with nuts is a delectable combination that brings together the smoothness of chocolate and the crunchiness of nuts. Whether it's milk chocolate, dark chocolate, or white chocolate, the addition of nuts adds a whole new dimension of flavor and texture.",
      },
      {
        image: {
          width: 335,
          height: 464,
          alt: 'Chocolate with fruits',
          paths: {
            x1: chocolate_with_fruits_1x,
            x2: chocolate_with_fruits_2x,
          },
        },
        title: {
          text: 'Chocolate with fruits',
        },
        description:
          'Chocolate with fruit is an unbeatable combination of two of the tastiest things in the world. This dessert combines delicate and aromatic chocolate with fresh and juicy fruits, creating a true poetry of taste.',
      },
      {
        image: {
          width: 335,
          height: 464,
          alt: 'Dark chocolate',
          paths: {
            x1: dark_chocolate_1x,
            x2: dark_chocolate_2x,
          },
        },
        title: {
          text: 'Dark chocolate',
        },
        description:
          'Dark chocolate is a rich and indulgent treat that is beloved by many chocolate enthusiasts. It is made from cocoa beans, which are roasted, ground, and then processed to produce chocolate liquor. Dark chocolate contains a higher percentage of cocoa solids compared to milk chocolate.',
      },
    ],
  },
};
