import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Prisma } from "@prisma/client";

import { cors } from "apps/web/utils/cors";
import { prisma } from "apps/web/utils/Prisma";
import {
  lookupCode,
  createCode,
  markCodeAsUsed,
} from "apps/web/utils/Prisma/inviteCode";
import { getUserRole } from "apps/web/utils/getUserRole.server";
import { getUser } from "apps/web/utils/apiAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);

  const role = await getUserRole(req, res);

  const session = await getSession({ req });

  const body = req.body;

  switch (req.method) {
    default:
      res.status(501).end();

    case "GET":
      let userEmail = session?.user?.email;

      if (!userEmail) {
        res.status(500).send("Server Error: Invalid user");
        res.end;
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      res.status(200).json({ invited: user?.isInvited });
  }
}
