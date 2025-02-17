import { nazar_1x, nazar_2x, olena_1x, olena_2x, victoria_1x, victoria_2x } from '@assets';

import type { IREVIEWS_DATA } from '@types';

export const REVIEWS_DATA: IREVIEWS_DATA = {
  sectionTitle: {
    textParts: {
      accent: 'Chocolate',
      base: ' is loved',
    },
  },
  reviewsList: {
    reviewsItems: [
      {
        image: {
          width: 80,
          height: 80,
          alt: 'Victoria Dobrzhanska',
          paths: {
            x1: victoria_1x,
            x2: victoria_2x,
          },
        },
        title: 'Victoria Dobrzhanska',
        description:
          'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.',
      },
      {
        image: {
          width: 80,
          height: 80,
          alt: 'Nazar Babenko',
          paths: {
            x1: nazar_1x,
            x2: nazar_2x,
          },
        },
        title: 'Nazar Babenko',
        description:
          'This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.',
      },
      {
        image: {
          width: 80,
          height: 80,
          alt: 'Olena Kampusch',
          paths: {
            x1: olena_1x,
            x2: olena_2x,
          },
        },
        title: 'Olena Kampusch',
        description:
          'Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.',
      },
    ],
  },
  modalToggleButton: {
    text: 'Leave  a review',
  },
};
