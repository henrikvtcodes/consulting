import type { NextApiRequest, NextApiResponse } from "next";

import { getUserRole } from "utils/getUserRole.server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const role = await getUserRole(req, res);

  switch (req.method) {
    default:
      res.status(501).end();
      return;

    case "GET":
      res.status(200).json({ role });
      res.end();
      return;
  }
}
