import { User } from "@prisma/client";
import { resolveNaptr } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "./Prisma";

export type UserRole = "admin" | "user" | null;
export const validRoles: Array<UserRole> = ["admin", "user"];

export async function getUserRole( // Determine the current role of the logged in user; return null if not logged in or not specified
  req: NextApiRequest,
  res: NextApiResponse
): Promise<UserRole> {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).send("Unauthenticated");
    res.end();
    return null;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email as string,
    },
  });

  if (!user) {
    return null;
  }

  let role = user.role;

  if (role in validRoles) {
    // @ts-ignore
    return role;
  } else {
    return null;
  }
}
