import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore from "swiper";
import MovieCard from "../components/MovieCard/MovieCard";

const removeUrlSpace = (url: string) => {
  return encodeURIComponent(decodeURIComponent(url).replace(/\s+/g, ""));
};

const LatestMovie = ({
  movies,
  heading,
}: {
  movies: Movies | any;
  heading: string;
}) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <>
      <h1 className="text-white uppercase text-2xl pb-6">{heading}</h1>
      <div className="hidden md:hidden lg:hidden xl:block relative">
        <BsChevronRight
          className="hidden xl:block text-white text-3xl cursor-pointer absolute z-10 -right-8 top-[37%]"
          onClick={() => swiperRef.current?.slideNext()}
        />
        <BsChevronLeft
          className="hidden xl:block text-white text-3xl cursor-pointer absolute z-10 -left-8 top-[37%]"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Swiper
          breakpoints={{
            1280: {
              width: 1280,
              slidesPerView: 6,
              slidesPerGroup: 6,
              spaceBetween: 100,
            },
            768: {
              width: 768,
              slidesPerView: 7,
              slidesPerGroup: 7,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={false}
        >
          {movies.data?.results.map((movie: Result) => (
            <SwiperSlide key={movie.id}>
              <Link
                href={`movie/${removeUrlSpace(movie.title)}/${movie.id}`}
                className="block hover:-translate-y-2 py-2 transition duration-500"
              >
                <MovieCard movie={movie} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block md:block lg:block xl:hidden">
        <div className="grid grid-flow-col auto-cols-max gap-3 overflow-x-scroll scroll-smooth">
          {movies.data?.results.map((movie: Result) => (
            <div key={movie.id}>
              <Link
                href={`movie/${removeUrlSpace(movie.title)}/${movie.id}`}
                className="block"
              >
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestMovie;
