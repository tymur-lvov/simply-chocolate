import { useMedia } from '@hooks';

import type { IGetVariantTextParts } from '@types';

export const getVariantTextParts: IGetVariantTextParts = (textVariants) => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  if (isMobile) {
    return textVariants?.mobile?.textParts || textVariants?.tablet?.textParts;
  }

  if (isTablet) {
    return textVariants?.tablet?.textParts || textVariants?.mobile?.textParts;
  }

  if (isDesktop) {
    return textVariants?.desktop?.textParts || textVariants?.tablet?.textParts;
  }
};
