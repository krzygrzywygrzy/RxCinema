import React from "react";
import { __IMAGE_LINK__ } from "../../core/exports";
import useFetch from "../../core/hooks/useFetch";

interface FilmProps {
  id: number;
}

const Film: React.FC<FilmProps> = ({ id }) => {
  const { data, loading, error } = useFetch(`/movie/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Erorr... {error?.status_message}</div>;
  }

  return (
    <div className="site-container my-8">
      <main className="flex ">
        <div>
          <img alt={data.title} src={__IMAGE_LINK__ + data.poster_path} className="rounded-xl" />
        </div>
        <div className="ml-4">
          <div>
            <span className="text-5xl">{data.title}</span>
            <span className="ml-2 text-3xl text-gray-500">
              {new Date(data.release_date).getFullYear()}
            </span>
          </div>
          <div className="mt-4 text-3xl">
            Average Score: <span className="text-4xl">{data.vote_average}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Film;

/* <img alt={data.title} src={__IMAGE_LINK__ + data.backdrop_path} /> */
