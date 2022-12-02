import React from "react";

const Crew = ({ crew }: { crew: Crew }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${crew.profile_path}`}
        alt=""
        className="w-20 h-20 object-cover rounded-full overflow-hidden"
      />
      <p className="text-center text-white text-sm font-semibold w-24">
        {crew.name}
      </p>
      <p className="text-center text-sm text-gray-500 truncate w-24 mt-1">
        {crew.job}
      </p>
    </div>
  );
};

export default Crew;
