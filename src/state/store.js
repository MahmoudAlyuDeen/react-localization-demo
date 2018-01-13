import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { middleware as beesMiddleware, reducer as beesReducer, } from "redux-bees";
import { languageReducer } from "../language/language";
import { loadState, saveState } from "./Persistence";

const configure = (initialState = loadState()) => {
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

const store = configure(loadState());

store.subscribe(() => {
  const state = store.getState();
  console.log("New state", state);
  saveState(store.getState());
});

export default store;