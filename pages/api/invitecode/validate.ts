import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Prisma } from "@prisma/client";

import { cors } from "~utils/cors";
import { prisma } from "~utils/Prisma";
import {
  lookupCode,
  createCode,
  markCodeAsUsed,
} from "~utils/Prisma/inviteCode";
import { getUserRole } from "~utils/getUserRole.server";
import { getUser } from "~utils/apiAuth";
import { genHexCode } from "~utils/nanoid";
import { create } from "domain";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);

  const role = await getUserRole(req, res);

  const body = req.body;

  switch (req.method) {
    default:
      res.status(501).end();

    case "POST":
      if (role !== "admin") {
        res.status(403).send("Unauthorized");
        res.end;
        return;
      }

      let code: string = body["code"];
      let isValid = await lookupCode(code);

      console.log(`Lookup code ${code}:`, isValid);

      if (isValid === true) {
        res.status(200).json({
          message: "Code is valid",
          isValid,
        });
        res.end();
        return;
      } else if (isValid === false) {
        res.status(200).json({
          message: "Code has already been used.",
          isValid,
        });
        res.end;
        return;
      } else if (isValid === null) {
        res.status(404).json({
          message: "Code is not found.",
          isValid: false,
        });
        res.end;
        return;
      }
  }
}
