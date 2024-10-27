import fs from 'fs/promises';
import path from 'path';

import errorCathingDecorator from './errorCathingDecorator.js';

const filterFilePaths = async (dirContent, srcFileDirPath) => {
  const invalidEntities = ['generateReExports', 'index', 'DS_Store'];

  const segregatedEntities = await Promise.all(
    dirContent.map(async (entity) => {
      const entityPath = path.resolve(srcFileDirPath, entity);

      const entityInfo = await fs.lstat(entityPath);

      const isEntityFile = entityInfo.isFile();

      const isEntityValid = !invalidEntities.some((invalidEntitie) =>
        entityPath.includes(invalidEntitie)
      );

      return isEntityFile && isEntityValid ? entity : 'markedForFiltration';
    })
  );

  return segregatedEntities.filter((entity) => entity !== 'markedForFiltration');
};

export default errorCathingDecorator(filterFilePaths);
