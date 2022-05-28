import { combineReducers } from "redux";
import diary from "./diary";
import time from "./time";
export default combineReducers({
  diary,
  time,
});
