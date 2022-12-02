// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title }: any = req.query;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${title[0]}&query=${title[0]}&include_adult=false`
  );
  const results = await response.json();

  res.status(200).json({
    data: results,
  });
}
