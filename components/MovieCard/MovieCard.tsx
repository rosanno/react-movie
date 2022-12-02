import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }: { movie: Result }) => {
  return (
    <>
      <div className="relative w-24 h-32 md:w-24 md:h-32 xl:w-52 xl:h-72">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
          }
          alt=""
          fill
          className="md:rounded-t-sm xl:rounded-md overflow-hidden bg-white"
        />
      </div>
      <div className="mt-4 w-24 lg:w-24 xl:w-48">
        <p className="text-white text-xs">{movie.title}</p>
      </div>
    </>
  );
};

export default MovieCard;
