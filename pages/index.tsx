import Head from "next/head";
import CustomHead from "../components/CustomHead";
import LatestMovie from "../components/LatestMovie";

export default function Home({
  movies,
  showing,
  comingSoon,
}: {
  movies: Movie;
  showing: Movie;
  comingSoon: Movie;
}) {
  return (
    <div className="bg-slate-900 w-full h-screen overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
      <CustomHead title="Home" />

      <main
        id={"slider"}
        className="py-3 px-3 md:px-4 lg:px-20 xl:px-20 2xl:px-20 pt-28"
      >
        <LatestMovie movies={movies} heading="Popular" />
        <div className="mt-8">
          <LatestMovie movies={showing} heading="Now Playing" />
        </div>
        <div className="mt-8">
          <LatestMovie movies={comingSoon} heading="Coming Soon" />
        </div>
      </main>
    </div>
  );
}

async function getLatestMovies() {
  const res = await fetch("http://localhost:3000/api/discover");
  const data = await res.json();

  return data;
}

async function getNowShowing() {
  const res = await fetch("http://localhost:3000/api/showing");
  const data = await res.json();

  return data;
}

async function getComingSoon() {
  const res = await fetch("http://localhost:3000/api/soon");
  const data = await res.json();

  return data;
}

export async function getServerSideProps() {
  const latestMovies = await getLatestMovies();
  const nowShowing = await getNowShowing();
  const comingSoon = await getComingSoon();

  return {
    props: {
      movies: latestMovies,
      showing: nowShowing,
      comingSoon,
    },
  };
}
