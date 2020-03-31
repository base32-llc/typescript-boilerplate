import dotenv from 'dotenv';

// load the environment variables
dotenv.config();

function main() {
  console.log('This is the main entry point of the program.');
  const test = {
    value: 'test',
  };
  console.log(test.value);
}

main();
