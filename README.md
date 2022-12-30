# vue-live

- [vue-live](#vue-live)
  - [Recommended IDE Setup](#recommended-ide-setup)
  - [Type Support for `.vue` Imports in TS](#type-support-for-vue-imports-in-ts)
  - [Customize configuration](#customize-configuration)
  - [Project Setup](#project-setup)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    - [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)
    - [Run Unit Tests with Vitest](#run-unit-tests-with-vitest)
    - [Run End-to-End Tests with Cypress](#run-end-to-end-tests-with-cypress)
    - [Lint with ESLint](#lint-with-eslint)
  - [version history](#version-history)
  - [from old version of the site - to be amalgamated into the new version of the site ...](#from-old-version-of-the-site---to-be-amalgamated-into-the-new-version-of-the-site-)
- [vue-live - work to update](#vue-live---work-to-update)

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## version history
- 0.01 initial commit
   - @philanderson888
   - 30/12/2022
   - basic framework
   - created 5 pages
   - stripped out unwanted css over 1024 pixels
   - created custom icon
   - rename app
   - created first-version in archive\2022\12\first-version folder

## from old version of the site - to be amalgamated into the new version of the site ...

# vue-live - work to update

work to update the old broken site to the new vue-vite site is tracked here

1. https://github.com/philanderson888/vue-live/issues/7
2. https://github.com/philanderson888/course-notes/tree/master/web#main-websites---no-longer-working
