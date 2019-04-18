import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/commons/error-boundary/error-boundary';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import * as Sentry from '@sentry/browser';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, thunk, historyMiddleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// Middleware for sagas
sagaMiddleware.run(rootSaga);

// Sentry for track errors in App (mtorre4580@outlook.com)
if (process.env.NODE_ENV !== 'production') {
  Sentry.init({
    dsn: 'https://89b3585b8f56475cb7ae719e7d480daf@sentry.io/1439761'
  });
}

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ErrorBoundary>
, document.getElementById('root'));