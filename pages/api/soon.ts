// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const getMovieThisWeek = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  );

  return data.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results: Movie = await getMovieThisWeek();

  res.status(200).json({
    data: results,
  });
}
