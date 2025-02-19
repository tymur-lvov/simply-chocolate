import { getVariantText, getVariantTextParts, wrapTextPartsWithSpan } from '@helpers';

import type { IHeading } from '@types';

export const Heading: IHeading = ({
  classNames,
  data: { text, textParts, textVariants, isAccented },
}) => {
  const wrappedTextParts = wrapTextPartsWithSpan(classNames, textParts);

  const variantText = getVariantText(textVariants);

  const wrappedVariantTextParts = wrapTextPartsWithSpan(
    classNames,
    getVariantTextParts(textVariants)
  );

  return (
    <>
      {text && text}
      {textParts && wrappedTextParts}
      {textVariants && !isAccented && variantText}
      {textVariants && isAccented && wrappedVariantTextParts}
    </>
  );
};
