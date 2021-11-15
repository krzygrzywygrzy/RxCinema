import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppActionType } from "../store/action-types";
import { RootState } from "../store/reducers";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const test = () => dispatch({ type: AppActionType.TEST });

  const state = useSelector((state: RootState) => state.appState);

  return (
    <div>
      <button onClick={test}>Click</button>
      <div>{JSON.stringify(state.payload)}</div>
    </div>
  );
};

export default App;
