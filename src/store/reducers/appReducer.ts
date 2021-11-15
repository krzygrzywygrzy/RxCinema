import { AppActionType } from "../action-types";
import { AppAction } from "../actions/appActions";

export interface AppState {
  payload?: any
}

const appReducer = (state: AppState = {}, action: AppAction) => {
  switch (action.type) {
    case AppActionType.TEST: {
      return state;
    }
    case AppActionType.FULFILLED: {
      return {pyaload: action.payload}
    }
    default:
      return state;
  }
};

export default appReducer;
