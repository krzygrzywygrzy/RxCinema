import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { HomeActionType } from "../action-types";
import { mergeMap, Observable, map, catchError, of, forkJoin } from "rxjs";
import HomeAction from "../actions/homeActions";
import { __API_KEY__, __API_LINK__ } from "../../core/exports";

const trending = () => ajax.getJSON(`${__API_LINK__}/trending/all/week?${__API_KEY__}`)

const popularFilms = () =>
  ajax.getJSON(`${__API_LINK__}/movie/popular/?${__API_KEY__}`);


const fetched = (payload: any) => ({ type: HomeActionType.FETCHED, payload });

export function homeFetchEpic(action$: Observable<HomeAction>) {
  return action$.pipe(
    ofType(HomeActionType.FETCH),
    mergeMap(() =>
      forkJoin({
        popularFilms: popularFilms(),
        trending: trending(),
      })
        .pipe(
          map((response) => fetched(response)),
          catchError((err) =>
            of({
              type: HomeActionType.ERROR,
              payload: err.response,
            })
          )
        )
    )
  );
}

const homeEpics = [homeFetchEpic];
export default homeEpics;
