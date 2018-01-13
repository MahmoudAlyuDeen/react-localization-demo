import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import {
  reducer as beesReducer,
  middleware as beesMiddleware,
} from "redux-bees";

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    bees: beesReducer,
  });

  // noinspection JSUnresolvedVariable
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // noinspection JSCheckFunctionSignatures
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(beesMiddleware())),
  );
};
