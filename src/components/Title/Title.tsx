import { clsx } from 'clsx';

import { useMedia } from '@hooks';

import { filterClassNamesForHeading, wrapAccentPartsWithSpan } from '@helpers';

import type { ITitle } from '@types';

export const Title: ITitle = ({
  className,
  classNames,
  data: { text, textParts, textVersions },
}) => {
  const { isMobile, isTablet, isDesktop } = useMedia();

  return (
    <>
      {text && <h3 className={className}>{text}</h3>}
      {textVersions && textVersions.text && (
        <h3 className={className}>
          {isMobile && textVersions.mobile?.text}
          {(isTablet && textVersions.tablet?.text) || textVersions.mobile?.text}
          {(isDesktop && textVersions.desktop?.text) || textVersions.tablet?.text}
        </h3>
      )}
      {textParts && classNames && (
        <h3 className={clsx(filterClassNamesForHeading(classNames))}>
          {wrapAccentPartsWithSpan(classNames, textParts)}
        </h3>
      )}
      {textVersions && classNames && (
        <h3 className={clsx(filterClassNamesForHeading(classNames))}>
          {isMobile &&
            textVersions.mobile?.textParts &&
            wrapAccentPartsWithSpan(classNames, textVersions.mobile.textParts)}
          {isTablet &&
            !textVersions.tablet?.textParts &&
            textVersions.mobile?.textParts &&
            wrapAccentPartsWithSpan(classNames, textVersions.mobile.textParts)}
          {isTablet &&
            textVersions.tablet?.textParts &&
            wrapAccentPartsWithSpan(classNames, textVersions.tablet.textParts)}
          {isDesktop &&
            !textVersions.desktop?.textParts &&
            textVersions.tablet?.textParts &&
            wrapAccentPartsWithSpan(classNames, textVersions.tablet.textParts)}
          {isDesktop &&
            textVersions.desktop?.textParts &&
            wrapAccentPartsWithSpan(classNames, textVersions.desktop.textParts)}
        </h3>
      )}
    </>
  );
};
