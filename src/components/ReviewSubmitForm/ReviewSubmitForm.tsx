import { useState } from 'react';

import { Button, Field, Title } from '@components';

import { SECTION_TITLE, SECTION_TITLE_ACCENT } from '@constants';

import { reviewSubmitFormModule as css } from '@styles';

import type { FormEvent } from 'react';
import type { IReviewSubmitForm } from '@types';

export const ReviewSubmitForm: IReviewSubmitForm = ({ data: { title, inputs, button } }) => {
  const [_, setIsSubmitAttempted] = useState(false);

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();

    setIsSubmitAttempted(true);
  };

  return (
    <form className={css.review_form} onSubmit={formSubmitHandle}>
      <Title
        classNames={[SECTION_TITLE, SECTION_TITLE_ACCENT, css.review_form_title]}
        data={title}
      />
      {inputs.map((input) => (
        <Field data={input} key={input.id} />
      ))}
      <Button className={css.review_form_button} type='submit' data={button} />
    </form>
  );
};
