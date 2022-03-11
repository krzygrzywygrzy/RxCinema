import React from "react";
import tmdb from "../../assets/img/tmdb.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 h-16 absolute w-full bottom-0">
      <div className="site-container py-4 flex items-center">
        <div className="text-white text-lg">
          RxCinema<span className="text-base ml-8">powered by</span>
        </div>
        <div className="ml-2">
          <a
            href="https://www.themoviedb.org/"
            rel="noreferrer"
            target={"_blank"}
          >
            <img src={tmdb} width="100px" alt="The Movie Database" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
