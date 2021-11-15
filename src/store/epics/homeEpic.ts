import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { HomeActionType } from "../action-types";
import { mergeMap, Observable, map, catchError, of } from "rxjs";
import HomeAction from "../actions/homeActions";
import { __API_LINK__ } from "../../core/exports";

const fetched = (payload: any) => ({ type: HomeActionType.FETCHED, payload });

export function homeFetchEpic(action$: Observable<HomeAction>) {
  return action$.pipe(
    ofType(HomeActionType.FETCH),
    mergeMap((_action) =>
      ajax
        .getJSON(`${__API_LINK__}/movie/popular?api_key=${process.env.REACT_APP_FILM_API_KEY}`)
        .pipe(
          map((response) => fetched(response)),
          catchError((err) =>
            of({
              type: HomeActionType.ERROR,
              payload: err,
            })
          )
        )
    )
  );
}

const homeEpics = [homeFetchEpic];
export default homeEpics;
