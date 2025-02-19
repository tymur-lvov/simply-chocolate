import { useMedia } from '@hooks';

import { wrapTextPartsWithSpan } from '@helpers';

import type { ICommonTitle, IHeading } from '@types';

export const Heading: IHeading = ({ data: { text, textParts, textVariants }, classNames }) => {
  const getTitleText = (textVariants: ICommonTitle['textVariants']) => {
    const { isMobile, isTablet, isDesktop } = useMedia();

    if (isMobile) {
      return textVariants?.mobile?.text;
    }

    if (isTablet) {
      return textVariants?.tablet?.text || textVariants?.mobile?.text;
    }

    if (isDesktop) {
      return (
        textVariants?.desktop?.text || textVariants?.tablet?.text || textVariants?.mobile?.text
      );
    }
  };

  const getTitleTextParts = (textVariants: ICommonTitle['textVariants']) => {
    const { isMobile, isTablet, isDesktop } = useMedia();

    if (isMobile) {
      return textVariants?.mobile?.textParts;
    }

    if (isTablet) {
      return textVariants?.tablet?.textParts || textVariants?.mobile?.textParts;
    }

    if (isDesktop) {
      return (
        textVariants?.desktop?.textParts ||
        textVariants?.tablet?.textParts ||
        textVariants?.mobile?.textParts
      );
    }
  };

  return (
    <>
      {text && text}
      {textVariants && getTitleText(textVariants)}
      {textParts && wrapTextPartsWithSpan(classNames, textParts)}
      {textVariants &&
        classNames &&
        wrapTextPartsWithSpan(classNames, getTitleTextParts(textVariants))}
    </>
  );
};

//processTextVariant processTextParts
