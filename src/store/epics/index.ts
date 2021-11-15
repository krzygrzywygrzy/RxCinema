import { combineEpics } from "redux-observable";

import homeEpics from "./homeEpic";

const epics = combineEpics(...homeEpics);

export default epics;