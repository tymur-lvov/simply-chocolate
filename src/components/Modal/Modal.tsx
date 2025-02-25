import { clsx } from 'clsx';
import { useEffect, type MouseEvent } from 'react';

import { toggleModal } from '@helpers';

import { Button, Icon } from '@components';

import { modalModule as css } from '@styles';

import type { IBooleanStateSetter, IModal } from '@types';

export const Modal: IModal = ({ children, isModalOpen, setIsModalOpen, data: { closeButton } }) => {
  const keydownHandle = (event: KeyboardEvent, setIsModalOpen: IBooleanStateSetter) => {
    if (event.key === 'Escape') {
      toggleModal('close', setIsModalOpen);
    }
  };

  const backdropClickHandle = (
    event: MouseEvent<HTMLElement>,
    setIsModalOpen: IBooleanStateSetter
  ) => {
    if (event.target === event.currentTarget) {
      toggleModal('close', setIsModalOpen);
    }
  };

  const closeButtonClickHandle = (
    event: MouseEvent<HTMLElement>,
    setIsModalOpen: IBooleanStateSetter
  ) => {
    const parentButton = (event.target as HTMLElement).closest('button');

    if (parentButton?.className.includes('close_button')) {
      toggleModal('close', setIsModalOpen);
    }
  };

  const addKeydownEventListener = (
    keydownHandle: (event: KeyboardEvent, setIsModalOpen: IBooleanStateSetter) => void
  ) => {
    document.addEventListener('keydown', (event) => keydownHandle(event, setIsModalOpen));
  };

  const removeKeydownEventListener = (
    keydownHandle: (event: KeyboardEvent, setIsModalOpen: IBooleanStateSetter) => void
  ) => {
    document.removeEventListener('keydown', (event) => keydownHandle(event, setIsModalOpen));
  };

  useEffect(() => {
    addKeydownEventListener(keydownHandle);

    return () => removeKeydownEventListener(keydownHandle);
  }, []);

  return (
    <div
      className={clsx({
        [css.modal_backdrop]: true,
        [css.modal_backdrop__visible]: isModalOpen,
      })}
      onClick={(event) => backdropClickHandle(event, setIsModalOpen)}
    >
      <div className={css.modal_window}>
        <Button
          className={css.modal_close_button}
          onClick={(event) => closeButtonClickHandle(event, setIsModalOpen)}
        >
          <Icon className={css.modal_close_icon} data={closeButton.icon} />
        </Button>
        {children}
      </div>
    </div>
  );
};
