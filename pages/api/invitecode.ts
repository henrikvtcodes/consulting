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

    case "GET":
      let code: string = body["code"];
      let isValid = await lookupCode(code);
      if (isValid === true) {
        res.status(200);
        res.end();
        return;
      } else if (isValid === (false || null)) {
        res.status(404).json({
          message:
            typeof isValid === "boolean" ? "Code is Invalid" : "Code not found",
        });
        res.end;
        return;
      }

    case "POST":
      if (role !== "admin") {
        res.status(403).send("Unauthorized");
        res.end;
        return;
      }
      let newCode: string;
      try {
        newCode = await createCode();
      } catch {
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200);
      res.end();
      return;

    case "PATCH":
      if (role !== "admin") {
        res.status(403).send("Unauthorized");
        res.end;
        return;
      }
      let codeToUse: string = body["code"];
      let usedBy = body["usedBy"];
      try {
        markCodeAsUsed(codeToUse, usedBy);
      } catch (error) {
        res.status(500).send(`Internal Server Error: ${error}`);
        res.end;
        return;
      }
      res.status(200);
      res.end();
      return;
  }
}
