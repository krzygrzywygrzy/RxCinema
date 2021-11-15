import { HomeActionType } from "../action-types/index";

interface Fetch {
  type: HomeActionType.FETCH;
}

interface Fetched {
  type: HomeActionType.FETCHED;
  payload: any;
}

interface Error {
  type: HomeActionType.ERROR;
  payload: any;
}

type HomeAction = Fetch | Fetched | Error;

export default HomeAction;
