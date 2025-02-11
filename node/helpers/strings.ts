import {
  compose,
  getBasename,
  findModuleName,
  getRelativePath,
  sterilizeBasename,
  findExportStatement,
} from '@helpers';

import type {
  ICapitalizeBesidesFirstElement,
  IGetVarName,
  ISplitToParts,
  IDeleteExtension,
  IGetParentDirIndex,
  IGetExportStatement,
  ICapitalizeNameParts,
  ICapitalizeModuleName,
  IConcatExportStatement,
  IGetNamedExportStatement,
  IGetDefaultExportStatement,
  IGetNamedTypeExportStatement,
} from '@types';

export const getNamedExportStatement: IGetNamedExportStatement = (realtivePath) => {
  return `export * from '${realtivePath}';\n`;
};

export const getNamedTypeExportStatement: IGetNamedTypeExportStatement = (realtivePath) => {
  return `export type * from '${realtivePath}';\n`;
};

export const getDefaultExportStatement: IGetDefaultExportStatement = (varName, realtivePath) => {
  return `export { default as ${varName} } from '${realtivePath}';\n`;
};

export const concatExportStatement: IConcatExportStatement = (fileData, exportStatement) => {
  return fileData.concat(exportStatement);
};

export const deleteExtension: IDeleteExtension = (filePath) => {
  return filePath.slice(0, filePath.lastIndexOf('.'));
};

export const splitToParts: ISplitToParts = (div, ...strings) => {
  return strings.map((string) => string.split(div));
};

export const capitalizeModuleName: ICapitalizeModuleName = (basename) => {
  return findModuleName(basename);
};

export const capitalizeNameParts: ICapitalizeNameParts = (basename) => {
  return basename
    .split('.')

    .map((namePart, index) => capitalizeBesidesFirstElement(namePart, index))

    .join('.');
};

export const capitalizeBesidesFirstElement: ICapitalizeBesidesFirstElement = (string, index) => {
  const firstChar = string.charAt(0);

  return index !== 0 ? string.replace(firstChar, firstChar.toUpperCase()) : string;
};

export const getVarName: IGetVarName = (filePath) => {
  const basename = compose(getBasename, deleteExtension, capitalizeModuleName)(filePath);

  return sterilizeBasename(basename);
};

export const getParentDirIndex: IGetParentDirIndex = (parentPathParts, filePathParts) => {
  const lastPathPart = parentPathParts[parentPathParts.length - 1];

  return filePathParts.indexOf(lastPathPart);
};

export const getExportStatement: IGetExportStatement = (parentPath, modulePath) => {
  const varName = getVarName(modulePath);
  const relativePath = getRelativePath(parentPath, modulePath);

  return findExportStatement(varName, relativePath);
};
