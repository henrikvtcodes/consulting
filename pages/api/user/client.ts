import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { getUserRole } from "~utils/getUserRole.server";
import { prisma } from "~utils/Prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const role = await getUserRole(req, res);
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({
      status: "Unauthorized",
    });
    return;
  } else if (!session.user) {
    res.status(401).json({
      status: "Unauthorized",
    });
    return;
  }

  switch (req.method) {
    default:
      res.status(501).end();
      return;

    case "GET":
      const user = await prisma.user.findUnique({
        where: {
          // @ts-ignore
          email: session?.user.email,
        },
      });
      !session;
      res.status(200).json({ role });
      res.end();
      return;
  }
}
