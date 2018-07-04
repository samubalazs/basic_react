import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger';

import userReducer from './reducers/userReducer';

import App from './App'

const initialState = {
  user: {}
};

const store = createStore(
  userReducer,
  initialState,
  compose(
    applyMiddleware(createLogger(), thunk)
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
