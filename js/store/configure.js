'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from '../reducers';
import promiseMiddleware from './promise';


const middlewares = [
    thunkMiddleware,
    promiseMiddleware
];


const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;


if (isDebuggingInChrome) {
    const loggerMiddleware = createLogger({
        predicate: (getState, action) => isDebuggingInChrome,
        collapsed: true,
        duration: true
    });
    middlewares.push(loggerMiddleware)
}


export default function configureStore() {

    const store = applyMiddleware(...middlewares)(createStore)(reducers);

    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}
