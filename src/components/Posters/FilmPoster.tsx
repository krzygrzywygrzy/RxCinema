import React from "react";
import { Link } from "wouter";
import { __IMAGE_LINK__ } from "../../core/exports";
import { Navigation } from "../../core/navigation";
import Film from "../../models/Film";

interface FilmPosterProps {
  film: Film;
  grid?: boolean;
}

const FilmPoster: React.FC<FilmPosterProps> = ({ film, grid }) => {
  return (
    <Link href={Navigation.FILM + `/${film.id}`} className="cursor-pointer">
      <div className={!grid ? `w-72` : ""}>
        {film.poster_path || film.poster_path === "" ? (
          <img src={__IMAGE_LINK__ + film.poster_path} alt={film.title} className="rounded-xl" />
        ) : (
          <div className="rounded-xl bg-gray-300 h-full"></div>
        )}
      </div>
      <div className={`mt-2 flex items-center justify-between ${grid && "mb-2"}`}>
        <div className="font-medium w-2/3">{film.title}</div>
        {/* <div className="text-xl">{film.vote_average}</div> */}
      </div>
    </Link>
  );
};

export default FilmPoster;
