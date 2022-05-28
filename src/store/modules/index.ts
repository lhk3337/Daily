import { combineReducers } from "redux";
import diary from "./diary";
import time from "./time";
const rootReducer = combineReducers({
  diary,
  time,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
