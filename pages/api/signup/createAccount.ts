import type { NextApiRequest, NextApiResponse } from "next";

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
}
