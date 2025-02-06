import {
  createError,
  getBasenameConditions,
  getDirEntDataConditions,
  getErrorMessageConditions,
  getIndexFileNameConditions,
  getExportStatementConditions,
} from '@helpers';

import type {
  IFindDirEntData,
  IFindModuleName,
  IFindErrorMessage,
  IFindIndexFileName,
  IFindExportStatement,
} from '@types';

export const findModuleName: IFindModuleName = (basename) => {
  const conditions = getBasenameConditions(basename);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw createError('!findModuleName');
  }

  return result;
};

export const findIndexFileName: IFindIndexFileName = (parentPath) => {
  const conditions = getIndexFileNameConditions(parentPath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw createError('!findIndexFileName');
  }

  return result;
};

export const findExportStatement: IFindExportStatement = (varName, realtivePath) => {
  const conditions = getExportStatementConditions(varName, realtivePath);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw createError('!findExportStatement');
  }

  return result;
};

export const findDirEntData: IFindDirEntData = async (dirEnt, dirEntPath) => {
  const conditions = getDirEntDataConditions(dirEnt, dirEntPath);
  const result = await conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (result === undefined) {
    throw createError('!findDirEntData');
  }

  return result;
};

export const findErrorMessage: IFindErrorMessage = (reason) => {
  const conditions = getErrorMessageConditions(reason);
  const result = conditions.find(({ checkCondition }) => checkCondition())?.getResult();

  if (!result) {
    throw new Error('Error message condition result not found');
  }

  return result;
};
