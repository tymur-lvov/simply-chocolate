import { useMedia } from '@hooks';

import type { IGetVariantText } from '@types';

export const getVariantText: IGetVariantText = (textVariants) => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  if (isMobile) {
    return textVariants?.mobile?.text || textVariants?.tablet?.text || '';
  }

  if (isTablet) {
    return textVariants?.tablet?.text || textVariants?.mobile?.text || '';
  }

  if (isDesktop) {
    return textVariants?.desktop?.text || textVariants?.tablet?.text || '';
  }

  return '';
};
