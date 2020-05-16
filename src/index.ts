import log from 'electron-log';
import { loadEnv } from './utils/loadEnv';

// load the environment variables
loadEnv();

function main() {
  log.info('This is the main entry point of the program.');
  const test = {
    value: 'test',
  };
  log.debug(test.value);
}

main();
