import React from "react";
import { __IMAGE_LINK__ } from "../../core/exports";
import Cast from "../../models/Cast";

interface PersonPosterProps {
  person: Cast;
}

const PersonPoster: React.FC<PersonPosterProps> = ({ person }) => {
  return (
    <div>
      <div className="w-32">
        {person.profile_path ? (
          <img
            src={__IMAGE_LINK__ + person.profile_path}
            alt={person.name}
            className="rounded-xl"
          />
        ) : (
          <div className="bg-gray-200 rounded-xl  h-48"></div>
        )}
      </div>
      <div className="flex items-center justify-between text-sm">{person.name}</div>
    </div>
  );
};

export default PersonPoster;
