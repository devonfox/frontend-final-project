import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { symbol } = req.query;
  const apiKey = process.env.POLYGON_API_KEY as string;

  https: try {
    const response = await fetch(
      `https://api.polygon.io/vX/reference/financials?ticker=${symbol}&apiKey=${apiKey}`,
    );
    const data: { data: any } = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
