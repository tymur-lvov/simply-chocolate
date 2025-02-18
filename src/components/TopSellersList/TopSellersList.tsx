import { clsx } from 'clsx';
import { useState } from 'react';

import { topSellersItemClickHandle } from '@helpers';

import { TopSellersItem } from '@components';

import { VISIBLE } from '@constants';

import { topSellersListModule as css } from '@styles';

import type { ITopSellersList } from '@types';

export const TopSellersList: ITopSellersList = ({ data: { topSellersItems } }) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  return (
    <ul className={css.top_sellers_list}>
      {topSellersItems.map((topSellersItem, itemIndex) => (
        <li
          className={clsx({
            [css.top_sellers_item]: true,
            [VISIBLE]: itemIndex === activeItemIndex,
          })}
          key={topSellersItem.title.text}
          onClick={() => topSellersItemClickHandle(itemIndex, activeItemIndex, setActiveItemIndex)}
        >
          <TopSellersItem data={topSellersItem} />
        </li>
      ))}
    </ul>
  );
};
