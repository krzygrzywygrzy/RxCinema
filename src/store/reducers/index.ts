import { combineReducers } from "redux";
import homeReducer, { HomeState } from "./homeReducer";

export type RootState = {
  homeState: HomeState;
};

const reducers = combineReducers<RootState>({ homeState: homeReducer });

export default reducers;
