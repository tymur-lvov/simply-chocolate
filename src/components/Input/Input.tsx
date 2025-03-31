import { clsx } from 'clsx';
import { useEffect } from 'react';

import { getSavedValue } from '@helpers';

import { Icon } from '@components';

import { inputModule as css } from '@styles';

import type { IInput } from '@types';

export const Input: IInput = ({
  data: { id, type, icon },
  className,
  formStatus,
  fieldValues,
  isFieldValid,
  onChange,
  setFormStatus,
  setFieldValues,
  setIsFieldValid,
}) => {
  useEffect(() => {
    const savedValue = getSavedValue(id);

    if (savedValue) {
      setFieldValues((prev) => ({ ...prev, [id]: savedValue }));
    }
  }, []);

  const { isSubmitAttempted } = formStatus;

  return (
    <div className={css.review_form_input_icon_wrapper}>
      <input
        className={className}
        id={id}
        type={type}
        autoComplete='true'
        value={fieldValues[id as keyof typeof fieldValues]}
        onChange={(event) => {
          setFieldValues((prev) => ({ ...prev, [id]: event.target.value }));
          onChange(event, setFormStatus, setIsFieldValid);
        }}
      />
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
