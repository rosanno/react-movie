import { useRef } from "react";
import { GetServerSideProps } from "next";
import { BsPlayCircle } from "react-icons/bs";
import moment from "moment";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Cast from "../../components/CastComponent/Cast";
import Crew from "../../components/CrewComponent/Crew";
import { useTimeHook } from "../../hook/useTimeHoo";
import CustomHead from "../../components/CustomHead";

const Recommendation = ({ movie }: { movie: Result }) => {
  return (
    <>
      <CustomHead title={movie.title} />

      <div className="flex flex-col items-center">
        <div className="w-48">
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt=""
            className="w-full"
          />
        </div>
        <span className="inline-block text-gray-500 text-sm overflow-hidden font-semibold">
          {movie.title}
        </span>
      </div>
    </>
  );
};

const MovieDetails = ({
  singleMovie,
  credits,
  recommendMovies,
}: {
  singleMovie: SingleMovie;
  credits: MovieCast;
  recommendMovies: RecommendMovie;
}) => {
  const time = useTimeHook(singleMovie.movieDetails.runtime);
  const swiperRef = useRef<SwiperCore>();
  const recommedRef = useRef<SwiperCore>();

  return (
    <div className="bg-slate-900 w-full h-screen overflow-auto scroll-smooth transition-all duration-300 scrollbar">
      <div className="relative">
        <Link
          href={`https://www.youtube.com/watch?v=${singleMovie.movieDetails.videos.results[0].key}`}
          target="_blank"
          className="block"
        >
          <div
            className="w-full h-[30vh] md:-[30vh] lg:h-[50vh] bg-cover bg-top bg-no-repeat"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${singleMovie.movieDetails?.backdrop_path}")`,
            }}
          />
          <div className="bg-black/20 w-full absolute top-0 h-[30vh] md:-[30vh] lg:h-[50vh]" />
          <div className="absolute top-24 xl:top-44 flex justify-center w-full"></div>
        </Link>
        <div className="flex flex-col-reverse lg:flex-row mt-7">
          <div className="overflow-hidden w-full lg:w-2/3">
            <div className="px-4 lg:px-16">
              <div className="absolute md:relative top-2">
                <h2 className="text-lg md:text-2xl xl:text-3xl text-white font-semibold">
                  {singleMovie.movieDetails.title}
                </h2>
                <h2 className="text-xs xl:text-sm text-white">{time}</h2>
              </div>
              <p className="text-gray-500 text-sm text-left leading-6 mt-3">
                {singleMovie.movieDetails.overview}
              </p>
              <ul className="mt-6">
                <li>
                  <span className="font-semibold text-sm text-gray-500">
                    Director:
                  </span>
                  {credits.crew.map((credit) => (
                    <span key={credit.id} className="text-gray-500 text-sm">
                      {" "}
                      {credit.job === "Director" && credit.name}
                    </span>
                  ))}
                </li>
                <li>
                  <span className="font-semibold text-sm text-gray-500">
                    Running Time:{" "}
                  </span>
                  <span className="text-gray-500 text-sm">{time}</span>
                </li>
                <li>
                  <span className="font-semibold text-sm text-gray-500">
                    Genre:
                  </span>
                  {singleMovie.movieDetails.genres.map((genre) => (
                    <span key={genre.id} className="text-sm text-gray-500">
                      {" "}
                      {genre.name}
                    </span>
                  ))}
                </li>
                <li>
                  <span className="font-semibold text-sm text-gray-500">
                    Release Date:
                  </span>
                  <span className="text-sm text-gray-500">
                    {" "}
                    {moment(singleMovie.movieDetails.release_date).format(
                      "MMMM D, YYYY"
                    )}
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative px-4 lg:px-16">
              <div className="border-t border-gray-500/10 my-6" />
              <h2 className="text-gray-500 font-semibold">Cast and Crew</h2>
              <div className="overflow-x-scroll lg:overflow-hidden">
                <div className="inline-flex lg:hidden flex-nowrap pt-5 space-x-1">
                  {credits.cast.map((credit) => (
                    <Cast key={credit.id} cast={credit} />
                  ))}
                </div>
                <BsChevronRight
                  className="text-white text-3xl absolute z-10 top-32 right-9 cursor-pointer hidden lg:block xl:block"
                  onClick={() => swiperRef.current?.slideNext()}
                />
                <BsChevronLeft
                  className="text-white text-3xl absolute z-10 top-32 left-9 cursor-pointer hidden lg:block xl:block"
                  onClick={() => swiperRef.current?.slidePrev()}
                />
                <Swiper
                  slidesPerView={6}
                  slidesPerGroup={6}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  className="hidden lg:block"
                >
                  {credits.cast.map((credit) => (
                    <SwiperSlide key={credit.id}>
                      <Cast cast={credit} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="border-t border-gray-500/10 my-10" />
              <h2 className="text-gray-500 font-semibold">Recommendation</h2>
              <div className="overflow-x-scroll block lg:hidden xl:hidden mt-10">
                <div className="inline-flex flex-nowrap space-x-4">
                  {recommendMovies.results.map((movie) => (
                    <Recommendation key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
              <div className="relative mt-8 hidden lg:block xl:block">
                <BsChevronLeft
                  className="text-white text-3xl absolute z-10 top-12 -left-6 cursor-pointer hidden lg:block xl:block"
                  onClick={() => recommedRef.current?.slidePrev()}
                />
                <BsChevronRight
                  className="text-white text-3xl absolute z-10 top-12 -right-6 cursor-pointer hidden lg:block xl:block"
                  onClick={() => recommedRef.current?.slideNext()}
                />
                <Swiper
                  slidesPerView={4}
                  slidesPerGroup={4}
                  onBeforeInit={(swiper) => {
                    recommedRef.current = swiper;
                  }}
                >
                  {recommendMovies.results.map((movie) => (
                    <SwiperSlide>
                      <Recommendation key={movie.id} movie={movie} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

const getCast = async (movie_id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  const data = res.json();

  return data;
};

const getRecommendations = async (movie_id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = res.json();

  return data;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { movieId }: any = context.query;
  const movie_id = movieId[1];
  const res = await fetch(`http://localhost:3000/api/${movie_id}`);
  const movie = await res.json();
  const credits = await getCast(movie_id);
  const recommendMovies = await getRecommendations(movie_id);

  return {
    props: {
      singleMovie: movie,
      credits,
      recommendMovies,
    },
  };
};
