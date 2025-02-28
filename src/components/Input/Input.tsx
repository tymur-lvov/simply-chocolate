import { clsx } from 'clsx';

import { Icon } from '@components';

import { inputModule as css } from '@styles';

import type { IInput } from '@types';

export const Input: IInput = ({ className, data: { id, type, icon } }) => {
  return (
    <div className={css.review_form_input_icon_wrapper}>
      <input
        className={clsx(css.review_form_input, className)}
        id={id}
        type={type}
        autoComplete='true'
      />
      <Icon className={css.review_form_input_icon} data={icon} />
    </div>
  );
};
