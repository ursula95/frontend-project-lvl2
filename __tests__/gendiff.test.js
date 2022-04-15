import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const verifyNestedResult = fs.readFileSync(getPathFile('resultNested.txt'), 'utf-8');
const verifyPlainResult = fs.readFileSync(getPathFile('resultPlain.txt'), 'utf-8');

describe('genDiff', () => {
  test('check genDiff with recurtion json', () => {
    const nestedJson = genDiff(getPathFile('fileNested1.json'), getPathFile('fileNested2.json'));

    expect(nestedJson).toEqual(verifyNestedResult);
  });

  test('check genDiff with recurtion yml', () => {
    const nestedJson = genDiff(getPathFile('fileNested1.yml'), getPathFile('fileNested2.yml'));

    expect(nestedJson).toEqual(verifyNestedResult);
  });

  test('check genDiff to plain format', () => {
    const diff = genDiff(getPathFile('fileNested1.json'), getPathFile('fileNested2.json'), 'plain');

    expect(diff).toEqual(verifyPlainResult);
  });
});
