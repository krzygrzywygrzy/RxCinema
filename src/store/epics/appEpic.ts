import { Epic, ofType } from "redux-observable";
import { map, mergeMap, Observable } from "rxjs";
import { AppActionType } from "../action-types";
import { AppAction } from "../actions/appActions";
import { RootState } from "../reducers";
import { ajax } from "rxjs/ajax";

const fetchFullFilled = (payload: any) => ({ type: AppActionType.FULFILLED, payload });

export function sampleEpic(action$: Observable<AppAction>) {
  return action$.pipe(
    ofType(AppActionType.TEST),
    mergeMap((_action) =>
      ajax
        .getJSON("https://jsonplaceholder.typicode.com/users")
        .pipe(map((response) => fetchFullFilled(response)))
    )
  );
}

const appEpics = [sampleEpic];

export default appEpics;
