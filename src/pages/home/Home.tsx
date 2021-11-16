import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeState } from "../../store/reducers/homeReducer";
import { RootState } from "../../store/reducers";
import { HomeActionType } from "../../store/action-types";
import FilmPoster from "../../components/Posters/FilmPoster";

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

  /**
   * Layout
   */
  if (homeState.loading) {
    return <div>Loading...</div>;
  }

  if (homeState.error) {
    return <div>Error: {homeState.error.message}</div>;
  }

  return (
    <div className="relative">
      <header className="my-16 site-container text-6xl">
        <p>Your reactice catalog of films...</p>
        <p>and TV shows!</p>
      </header>

      <main>
        <section className="my-8 ml-32">
          <div className="text-3xl mb-8 font-medium">Popular films</div>
          <div className="flex overflow-scroll w-full hide-scrollbar">
            {homeState.data?.results.map((film) => {
              return (
                <div key={film.id} className="mr-4">
                  <FilmPoster film={film} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
  /**
   * Layout
   */
};

export default Home;
