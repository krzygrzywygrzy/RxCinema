import { combineReducers } from "redux";
import appReducer, { AppState } from "./appReducer";

export type RootState = {
  appState: AppState;
};

const reducers = combineReducers({ appState: appReducer });

export default reducers;
