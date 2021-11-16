import { Reducer } from "redux";
import { FilmDetails } from "../../models/Film";
import { FilmActionType } from "../action-types";
import CurrentFilmAction from "../actions/currentFilmActions";

export interface CurrentFilmState {
  loading: boolean;
  error?: Error;
  data?: FilmDetails
}

const currentFilmReducer: Reducer<CurrentFilmState, CurrentFilmAction> = (state: CurrentFilmState = { loading: false }, action: CurrentFilmAction) => {
  switch (action.type) {
    case FilmActionType.FETCH: {
      return { loading: true };
    }
    case FilmActionType.FETCHED: {
      return { loading: false, data: action.payload }
    }
    case FilmActionType.ERROR: {
      return { loading: false, error: Error(action.payload) }
    }
    default: return state;
  }

}

export default currentFilmReducer;