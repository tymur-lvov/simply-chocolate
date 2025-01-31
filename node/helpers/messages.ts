import type {
  IGetDirEntDataErrorMessage,
  IGetModuleNameErrorMessage,
  IGetIndexFileNameErrorMessage,
  IGetExportStatementErrorMessage,
} from '@types';

export const getModuleNameErrorMessage: IGetModuleNameErrorMessage = () => {
  return 'Index file name condition result not found';
};

export const getIndexFileNameErrorMessage: IGetIndexFileNameErrorMessage = () => {
  return 'Index file name condition result not found';
};

export const getExportStatementErrorMessage: IGetExportStatementErrorMessage = () => {
  return 'Export condition result not found';
};

export const getDirEntDataErrorMessage: IGetDirEntDataErrorMessage = () => {
  return 'DirEnt data condition result not found';
};
