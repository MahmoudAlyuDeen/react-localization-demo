/* eslint-disable no-console */
import omit from "lodash.omit";

const persistenceKey = "1.0.0";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(persistenceKey);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.log("STATE PERSISTENCE LOAD CATCH BLOCK", error);
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(omit(state, ["bees"]));
    localStorage.setItem(persistenceKey, serializedState);
  } catch (error) {
    console.log("STATE PERSISTENCE SAVE CATCH BLOCK", error);
  }
};
