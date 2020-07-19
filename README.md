# frontend-meli

Frontend of the interview application from mercadolibre.

[![Build Status](https://travis-ci.com/mtorre4580/front-meli.svg?branch=master)](https://travis-ci.com/mtorre4580/front-meli)
[![Coverage Status](https://coveralls.io/repos/github/mtorre4580/front-meli/badge.svg?branch=master)](https://coveralls.io/github/mtorre4580/front-meli?branch=master)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org)

## Overview

The application was developed with [React](https://reactjs.org/).
It was used [Redux](https://redux.js.org/) to handle the application state, [Redux Saga](https://redux-saga.js.org/) for the side effects, it was applied
[Redux Form] (https://redux-form.com/) to handle the state of the search form, [Axios] (https://github.com/axios/axios) as a client for HTTP requests,
[Boostrap] (https://getbootstrap.com/) for styles, [SASS] (https://sass-lang.com/) as a preprocessor, [Recompose] (https://github.com/acdlite/recompose ) in order not to create stateful components in the case of needing a specific lifecycle such as componentDidMount, React Router for route management.

[CHANGELOG] can be accessed (https://github.com/mtorre4580/front-meli/blob/master/CHANGELOG.md)
Development - Master

## Start App

``` 
$ npm install
```

``` 
$ npm start
``` 

## Observación

The application I thought separate both the front and the backend, to run you need to have the node backend raised
You can find it here [api-meli] (https://github.com/mtorre4580/api-meli), in case it was not, the only thing to do is set by express to take the build in a static way

## Build and Release

``` 
$ npm run build
```

``` 
$ npm run release
```

## Test (Jest / Enzyme)

The application has unit tests located in the __tests__ `src / __ tests__` folder.
[Jest] (https://jestjs.io/) was used for the tests using [Enzyme] (https://airbnb.io/enzyme/) for the components to have snapshots of the versions that
they are being created, tests of the actions were performed, reducers.

```
$ npm run test
```

## Storybook

The application has [Storybook] (https://storybook.js.org/) to have a documentation of the components provided by the App.
They are divided by functionality, they can be found in the `stories` folder

```
$ npm run storybook
```
[http://localhost:9001](http://localhost:9001)

<div style="text-align:center;margin:auto">
    <img src ="storybook.png" />
</div>

## Sentry

The application has error tracking via [Sentry] (https://sentry.io/welcome/) free account for testing (15 days).

<div style="text-align:center;margin:auto">
    <img src ="sentry.png" />
</div>

## Semantic Commits

The integration is made with semantic commits that allow to have afterwards an automatic CHANGELOG when making a release. (feat, style, chore ...)

Formato: `<type>(<scope>): <subject>`

## Performance

To verify the app's performance, a script was created that runs lighthouse in performance mode.
Some data needs to be corrected and parameterized ...

```
$ npm run performance
```
