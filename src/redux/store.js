import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import {
  reducer as beesReducer,
  middleware as beesMiddleware,
} from "redux-bees";
import { languageReducer } from "./language/language";

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    bees: beesReducer,
    language: languageReducer,
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
