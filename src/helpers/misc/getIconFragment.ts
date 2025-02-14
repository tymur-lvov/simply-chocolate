import type { IGetIconFragment } from '@types';

export const getIconFragment: IGetIconFragment = (fragment, fragmentKey, fragments) => {
  if (fragments && fragmentKey) {
    return fragments[fragmentKey];
  }

  return fragment;
};
