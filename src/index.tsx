import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducers, { RootState } from "./store/reducers";
import { Provider } from "react-redux";
import epics from "./store/epics";
import { Route } from "wouter";
import Home from "./pages/Home";
import { Navigation } from "./core/navigation";
import Navbar from "./components/navbar/Navbar";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware<any, any, RootState>();

const configureStore = () => {
  const middleware = [epicMiddleware];
  const enhanders = composeEnhancers(applyMiddleware(...middleware));
  return createStore(reducers, enhanders);
};

const store = configureStore();

epicMiddleware.run(epics as any);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <Route path={Navigation.HOME}>
        <Home />
      </Route>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
