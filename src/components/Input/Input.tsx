import { clsx } from 'clsx';

import { Icon } from '@components';

import { inputModule as css } from '@styles';

import type { IInput } from '@types';

export const Input: IInput = ({
  className,
  data: { id, type, icon },
  isFieldValid,
  reviewFormStatus,
  onChange,
}) => {
  const { isSubmitAttempted } = reviewFormStatus.event;

  return (
    <div className={css.review_form_input_icon_wrapper}>
      <input className={className} id={id} type={type} autoComplete='true' onChange={onChange} />
      <Icon
        className={clsx({
          [css.review_form_input_icon]: true,
          [css.review_form_input_icon__error]: !isFieldValid && isSubmitAttempted,
        })}
        data={icon}
      />
    </div>
  );
};
