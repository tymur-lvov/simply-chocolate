import { clsx } from 'clsx';

import { Button } from '@components';

import { CtaButtonsModule as css } from '@styles';

import type { ICtaButtons } from '@types';

export const CtaButtons: ICtaButtons = ({ ctaBtns: { orderBtn, infoBtn } }) => {
  return (
    <div className={css['hero__cta-btns-wrapper']}>
      <Button className={clsx(css['hero__main-btn'], css['hero__main-btn--order'])}>
        {orderBtn.text}
      </Button>
      <Button className={clsx(css['hero__main-btn'], css['hero__main-btn--info'])}>
        {infoBtn.text}
      </Button>
    </div>
  );
};
