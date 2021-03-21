import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import constantReducer from "./store/reducer/counter";
import resultReducer from "./store/reducer/result";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import think from "redux-thunk";
import thunk from "redux-thunk";

//This adds an extra layer in state now State.counter becomes state.ctr.counter
const rootReducer = combineReducers({
  ctr: constantReducer,
  rslt: resultReducer,
});

//This is middleware, The first function has store input and returns a function
//The second finction has next input and also returns another function
//The third finction has action as input
//The Logger function is a middle ware, it is in between action and reducer
const logger = (store) => {
  return (next) => {
    return (action) => {
      //All store, next and action can be accessed here
      console.log("Middleware Dispatching", action);
      const result = next(action);
      console.log("Middlware next state", store.getState());
      return result;
    };
  };
};
//Redux Thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
//thunk is middleware in place of Saga

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
