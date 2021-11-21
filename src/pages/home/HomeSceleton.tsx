import React from "react";
import PosterSceleton from "../../components/sceletons/PosterSceleton";

const HomeSceleton: React.FC = () => {
  return (
    <div className="site-container">
      <div className="bg-gray-200 rounded py-8 w-2/3 mb-2 mt-16"></div>
      <div className="bg-gray-200 rounded py-8 w-1/3 mb-16"></div>

      <div className="bg-gray-200 rounded py-6 w-96 mb-8"></div>
      <div className="flex">
        <div className="mr-4">
          <PosterSceleton />
        </div>
        <PosterSceleton />
      </div>
    </div>
  );
};

export default HomeSceleton;
