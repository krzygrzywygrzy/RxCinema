import React from "react";
import Film from "../../models/Film";

interface FilmPosterProps {
  film: Film;
}

const FilmPoster: React.FC<FilmPosterProps> = ({ film }) => {
  return <div className="text-red-600">{film.title}</div>;
};

export default FilmPoster;
