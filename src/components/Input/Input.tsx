import { clsx } from 'clsx';

import { Icon } from '@components';

import { inputModule as css } from '@styles';

import type { IInput } from '@types';

export const Input: IInput = ({
  className,
  isFieldError,
  data: { id, type, icon, error },
  onChange,
}) => {
  return (
    <div className={css.review_form_input_icon_wrapper}>
      <input
        className={clsx(css.review_form_input, className)}
        id={id}
        type={type}
        autoComplete='true'
        onChange={onChange}
      />
      <Icon className={css.review_form_input_icon} data={icon} />
      <Icon
        className={clsx({
          [css.review_form_input_icon]: true,
          [css.review_form_input_icon__error]: true,
          [css.review_form_input_icon__error__visible]: isFieldError,
        })}
        data={error?.icon}
      />
    </div>
  );
};
