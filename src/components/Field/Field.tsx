import { clsx } from 'clsx';

import { Checkbox, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';

export const Field: IField = ({ isFieldDataValid, data, onChange }) => {
  return (
    <>
      {data.label && <Label data={data} />}
      {(data.type === 'text' || data.type === 'email' || data.type === 'number') && (
        <Input
          className={clsx({
            [css.review_form_input]: true,
            [css.review_form_input__error]: isFieldDataValid,
          })}
          data={data}
          onChange={onChange}
        />
      )}
      {data.type === 'textArea' && (
        <TextArea
          className={clsx({
            [css.review_form_input]: true,
            [css.review_form_input__error]: isFieldDataValid,
          })}
          data={data}
          onChange={onChange}
        />
      )}
      {data.type === 'checkbox' && <Checkbox data={data} />}
    </>
  );
};
