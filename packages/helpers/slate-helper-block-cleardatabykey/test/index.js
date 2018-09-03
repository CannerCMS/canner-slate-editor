import path from 'path';
import packageJSON from '../package.json';
import matchTest from '../../../test/match-test';

matchTest(
  packageJSON.name,
  path.resolve(__dirname, 'input.yaml'),
  path.resolve(__dirname, 'expected.yaml'),
  path.resolve(__dirname, 'transform.js')
)
