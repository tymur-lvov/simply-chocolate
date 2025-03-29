import { useState } from 'react';

import { subscriptionFormSubmitHandle } from '@helpers';

import { Button, Modal, Portal, SubmitNotification } from '@components';

import { subscriptionFormModule as css } from '@styles';

import type { ISubscriptionForm } from '@types';

export const SubscriptionForm: ISubscriptionForm = ({ data: { input, button, onSubmitModal } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <form
      className={css.form}
      onSubmit={(event) => subscriptionFormSubmitHandle(event, setIsModalOpen)}
    >
      <input
        className={css.input}
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
      />
      <Button className={css.button} data={button} type='submit' />
      <Portal>
        <Modal
          data={onSubmitModal}
          isModalOpen={isModalOpen}
          variant='submitNotification'
          setIsModalOpen={setIsModalOpen}
        >
          <SubmitNotification data={onSubmitModal.submitNotification} />
        </Modal>
      </Portal>
    </form>
  );
};
