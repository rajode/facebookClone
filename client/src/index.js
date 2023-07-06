import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
import './index.css';

const store = configureStore({reducer:reducers});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
