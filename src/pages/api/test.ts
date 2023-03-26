import jsonData from "./test.json";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = jsonData.data;
  res.status(200).json({success: "true", data: data});
}
