import { clsx } from 'clsx';

import { textAreaModule as css } from '@styles';

import type { ITextArea } from '@types';

export const TextArea: ITextArea = ({ className, data: { id, placeholder }, onChange }) => {
  return (
    <textarea
      className={clsx(css.review_form_text_area, className)}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
