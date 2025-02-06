import type { IIsTargetElementAList } from '@types';

export const isTargetElementAList: IIsTargetElementAList = (target) => {
  return target instanceof HTMLElement && target.nodeName === 'UL';
};
