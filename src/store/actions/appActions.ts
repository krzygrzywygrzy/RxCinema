import { AppActionType } from "../action-types";

interface TestAction {
  type: AppActionType.TEST;
}

interface FullfiledAction {
  type: AppActionType.FULFILLED;
  payload: any;
}
export type AppAction = TestAction | FullfiledAction;
