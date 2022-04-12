import { readFile } from './src/file.js';
import resultDiff from './src/resultDiff.js';

const genDiff = (filepath1, filepath2) => {

  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);

  const obj1 = JSON.parse(fileContent1);
  const obj2 = JSON.parse(fileContent2);

  const diff = resultDiff(obj1, obj2);

  const formatDiff = `{${diff.join('')}\n}`;

  return formatDiff;

}

export default genDiff;
