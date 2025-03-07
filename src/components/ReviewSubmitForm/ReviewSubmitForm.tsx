import { useState } from 'react';

import { Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { ChangeEvent, FormEvent } from 'react';

import type { IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs } }) => {
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  const [_, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [errorStatus, setErrorStatus] = useState({
    isNameError: false,
    isEmailError: false,
    isPhoneError: false,
    isCommentError: false,
  });

  const validateField = (field: HTMLInputElement) => {
    const regExp = {
      name: /^[A-Za-z\s\-]{2,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      phone: /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
    };

    return !regExp[field.id as keyof typeof regExp]?.test(field.value);
  };

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();

    setIsSubmitAttempted(true);

    const form = event.target as HTMLFormElement;

    const fields = {
      name: form.elements.namedItem('name') as HTMLInputElement,
      email: form.elements.namedItem('email') as HTMLInputElement,
      phone: form.elements.namedItem('phone') as HTMLInputElement,
      comment: form.elements.namedItem('comment') as HTMLInputElement,
    };

    const errorStatus = Object.keys(fields).reduce((obj, key) => {
      const errorKey = `is${key.charAt(0).toUpperCase()}${key.slice(1)}Error`;

      obj[errorKey] = validateField(fields[key as keyof typeof fields]);

      return obj;
    }, {} as Record<string, boolean>);

    setErrorStatus((prev) => ({ ...prev, ...errorStatus }));

    if (!Object.keys(errorStatus).some((key) => errorStatus[key as keyof typeof errorStatus])) {
      setFormData({
        name: fields.name.value,
        email: fields.email.value,
        phone: fields.phone.value,
        comment: fields.comment.value,
      });
    }
  };

  const fieldChangeHandle = (event: ChangeEvent) => {
    if (isSubmitAttempted) {
      const field = event.target;

      const errorKey = `is${field.id.charAt(0).toUpperCase()}${field.id.slice(1)}Error`;

      const errorStatus = { [errorKey]: validateField(event.target as HTMLInputElement) };

      setErrorStatus((prev) => ({ ...prev, ...errorStatus }));
    }
  };

  return (
    <form className={css.review_form} onSubmit={formSubmitHandle}>
      <Title
        classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.review_form_title]}
        data={title}
      />
      {inputs.map((input) => (
        <Field
          onChange={fieldChangeHandle}
          isFieldError={errorStatus[input.error?.key as keyof typeof errorStatus]}
          data={input}
          key={input.id}
        />
      ))}
      {/* <Button className={css.review_form_button} type='submit' data={button} /> */}
    </form>
  );
};
