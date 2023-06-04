import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { symbol, date } = req.query;
  const apiKey = process.env.POLYGON_API_KEY as string;

  // date is in the format YYYY-MM-DD
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/open-close/${symbol}/${date}?adjusted=true&apiKey=${apiKey}`,
    );
    const data: { data: any } = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
