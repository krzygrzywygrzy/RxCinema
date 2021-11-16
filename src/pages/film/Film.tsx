import React from "react";

interface FilmProps {
  id: number;
}

const Film: React.FC<FilmProps> = ({ id }) => {
  console.log(id);

  return <div>film</div>;
};

export default Film;
