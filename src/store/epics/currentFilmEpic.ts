import { ofType } from "redux-observable";
import { catchError, forkJoin, map, mergeMap, Observable, of, } from "rxjs";
import { ajax } from "rxjs/ajax";
import { __API_KEY__, __API_LINK__ } from "../../core/exports";
import { FilmActionType } from "../action-types";
import CurrentFilmAction from "../actions/currentFilmActions";


const details = (payload: number) =>
    ajax.getJSON(`${__API_LINK__}/movie/${payload}?${__API_KEY__}`);

const credits = (payload: number) =>
    ajax.getJSON(`${__API_LINK__}/movie/${payload}/credits?${__API_KEY__}`);


const fetched = (payload: any) => ({ type: FilmActionType.FETCHED, payload })

export function currentFilmEpic(action$: Observable<CurrentFilmAction>) {
    return action$.pipe(
        ofType(FilmActionType.FETCH),
        mergeMap((action) =>
            forkJoin({
                details: details(action.payload),
                credits: credits(action.payload),
                //get cast
            }).pipe(
                map((response) => fetched(response)),
                catchError((err) => of({
                    type: FilmActionType.ERROR,
                    payload: err.message,
                }))
            )
        )
    )
}


const currentFilmEpics = [currentFilmEpic];
export default currentFilmEpics;