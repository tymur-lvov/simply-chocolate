import { clsx } from 'clsx';
import { useEffect } from 'react';

import { getSavedValue } from '@helpers';

import { textAreaModule as css } from '@styles';

import type { ITextArea } from '@types';

export const TextArea: ITextArea = ({
  data: { id, placeholder },
  className,
  fieldValues,
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

  return (
    <textarea
      className={clsx(css.review_form_text_area, className)}
      id={id}
      value={fieldValues[id as keyof typeof fieldValues]}
      placeholder={placeholder}
      onChange={(event) => {
        setFieldValues((prev) => ({ ...prev, [id]: event.target.value }));
        onChange(event, setFormStatus, setIsFieldValid);
      }}
    />
  );
};
