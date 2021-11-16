import { combineEpics } from "redux-observable";
import currentFilmEpics from "./currentFilmEpic";
import homeEpics from "./homeEpic";

const HOME_EPICS = combineEpics(...homeEpics);
const CURRENT_FILM_EPICS = combineEpics(...currentFilmEpics);
export { HOME_EPICS, CURRENT_FILM_EPICS };