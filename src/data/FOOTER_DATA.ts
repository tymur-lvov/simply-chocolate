import type { IFOOTER_DATA } from '@types';

export const FOOTER_DATA: IFOOTER_DATA = {
  sectionTitle: {
    textParts: {
      accent: 'Chocolate ',
      base: 'a delicious cure for a bad day',
    },
  },
  contactsTitle: {
    text: 'Contact us',
  },
  contactsList: {
    contactsItems: [
      {
        href: 'tel:+380684439426',
        text: '+380 (68) 443-94-26',
      },
      {
        href: 'mailto:simplychoc@gmail.com',
        text: 'simplychoc@gmail.com',
      },
    ],
  },
  socialsTitle: {
    text: 'Social networks',
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
  subscriptionForm: {
    input: {
      id: 'email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    button: {
      text: 'Subscribe',
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
          text: 'Subscription successful!',
        },
        description: {
          text: 'You have successfully subscribed\n to our newsletter.',
        },
      },
    },
  },
};
