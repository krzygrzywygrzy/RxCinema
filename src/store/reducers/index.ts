import { combineReducers } from "redux";
import currentFilmReducer, { CurrentFilmState } from "./currentFilmReducer";
import homeReducer, { HomeState } from "./homeReducer";

export type RootState = {
  homeState: HomeState;
  currentFilmState: CurrentFilmState;
};

const reducers = combineReducers<RootState>({ homeState: homeReducer, currentFilmState: currentFilmReducer });

export default reducers;
