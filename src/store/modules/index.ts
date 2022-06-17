import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import diary from "./diary";
import time from "./time";

const persistConfig = {
  key: "diary",
  storage: storage,
  whitelist: ["diary"],
};

const rootReducer = combineReducers({
  diary,
  time,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
