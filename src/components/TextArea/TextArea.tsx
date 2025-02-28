import { clsx } from 'clsx';

import { textAreaModule as css } from '@styles';

import type { ITextArea } from '@types';

export const TextArea: ITextArea = ({ className, data: { id, placeholder } }) => {
  return (
    <textarea
      id={id}
      className={clsx(css.review_form_text_area, className)}
      placeholder={placeholder}
    />
  );
};
