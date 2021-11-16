import { FilmActionType } from "../action-types/index";

interface Fetch {
    type: FilmActionType.FETCH;
}

interface Fetched {
    type: FilmActionType.FETCHED;
    payload: any;
}

interface Error {
    type: FilmActionType.ERROR;
    payload: any;
}


type CurrentFilmAction = Fetch | Fetched | Error;

export default CurrentFilmAction;