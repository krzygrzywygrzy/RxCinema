import React from "react";
import { Link } from "wouter";
import { __IMAGE_LINK__ } from "../../core/exports";
import { Navigation } from "../../core/navigation";
import Film from "../../models/Film";

interface FilmPosterProps {
  film: Film;
}

const FilmPoster: React.FC<FilmPosterProps> = ({ film }) => {
  return (
    <Link href={Navigation.FILM + `/${film.id}`} className="cursor-pointer">
      <div className="w-72">
        <img src={__IMAGE_LINK__ + film.poster_path} alt={film.title} className="rounded-xl" />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="font-medium w-2/3">{film.title}</div>
        {/* <div className="text-xl">{film.vote_average}</div> */}
      </div>
    </Link>
  );
};

export default FilmPoster;
