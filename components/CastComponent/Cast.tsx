import React from "react";

const Cast = ({ cast }: { cast: Cast }) => {
  return (
    <div key={cast.id} className="mt-5 flex flex-col items-center">
      <img
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
            : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
        }
        alt=""
        className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-cover rounded-full overflow-hidden"
      />
      <p className="text-center text-white text-sm font-semibold w-24">
        {cast.name}
      </p>
      <p className="text-center text-sm text-gray-500 truncate w-24 mt-1">
        as {cast.character}
      </p>
    </div>
  );
};

export default Cast;
