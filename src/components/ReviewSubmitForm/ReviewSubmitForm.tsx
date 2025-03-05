import { useState } from 'react';

import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import { type ChangeEvent, type FormEvent } from 'react';
import type { IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs, button } }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [fieldError, setFieldError] = useState({
    name: false,
    email: false,
    phone: false,
    comment: false,
  });

  const validateField = ({ id, value }: HTMLInputElement) => {
    console.log(id, value);

    const regExp = {
      name: /^[A-Za-z\s\-]{2,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      phone: /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
      comment: /^[A-Za-z0-9\s.,!?()\-'"%$#@:;]{2,500}$/,
    };

    const pattern = regExp[id as keyof typeof regExp];

    return pattern.test(value);
  };

  const validateFields = (fields: HTMLFormControlsCollection) => {
    return Array.from(fields).some((field) => !validateField(field as HTMLInputElement));
  };

  const fieldChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    if (!validateField(event.target) && event.target.value !== '') {
      setFieldError((prev) => ({ ...prev, [event.target.id]: true }));
    } else {
      setFieldError((prev) => ({ ...prev, [event.target.id]: false }));
    }
  };

  const formSubmitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    console.log(validateFields(form.elements));
  };

  return (
    <form className={css.review_form} onSubmit={formSubmitHandle}>
      <Title
        classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.review_form_title]}
        data={title}
      />
      {inputs.map((input) => (
        <div className={css.field_error_wrapper} key={input.id}>
          <Field
            isFieldDataValid={fieldError[input.id as keyof typeof fieldError]}
            data={input}
            onChange={fieldChangeHandle}
          />
          {/* <FieldError
            data={input.errorText}
            fieldError={fieldError[input.id as keyof typeof fieldError]}
          /> */}
        </div>
      ))}
      <Button className={css.review_form_button} type='submit' data={button} />
    </form>
  );
};
