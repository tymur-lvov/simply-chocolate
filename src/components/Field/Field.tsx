import { clsx } from 'clsx';

import { Checkbox, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';

export const Field: IField = ({ isFieldError, data, onChange }) => {
  return (
    <>
      {data.label && <Label data={data} />}
      {(data.type === 'text' || data.type === 'email' || data.type === 'number') && (
        <Input
          className={clsx({
            [css.review_form_field]: true,
            [css.review_form_field__error]: isFieldError,
          })}
          onChange={onChange}
          isFieldError={isFieldError}
          data={data}
        />
      )}
      {data.type === 'textArea' && <TextArea className={css.review_form_field} data={data} />}
      {data.type === 'checkbox' && <Checkbox data={data} />}
    </>
  );
};
