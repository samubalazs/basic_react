import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import reducer from './reducers/userReducer'

import App from './App';
const initialState = {
  user: {}
}
const store = createStore( reducer, initialState, compose( applyMiddleware( createLogger(), thunk ) ) );

ReactDOM.render(
  <Provider store={ store }>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);