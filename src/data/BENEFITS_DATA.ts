import type { IBENEFITS_DATA } from '@types';

export const BENEFITS_DATA: IBENEFITS_DATA = {
  benefitsList: {
    benefitsItems: [
      {
        title: 'Unsurpassed taste',
        description:
          'Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.',
        icon: {
          width: 32,
          height: 32,
          fragment: 'chocolate',
        },
      },
      {
        title: 'Affordable price',
        description:
          "Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.",
        icon: {
          width: 32,
          height: 32,
          fragment: 'coin',
        },
      },
      {
        title: 'Own production',
        description:
          'We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite.',
        icon: {
          width: 32,
          height: 32,
          fragment: 'spoon',
        },
      },
    ],
  },
};
