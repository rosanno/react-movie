import React from "react";
import Link from "next/link";

const MovieList = ({ movie }: { movie: Result }) => {
  return (
    <Link href={`movie/${movie.title}/${movie.id}`} className="w-52 block">
      <div className="w-48 rounded-md overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          className="w-full"
        />
      </div>
      <span className="text-white text-sm truncate inline-block w-40 py-3">
        {movie.title}
      </span>
    </Link>
  );
};

export default MovieList;
