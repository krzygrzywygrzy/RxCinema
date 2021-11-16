import { Reducer } from "redux";
import { FilmDetails } from "../../models/Film";
import CurrentFilmAction from "../actions/currentFilmActions";

export interface CurrentFilmState {
  loading: boolean;
  error?: Error;
  data?: FilmDetails
}

const currentFilmReducer: Reducer<CurrentFilmState> = (state: CurrentFilmState = { loading: false }, action: CurrentFilmAction) => {
  return state;
}

export default currentFilmReducer;