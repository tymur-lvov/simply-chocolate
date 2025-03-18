import {
  milk_1x,
  milk_2x,
  nuts_1x,
  nuts_2x,
  cacao_1x,
  cacao_2x,
  coffee_1x,
  coffee_2x,
  coconut_1x,
  coconut_2x,
  vanilla_1x,
  vanilla_2x,
  raspberry_1x,
  raspberry_2x,
  chocolate_1x,
  chocolate_2x,
} from '@assets';

import type { IINGREDIENTS_DATA } from '@types';

export const INGREDIENTS_DATA: IINGREDIENTS_DATA = {
  sectionTitle: {
    textParts: {
      start: 'It all adds up to one exceptional ',
      accent: 'taste',
      end: ' sensation',
    },
    isAccented: true,
  },
  ingredientsList: {
    ingredientsItems: [
      {
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
        title: {
          text: 'milk chocolate',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Milk Chocolate',
            },
            description: {
              text: 'Smooth, creamy, and perfectly sweet.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'milk',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Milk',
            },
            description: {
              text: 'Adds a creamy, smooth texture and a delicate sweetness to every bite.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'nuts',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Nuts',
            },
            description: {
              text: 'Crunchy and flavorful, they bring a rich, nutty depth to the chocolate.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'semi - sweet chocolate',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Coffee',
            },
            description: {
              text: 'Bold and aromatic, it enhances the chocolate with a deep, roasted flavor.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'cacao',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Cacao',
            },
            description: {
              text: 'The heart of every chocolate, delivering intense, rich cocoa notes.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'raspberry',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Raspberry',
            },
            description: {
              text: 'A tangy and fruity touch that pairs perfectly with the sweetness of chocolate.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'coconut oil',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Coconut Oil',
            },
            description: {
              text: 'Adds a subtle tropical aroma and a silky smooth texture.',
            },
          },
        },
      },
      {
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
        title: {
          text: 'vanilla',
        },
        modal: {
          closeButton: {
            icon: {
              width: 24,
              height: 24,
              fragment: 'close',
            },
          },
          ingredientDescription: {
            title: {
              text: 'Vanilla',
            },
            description: {
              text: 'A warm and fragrant essence that enhances the chocolate\u2019s natural sweetness.',
            },
          },
        },
      },
    ],
  },
};
