import type { NextApiRequest, NextApiResponse } from "next";

import { cors } from "~utils/cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);
}
