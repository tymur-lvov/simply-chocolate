import { clsx } from 'clsx';
import { useEffect } from 'react';

import {
  keydownHandle,
  releaseScrollLock,
  backdropClickHandle,
  closeButtonClickHandle,
  addKeydownEventListener,
  removeKeydownEventListener,
} from '@helpers';

import { Button, Icon } from '@components';

import { modalModule as css } from '@styles';

import type { IModal } from '@types';

export const Modal: IModal = ({
  data: { closeButton },
  variant,
  children,
  isModalOpen,
  setIsModalOpen,
}) => {
  useEffect(() => {
    addKeydownEventListener(keydownHandle, setIsModalOpen);

    return () => {
      removeKeydownEventListener(keydownHandle, setIsModalOpen);

      releaseScrollLock();
    };
  }, []);

  return (
    <div
      className={clsx({
        [css.modal_backdrop]: true,
        [css.modal_backdrop__visible]: isModalOpen,
        [css.modal_backdrop__submit_notification]: variant === 'submitNotification',
      })}
      onClick={(event) => backdropClickHandle(event, setIsModalOpen)}
    >
      <div
        className={clsx({
          [css.modal_window]: true,
          [css.modal_window__submit_notification]: variant === 'submitNotification',
        })}
      >
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
