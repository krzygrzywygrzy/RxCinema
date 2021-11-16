import { ajax } from "rxjs/ajax";
import { combineEpics, ofType } from "redux-observable";
import { HomeActionType } from "../action-types";
import { mergeMap, Observable, map, catchError, of } from "rxjs";
import HomeAction from "../actions/homeActions";
import { __API_KEY__, __API_LINK__ } from "../../core/exports";

const fetched = (payload: any) => ({ type: HomeActionType.FETCHED, payload });

export function homeFetchEpic(action$: Observable<HomeAction>) {
  return action$.pipe(
    ofType(HomeActionType.FETCH),
    mergeMap(() =>
      ajax
        .getJSON(`${__API_LINK__}/movie/popular/?api_key=${__API_KEY__}`)
        .pipe(
          map((response) => fetched(response)),
          catchError((err) =>
            of({
              type: HomeActionType.ERROR,
              payload: err.message,
            })
          )
        )
    )
  );
}

const homeEpics = [homeFetchEpic];
export default homeEpics;
