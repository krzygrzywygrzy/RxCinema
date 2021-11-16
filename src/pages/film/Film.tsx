import React, { useEffect } from "react";
import { __IMAGE_LINK__ } from "../../core/exports";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { FilmActionType } from "../../store/action-types";

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

  if (film.error) {
    return <div>Error: {film.error.message}</div>;
  }

  if (film.loading) {
    return <div>Loading...</div>;
  }

  return film.data ? (
    <div className="site-container my-8">
      <main className="grid grid-cols-4">
        <div>
          <img
            alt={film.data?.details.title}
            src={__IMAGE_LINK__ + film.data?.details.poster_path}
            className="rounded-xl"
          />
        </div>
        <div className="ml-4 col-span-2">
          <section>
            <div>
              <span className="text-5xl">{film.data?.details.title}</span>
              <span className="ml-2 text-3xl text-gray-500">
                {/* {new Date(film.data?.details.release_date).getFullYear()} */}
              </span>
            </div>

            <div className="mt-4 text-3xl">
              Average Score: <span className="text-4xl">{film.data?.details.vote_average}</span>
              <span className="ml-2 text-base">by {film.data?.details.vote_count} reviewers</span>
            </div>
            {film.data?.details.tagline && (
              <div className="text-xl mt-4">
                <q>{film.data?.details.tagline}</q>
              </div>
            )}
            <div className="mt-2 border-b pb-4">{film.data?.details.overview}</div>
          </section>
        </div>
      </main>
      <div>{JSON.stringify(film.data.credits)}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default Film;

/* <img alt={data.title} src={__IMAGE_LINK__ + data.backdrop_path} /> */
