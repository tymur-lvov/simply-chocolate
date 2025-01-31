import type { ISocialsLinkClickHandle } from '@types';

export const socialsLinkClickHandle: ISocialsLinkClickHandle = (setSocialsLinkClickCount) => {
  setSocialsLinkClickCount((prev) => ++prev);
};
