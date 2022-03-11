import React from "react";

const FilmSceleton: React.FC = () => {
  return (
    <div className="site-container grid grid-cols-4">
      <div className="rounded py-8 my-8 h-96 bg-gray-200"></div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default FilmSceleton;
