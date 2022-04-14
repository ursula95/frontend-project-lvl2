import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const verifyResult = fs.readFileSync(getPathFile('result.txt'), 'utf-8');

describe('genDiff', () => {
  test('check genDiff with JSON', () => {
    const pathJson1 = getPathFile('file1.json');
    const pathJson2 = getPathFile('file2.json');
    const flatJson = genDiff(pathJson1, pathJson2);

    expect(flatJson).toStrictEqual(verifyResult);
  });

  test('check genDiff with YAML', () => {
    const pathYml1 = getPathFile('file1.yml');
    const pathYml2 = getPathFile('file2.yml');
    const flatYml = genDiff(pathYml1, pathYml2);

    expect(flatYml).toStrictEqual(verifyResult);
  });
});
