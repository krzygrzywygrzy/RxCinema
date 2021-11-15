import { combineEpics } from "redux-observable";

import appEpics from "./appEpic";

const epics = combineEpics(...appEpics);

export default epics;