import {
  isTypesPath,
  isTypeModule,
  readFileData,
  isIncludesDot,
  isNamedModule,
  isEntityAFile,
  isDefaultModule,
  getIndexFileName,
  capitalizeNameParts,
  getEmptyStringPromise,
  getTypesIndexFileName,
  isFindDirEntDataError,
  isFindModuleNameError,
  getNamedExportStatement,
  isFindIndexFileNameError,
  getDefaultExportStatement,
  getDirEntDataErrorMessage,
  getModuleNameErrorMessage,
  isFindExportStatementError,
  getNamedTypeExportStatement,
  getIndexFileNameErrorMessage,
  getExportStatementErrorMessage,
} from '@helpers';

import type {
  IGetBasenameConditions,
  IGetDirEntDataConditions,
  IGetErrorMessageConditions,
  IGetIndexFileNameConditions,
  IGetExportStatementConditions,
} from '@types';

export const getBasenameConditions: IGetBasenameConditions = (basename: string) => {
  return [
    {
      checkCondition: () => !isIncludesDot(basename),
      getResult: () => basename,
    },
    {
      checkCondition: () => isIncludesDot(basename),
      getResult: () => capitalizeNameParts(basename),
    },
  ];
};

export const getErrorMessageConditions: IGetErrorMessageConditions = (reason) => {
  return [
    {
      checkCondition: () => isFindModuleNameError(reason),
      getResult: () => getModuleNameErrorMessage(),
    },
    {
      checkCondition: () => isFindIndexFileNameError(reason),
      getResult: () => getIndexFileNameErrorMessage(),
    },
    {
      checkCondition: () => isFindExportStatementError(reason),
      getResult: () => getExportStatementErrorMessage(),
    },
    {
      checkCondition: () => isFindDirEntDataError(reason),
      getResult: () => getDirEntDataErrorMessage(),
    },
  ];
};

export const getDirEntDataConditions: IGetDirEntDataConditions = (dirEnt, dirEntPath) => {
  return [
    {
      checkCondition: () => isEntityAFile(dirEnt),
      getResult: () => readFileData(dirEntPath),
    },
    {
      checkCondition: () => !isEntityAFile(dirEnt),
      getResult: () => getEmptyStringPromise(),
    },
  ];
};

export const getIndexFileNameConditions: IGetIndexFileNameConditions = (parentPath) => {
  return [
    {
      checkCondition: () => !isTypesPath(parentPath),
      getResult: () => getIndexFileName(),
    },
    {
      checkCondition: () => isTypesPath(parentPath),
      getResult: () => getTypesIndexFileName(),
    },
  ];
};

export const getExportStatementConditions: IGetExportStatementConditions = (
  varName,
  realtivePath
) => {
  return [
    {
      checkCondition: () => isNamedModule(realtivePath),
      getResult: () => getNamedExportStatement(realtivePath),
    },
    {
      checkCondition: () => isTypeModule(realtivePath),
      getResult: () => getNamedTypeExportStatement(realtivePath),
    },
    {
      checkCondition: () => isDefaultModule(realtivePath),
      getResult: () => getDefaultExportStatement(varName, realtivePath),
    },
  ];
};
