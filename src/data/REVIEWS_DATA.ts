import { nazar_1x, nazar_2x, olena_1x, olena_2x, victoria_1x, victoria_2x } from '@assets';

import type { IREVIEWS_DATA } from '@types';

export const REVIEWS_DATA: IREVIEWS_DATA = {
  sectionTitle: {
    textParts: {
      accent: 'Chocolate',
      base: ' is loved',
    },
    isAccented: true,
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
        title: {
          text: 'Victoria Dobrzhanska',
        },
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
        title: {
          text: 'Nazar Babenko',
        },
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
        title: {
          text: 'Olena Kampusch',
        },
        description:
          'Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.',
      },
    ],
  },
  modalToggleButton: {
    text: 'Leave  a review',
  },
  reviewsModal: {
    form: {
      closeButton: {
        icon: {
          width: 24,
          height: 24,
          fragment: 'close',
        },
      },
      title: {
        textVariants: {
          mobile: {
            textParts: {
              base: 'Leave a review\nabout ',
              accent: 'our chocolate',
            },
          },
          tablet: {
            textParts: {
              base: 'Leave a review about ',
              accent: 'our chocolate',
            },
          },
        },
        isAccented: true,
      },
      nameInput: {
        type: 'text',
        label: 'Name',
        icon: {
          width: 18,
          height: 18,
          fragment: 'user',
        },
      },
      emainInput: {
        type: 'email',
        label: 'Email',
        icon: {
          width: 18,
          height: 18,
          fragment: 'email',
        },
      },
      phoneInput: {
        type: 'number',
        label: 'Phone number',
        icon: {
          width: 18,
          height: 18,
          fragment: 'phone',
        },
      },
      commentInput: {
        label: 'Comment',
        placeholder: 'Enter text',
      },
      checkboxInput: {
        link: {
          href: '/',
          text: 'Privacy Policy',
        },
        label: 'I accept the terms and conditions of the ',
        icon: {
          width: 10,
          height: 10,
          fragment: 'checked',
        },
      },
      button: {
        text: 'Send',
        type: 'submit',
      },
    },
  },
};
