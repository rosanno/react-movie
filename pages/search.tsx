import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MovieList from "../components/MovieList/MovieList";
import CustomHead from "../components/CustomHead";
import Pagination from "../components/Pagination/Pagination";

const SearchMovies = ({ movieList }: { movieList: Search }) => {
  const { title }: any = useRouter().query;
  const router = useRouter();
  const [page, setPage] = useState(1);

  const handlePageChange = (event: any) => {
    router.push({
      pathname: "/search",
      query: { title: encodeURI(title), page: event.selected + 1 },
    });
  };

  return (
    <>
      <CustomHead title={decodeURIComponent(title)} />
      <div className="w-full h-screen overflow-auto bg-slate-900 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
        <div className="py-3 px-3 md:px-4 lg:px-20 xl:px-20 2xl:px-20 pt-28">
          <h1 className="text-white text-3xl md:text-3xl lg:text-4xl pb-8">
            Searh results for "{decodeURIComponent(title)}"
          </h1>
          <div className="flex flex-wrap gap-5 overflow-hidden">
            {movieList.data.results.map((movie) => (
              <MovieList key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        {/* <Pagination
          pageCount={movieList.data.total_pages}
          handlePageChange={handlePageChange}
        /> */}
      </div>
    </>
  );
};

export default SearchMovies;

const getSearchResults = async (title: string, page: string) => {
  const res = await fetch(`http://localhost:3000/api/search/${title}/${page}`);
  const data = await res.json();

  return data;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title, page }: any = context.query;

  const data = await getSearchResults(title, page);

  return {
    props: {
      movieList: data,
    },
  };
};
