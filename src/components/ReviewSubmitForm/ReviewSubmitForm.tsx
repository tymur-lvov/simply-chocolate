import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { IReviewSubmitForm } from '@types';
import type { ChangeEvent } from 'react';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs, button } }) => {
  const validateForm = (event: ChangeEvent<HTMLFormElement>) => {
    if (event.target.id === 'name') {
      if (/^[A-Za-z\s\-]{2,50}$/.test(event.target.value)) {
        console.log(event.target.value);
        console.log('Success!');
      }
    }

    if (event.target.id === 'email') {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value)) {
        console.log('Success!');
      }
    }

    if (event.target.id === 'phone') {
      if (
        /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/.test(
          event.target.value
        )
      ) {
        console.log('Success!');
      }
    }

    if (event.target.id === 'phone') {
      if (/^[A-Za-z0-9\s.,!?()\-'"%$#@:;]{2,500}$/.test(event.target.value)) {
        console.log('Success!');
      }
    }
  };

  return (
    <form className={css.review_form} onChange={validateForm}>
      <Title
        classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.review_form_title]}
        data={title}
      />
      {inputs.map((input) => (
        <Field data={input} key={input.id} />
      ))}
      <Button className={css.review_form_button} data={button} />
    </form>
  );
};
