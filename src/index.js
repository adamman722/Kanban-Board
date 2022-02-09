import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";

const store = configureStore({
  reducer: {}
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
