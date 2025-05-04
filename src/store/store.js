import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { rootReducer } from "./root-reducer";

// Only include the logger middleware if we're not in production mode.
// The filter(Boolean) removes 'false' values so the array stays clean.
const middleWares = [process.env.NODE_ENV != 'production' && logger, thunk].filter(Boolean);

// Use Redux DevTools extension in non-production environments if it's available in the browser.
// Otherwise, fall back to the default Redux compose function.
const composeEnhancer = (process.env.NODE_ENV != 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);