import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
//components
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
//reducers
import { rootReducer } from "./reducers/";
//provider
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
