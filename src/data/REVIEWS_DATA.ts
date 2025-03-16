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
        description: {
          text: 'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.',
        },
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
        description: {
          text: 'This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.',
        },
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
        description: {
          text: 'Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.',
        },
      },
    ],
  },
  modalOpenButton: {
    text: 'Leave a review',
  },
  reviewsModal: {
    closeButton: {
      icon: {
        width: 24,
        height: 24,
        fragment: 'close',
      },
    },
  },
  reviewSubmitForm: {
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
    inputs: [
      {
        type: 'text',
        id: 'name',
        label: {
          text: 'Name',
        },
        icon: {
          width: 18,
          height: 18,
          fragment: 'user',
        },
        error: {
          text: 'Name must contain only letters, spaces, and hyphens (2-50 characters).',
          key: 'isNameError',
          icon: {
            width: 18,
            height: 18,
            fragment: 'error',
          },
        },
      },
      {
        type: 'email',
        id: 'email',
        label: {
          text: 'Email',
        },
        icon: {
          width: 18,
          height: 18,
          fragment: 'email',
        },
        error: {
          text: 'Invalid email format. The email must contain "@" symbol and a valid domain name.',
          key: 'isEmailError',
          icon: {
            width: 18,
            height: 18,
            fragment: 'error',
          },
        },
      },
      {
        type: 'tel',
        id: 'phone',
        label: {
          text: 'Phone number',
        },
        icon: {
          width: 18,
          height: 18,
          fragment: 'phone',
        },
        error: {
          text: 'Invalid phone number format. It should be in international or local format.',
          key: 'isPhoneError',
          icon: {
            width: 18,
            height: 18,
            fragment: 'error',
          },
        },
      },
      {
        type: 'textArea',
        id: 'comment',
        label: {
          text: 'Comment',
        },
        placeholder: 'Enter text',
        error: {
          text: 'Comment must contain only letters, numbers, and common punctuation (2-500 characters).',
          key: 'isCommentError',
          icon: {
            width: 18,
            height: 18,
            fragment: 'error',
          },
        },
      },
      {
        type: 'checkbox',
        id: 'privacy',
        link: {
          href: '/',
          text: 'Privacy Policy',
        },
        description: {
          text: 'I accept the terms and conditions of the ',
        },
        icon: {
          width: 10,
          height: 10,
          fragment: 'checked',
        },
      },
    ],
    button: {
      text: 'Send',
      type: 'submit',
    },
    onSubmitModal: {
      closeButton: {
        icon: {
          width: 24,
          height: 24,
          fragment: 'close',
        },
      },
      submitNotification: {
        title: {
          text: 'Thank you!',
        },
        description: {
          text: 'Your review submit was successful.\nSoon it will show up after our moderation.',
        },
      },
    },
  },
};
