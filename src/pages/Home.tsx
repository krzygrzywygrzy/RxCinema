import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { HomeState } from "../store/reducers/homeReducer";
import { RootState } from "../store/reducers";
import { HomeActionType } from "../store/action-types";

const Home: React.FC = () => {
  const homeState: HomeState = useSelector((state: RootState) => state.homeState);
  const dispatch = useDispatch();

  const fetchData = () => dispatch({ type: HomeActionType.FETCH });

  useEffect(() => {
    if (!homeState.data) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <header>Your catalog of films!</header>

      <main>{JSON.stringify(homeState)}</main>
    </div>
  );
};

export default Home;
