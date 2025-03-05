import { clsx } from 'clsx';

import { fieldErrorModule as css } from '@styles';

import type { IFieldError } from '@types';

export const FieldError: IFieldError = ({ data: errorText, fieldError }) => {
  return (
    <p
      className={clsx({
        [css.error_message]: true,
        [css.error_message__visible]: fieldError,
      })}
    >
      {errorText}
    </p>
  );
};
