// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const getDiscover = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`
  );

  return data.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const results: Movie = await getDiscover();

  res.status(200).json({
    data: results,
  });
}
