import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeState } from "../../store/reducers/homeReducer";
import { RootState } from "../../store/reducers";
import { HomeActionType } from "../../store/action-types";
import FilmPoster from "../../components/Posters/FilmPoster";
import HomeSceleton from "./HomeSceleton";

const Home: React.FC = () => {
  const homeState: HomeState = useSelector(
    (state: RootState) => state.homeState
  );
  const dispatch = useDispatch();

  const fetchData = () => dispatch({ type: HomeActionType.FETCH });

  useEffect(() => {
    if (!homeState.data) {
      fetchData();
    }

    document.title = "RxCinema";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Layout
   */
  if (homeState.loading) {
    return <HomeSceleton />;
  }

  if (homeState.error) {
    console.log(homeState.error);
    return (
      <div className="site-container">Error: {homeState.error.message}</div>
    );
  }

  return (
    <div className="relative">
      <header className="my-16 site-container text-6xl">
        <p>Your reactive catalog of films...</p>
        <p>and TV shows!</p>
      </header>

      <main>
        <section className="home-section">
          <div className="home-section-title">Trending</div>
          <div className="item-roll">
            {homeState.data?.trending.results.map((film) => {
              return (
                <div key={film.id} className="mr-4">
                  <FilmPoster film={film} />
                </div>
              );
            })}
          </div>
        </section>
        <section className="site-container">
          <div className="home-section-title">Popular films</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {homeState.data?.popularFilms.results.map((film) => {
              return (
                <div key={film.id}>
                  <FilmPoster film={film} grid={true} />
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
