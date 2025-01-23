import { clsx } from 'clsx';

import { Button } from '@components';

import { CtaButtonsModule as css } from '@styles';

import type { ICtaButtons } from '@types';

export const CtaButtons: ICtaButtons = ({ ctaButtons: { orderButton, infoButton } }) => {
  return (
    <div className={css['hero__cta-btns-wrapper']}>
      <Button className={clsx(css['hero__main-btn'], css['hero__main-btn--order'])}>
        {orderButton.text}
      </Button>
      <Button className={clsx(css['hero__main-btn'], css['hero__main-btn--info'])}>
        {infoButton.text}
      </Button>
    </div>
  );
};
