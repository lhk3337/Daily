import React from "react";
import ReactDOM from "react-dom";
import "style/global.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "store/modules";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
