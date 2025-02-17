import type { ITopSellersItemClickHandle } from '@types';

export const topSellersItemClickHandle: ITopSellersItemClickHandle = (
  itemIndex,
  activeItemIndex,
  setActiveItemIndex
) => {
  if (itemIndex === activeItemIndex) {
    return setActiveItemIndex(null);
  }

  return setActiveItemIndex(itemIndex);
};
