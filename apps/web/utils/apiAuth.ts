import cookie from "cookie";
import { getSession } from "next-auth/react";
import { prisma } from "./Prisma";

import type { NextApiRequest, NextApiResponse } from "next";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session || !session.user) {
    res.status(401).json({
      message: "Unauthorized",
    });
    res.end();
    return;
  }

  return session;
};

export { getUser };
