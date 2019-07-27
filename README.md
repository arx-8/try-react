[![Netlify Status](https://api.netlify.com/api/v1/badges/31a07445-a91f-4f7c-9803-0303061225e3/deploy-status)](https://app.netlify.com/sites/try-react/deploys)

* * *

## Textbook

-   [くるみ割り書房 - りあクト！ TypeScript で始めるつらくない React 開発 第 2 版](https://booth.pm/ja/items/1312652)
    -   [oukayuka/ReactBeginnersBook-2.0](https://github.com/oukayuka/ReactBeginnersBook-2.0)

## Live demo

<https://try-react.netlify.com>

## Quick Start

```sh
npm i
npm start
```

## Stack

|                                                                                                   |                                                              |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| TODO (Async)                                                                                      | typescript-fsa + redux-thunk (**_Sounds good & Recommend_**) |
| [Counter](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/10-redux/03-redux)       | redux-actions                                                |
| [GitHub members](https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/11-async/03-saga) | Plain Redux + redux-saga                                     |
| [TicTacToe](https://reactjs.org/tutorial/tutorial.html)                                           | typescript-fsa                                               |
| [TODO](http://todomvc.com/examples/typescript-react/#/)                                           | Plain Redux                                                  |
| [Reddit Example (Redux Tutorial)](https://redux.js.org/advanced/async-actions)                    | JavaScript + redux-thunk (JS & TS are mixable!)              |

### Inspired design patterns

-   [re-ducks](https://github.com/alexnm/re-ducks)
-   [Atomic Design](https://patternlab.io/)
-   [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Run ESLint with autofix & Type check.

No autofix (Dry run) : `npm run lint-dry`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `GENERATE_SOURCEMAP=true npm run analyze`

Analyzing the bundle size.
Output to `misc\source-map-explorer.html`.

### `npm run eslint-print-config`

Outputs the configuration to be used for the file passed.
See [ESLint --print-config](https://eslint.org/docs/user-guide/command-line-interface#--print-config)

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
