import type { IErrorIconMouseEnterHandle } from '@types';

export const errorIconMouseEnterHandle: IErrorIconMouseEnterHandle = (
  fieldIndex,
  setFormStatus
) => {
  setFormStatus((prev) => ({ ...prev, isErrorPopupVisible: true, errorFieldIndex: fieldIndex }));
};
