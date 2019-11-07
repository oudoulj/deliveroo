import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App"; //{App} because no default export from App.js
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
