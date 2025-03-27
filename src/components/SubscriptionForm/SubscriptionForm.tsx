import { Button } from '@components';

import { subscriptionFormModule as css } from '@styles';

import type { ISubscriptionForm } from '@types';

export const SubscriptionForm: ISubscriptionForm = ({ data: { input, button } }) => {
  return (
    <form className={css.form}>
      <input className={css.input} type={input.type} placeholder={input.placeholder} />
      <Button className={css.button} data={button} type='submit' />
    </form>
  );
};
