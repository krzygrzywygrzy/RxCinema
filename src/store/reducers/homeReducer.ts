import { Reducer } from "redux";
import { HomeActionType } from "../action-types";
import HomeAction from "../actions/homeActions";

export interface HomeState {
  loading: boolean;
  data?: any;
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
      console.log("eee");
      return { loading: false, data: action.payload };
    }
    case HomeActionType.ERROR: {
      return { loading: false, data: action.payload };
    }
    default:
      return state;
  }
};

export default homeReducer;
