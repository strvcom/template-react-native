# PROJECT_NAME

## Get Started

1. To create a project based on this template click on the `Use this template` button
2. Find and Replace `PROJECT_NAME` placeholder with the real project name
3. Delete libraries which do not satisfy project needs
4. Delete this section from `README`
5. To cover your tracks and incorporate the changes to the project's `Initial commit`, run these commands:

```sh
git commit -a --amend
git push -f origin master
```

---

## Documentation

This template was created using the React Native CLI and `react-native init` See more in the official [Getting started](https://facebook.github.io/react-native/docs/getting-started) guide for React Native.

## Prerequisites

Make sure you have Android and iOS setup based on the [Getting started](https://facebook.github.io/react-native/docs/getting-started) guide for React Native.

This template uses [Yarn](https://yarnpkg.com) as a package manager so make sure you have it installed and configured.

### Setup

The first thing you should run is:

```sh
yarn && cd ios && pod install && cd ..
```

This will install all the necessary dependencies in order to run your project.

All scripts need to be run with necessary `ENV` variables. To add an ENV variable, add it in `build:env` script in `package.json` as well as `config/env.ts`. This will then make it accessible through `import { envVars } from '~/config'`.

### Scripts

#### `yarn link-lib`

This is a shorthand for `react-native link` command in case you don't have it installed globally. It is required to link some libraries but should be needed as much now that RN v0.60 is out, which features autolinking.

#### `yarn dev:android`

Runs the project locally in development mode for Android.
You need to have a physical device connected or have a virtual device running in order to start the app.
Make sure you have `ENV` variables specified in a `.env` file.

#### `yarn dev:ios`

Runs the project locally in development mode for iOS.
You need to have a physical device connected or have a virtual device running in order to start the app.
Make sure you have `ENV` variables specified in a `.env` file.

#### `yarn start`

This is the default command to run the server hosting the app. You shouldn't need to run this directly as it gets run by `yarn dev:android` and `yarn dev:ios` internally.s

#### `yarn test`

Runs the [Jest](https://jestjs.io/) test runner.

### Utility scripts

#### `yarn lint (yarn lint:fix)`

Lints thee whole codebase. (The **fix** option also overwrites the files when able.)
Rules are specified in the `.eslintrc.js` config file.

#### `yarn tsc`

Runs the Typescript compiler, showing any errors in the codebase.

## Deployment

Follow the deployment process described here for [Android](https://facebook.github.io/react-native/docs/signed-apk-android) and [iOS](https://facebook.github.io/react-native/docs/running-on-device).

## Additional notes

- This project uses [EditorConfig](https://editorconfig.org/) make sure you have compatible editor for best developer experience.
- This project uses pre-commit hooks using [Husky](https://github.com/typicode/husky) to run linting and prettier, do not skip these hooks in order to maintain the integrity of the codebase.
