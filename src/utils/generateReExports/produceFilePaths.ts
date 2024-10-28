import fs from 'fs/promises';

import filterFilePaths from './filterFilePaths.js';
import errorCathingDecorator from './errorCathingDecorator.js';

const produceFilePaths = async (srcFileDirPath: string): Promise<string[]> => {
  const dirContent = await fs.readdir(srcFileDirPath, { recursive: true });

  const filePaths = await filterFilePaths(dirContent, srcFileDirPath);

  return filePaths.map((filePath) => './' + filePath);
};

export default errorCathingDecorator(produceFilePaths);
