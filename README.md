# typescript-boilerplate

A quick start repo for typescript projects.

Contains these tools:

1. Prettier for code formatting
2. TSLint for linting
3. Husky & lint-staged for pre-commit hooks (currently foirmats and then lints the code pre-commit)

All of your typescript files should go in the `./src` directory, and the compiled javscript will be available at `./dist`.

## Setup

1. Install the dependencies

`yarn`

We use yarn, however, you can use npm if you like. Simply delete the `yarn.lock` file and run `npm install` intead of `yarn install.`

2. Build the typescript

`yarn build`

3. Start the project

`yarn start`
