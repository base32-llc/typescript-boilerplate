import dotenv from 'dotenv';
import log from 'electron-log';

// load the environment variables
dotenv.config();

function main() {
  log.info('This is the main entry point of the program.');
  const test = {
    value: 'test',
  };
  log.debug(test.value);
}

main();
