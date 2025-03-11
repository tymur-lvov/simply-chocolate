import { clsx } from 'clsx';

import { errorMessageModule as css } from '@styles';

import type { IErrorMessage } from '@types';

export const ErrorMessage: IErrorMessage = ({ className, data, onClick }) => {
  return (
    <div className={clsx(css.error_message_text_wrapper, className)} onClick={onClick}>
      <p className={css.error_message_text}>{data?.text}</p>
    </div>
  );
};
