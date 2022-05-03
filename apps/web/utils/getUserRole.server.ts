import { User } from "@prisma/client";
import { resolveNaptr } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { prisma } from "./Prisma";

export type UserRole = "admin" | "client";
export const validRoles: Array<UserRole> = ["admin", "client"];

async function getUserRole_Prod( // Determine the current role of the logged in user; return null if not logged in or not specified
  req: NextApiRequest,
  res: NextApiResponse
): Promise<UserRole | null> {
  const session = await getSession({ req });

  if (!session || session.status === "unauthenticated") {
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

  // @ts-ignore
  if (validRoles.includes(role)) {
    // @ts-ignore
    return role;
  } else {
    return null;
  }
}

async function getUserRole_Dev(): Promise<UserRole> {
  return "admin";
}

export async function getUserRole( // Determine the current role of the logged in user; return null if not logged in or not specified
  req: NextApiRequest,
  res: NextApiResponse
): Promise<UserRole | null> {
  return getUserRole_Prod(req, res);
}
