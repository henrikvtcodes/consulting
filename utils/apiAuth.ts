import cookie from "cookie";
import { getSession } from "next-auth/react";

import type { NextApiRequest, NextApiResponse } from "next";

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({
      message: "Unauthorized",
    });
    res.end();
  }
  return session;
};

export { getUser };
