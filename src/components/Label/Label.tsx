import { labelModule as css } from '@styles';

import type { ILabel } from '@types';

export const Label: ILabel = ({ data: { id, label } }) => {
  return (
    <label className={css.review_form_label} htmlFor={id}>
      {label?.text}
    </label>
  );
};
