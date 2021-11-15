import React from "react";
import Film from "../../models/Film";

interface FilmPosterProps {
  film: Film;
}

const FilmPoster: React.FC<FilmPosterProps> = ({ film }) => {
  return <div>{film.original_title}</div>;
};

export default FilmPoster;
