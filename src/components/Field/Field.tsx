import { Checkbox, Input, Label, TextArea } from '@components';

import { fieldModule as css } from '@styles';

import type { IField } from '@types';

export const Field: IField = ({ data }) => {
  return (
    <>
      {data.label && <Label data={data} />}
      {(data.type === 'text' || data.type === 'email' || data.type === 'number') && (
        <Input className={css.review_form_input} data={data} />
      )}
      {data.type === 'textArea' && <TextArea className={css.review_form_input} data={data} />}
      {data.type === 'checkbox' && <Checkbox data={data} />}
    </>
  );
};
