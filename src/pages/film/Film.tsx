import React, { useEffect } from "react";
import { __IMAGE_LINK__ } from "../../core/exports";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { FilmActionType } from "../../store/action-types";
import PersonPoster from "../../components/Posters/PersonPoster";

interface FilmProps {
  id: number;
}

const Film: React.FC<FilmProps> = ({ id }) => {
  const film = useSelector((state: RootState) => state.currentFilmState);
  const dispatch = useDispatch();

  const fetchData = () => dispatch({ type: FilmActionType.FETCH, payload: id });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (film.data) document.title = film.data.details.title;
    else document.title = "loading...";
  }, [film]);

  if (film.error) {
    return <div className="site-container">Cannot Load Selected Film :(</div>;
  }

  if (film.loading) {
    return <div className="site-container">Loading...</div>;
  }

  return film.data ? (
    <div className=" my-8">
      <main className="grid grid-cols-4 border-b pb-4 mb-4 site-container">
        <div>
          <img
            alt={film.data?.details.title}
            src={__IMAGE_LINK__ + film.data?.details.poster_path}
            className="rounded-xl"
          />
        </div>
        <div className="ml-4 col-span-3 md:col-span-2">
          <section>
            <div>
              <span className=" text-3xl lg:text-5xl">
                {film.data?.details.title}
              </span>
              <span className="ml-2 text-3xl text-gray-500">
                {new Date(film.data?.details.release_date).getFullYear()}
              </span>
            </div>
            <div>
              {film.data.details.genres.map((el) => {
                return <span key={el.id}>{el.name}, </span>;
              })}
            </div>

            <div className="mt-4 text-3xl">
              Average Score:{" "}
              <span className="text-4xl">
                {film.data?.details.vote_average}
              </span>
              <span className="ml-2 text-base">
                by {film.data?.details.vote_count} reviewers
              </span>
            </div>
            <span>{film.data.details.status}</span>
            {film.data?.details.tagline && (
              <div className="text-xl mt-4">
                <q>{film.data?.details.tagline}</q>
              </div>
            )}
            <div className="mt-2  pb-4">{film.data?.details.overview}</div>
          </section>
        </div>
      </main>
      <section className="ml-4 md:ml-32">
        <section>
          <div className="text-4xl mb-4">Cast</div>
          <div className="flex item-roll">
            {film.data.credits.cast.map((cast) => {
              return (
                <div key={cast.id} className="mr-4">
                  <PersonPoster person={cast} />
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  ) : (
    <div></div>
  );
};

export default Film;

/* <img alt={data.title} src={__IMAGE_LINK__ + data.backdrop_path} /> */
