import { Reducer } from "redux";
import FilmSet from "../../models/FilmSet";
import { HomeActionType } from "../action-types";
import HomeAction from "../actions/homeActions";

export interface HomeState {
  loading: boolean;
  data?: {
    popularFilms: FilmSet,
    trending: FilmSet,
  };
  error?: Error;
}

const homeReducer: Reducer<HomeState> = (
  state: HomeState = { loading: false },
  action: HomeAction
) => {
  switch (action.type) {
    case HomeActionType.FETCH: {
      return { loading: true, data: state.data };
    }
    case HomeActionType.FETCHED: {
      console.log(action.payload);
      return { loading: false, data: action.payload };
    }
    case HomeActionType.ERROR: {
      return { loading: false, error: new Error(action.payload) };
    }
    default:
      return state;
  }
};

export default homeReducer;
