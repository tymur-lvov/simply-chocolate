import { clsx } from 'clsx';

import { BenefitsList, SectionTitle } from '@components';

import { CONTAINER, SECTION, VISUALLY_HIDDEN } from '@constants';

import { BENEFITS_DATA as data } from '@data';

import { benefitsModule as css } from '@styles';

import type { IBenefits } from '@types';

export const Benefits: IBenefits = () => {
  return (
    <section className={clsx(css.benefits, SECTION)}>
      <div className={clsx(css.benefits_container, CONTAINER)}>
        <SectionTitle className={VISUALLY_HIDDEN} data={data.sectionTitle} />
        <BenefitsList data={data.benefitsList} />
      </div>
    </section>
  );
};
