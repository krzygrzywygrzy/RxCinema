import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import reducers, { RootState } from "./store/reducers";
import { Provider } from "react-redux";
import { Route } from "wouter";
import { Navigation } from "./core/navigation";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Film from "./pages/film/Film";
import Footer from "./components/footer/Footer";
import { CURRENT_FILM_EPICS, HOME_EPICS } from "./store/epics";

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

epicMiddleware.run(HOME_EPICS as any);
epicMiddleware.run(CURRENT_FILM_EPICS as any);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <Route path={Navigation.HOME}>
        <Home />
      </Route>
      <Route path={Navigation.FILM + "/:id"}>{(params) => <Film id={parseInt(params.id)} />}</Route>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
