import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const verifyResult = fs.readFileSync(getPathFile('result.txt'), 'utf-8');

test('check genDiff', () => {
  const pathJSON1 = getPathFile('file1.json');
  const pathJSON2 = getPathFile('file2.json');

  expect(genDiff(pathJSON1, pathJSON2)).toStrictEqual(verifyResult);
});