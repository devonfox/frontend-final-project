import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { symbol } = req.query;
  const apiKey = process.env.POLYGON_API_KEY as string;

  try {
    const response = await axios.get<{ data: any }>(
      `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${apiKey}`,
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
