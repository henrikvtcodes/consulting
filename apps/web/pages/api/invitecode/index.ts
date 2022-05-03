import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Prisma } from "@prisma/client";

import { cors } from "utils/cors";
import { prisma } from "utils/Prisma";
import {
  lookupCode,
  createCode,
  markCodeAsUsed,
} from "utils/Prisma/inviteCode";
import { getUserRole } from "utils/getUserRole.server";
import { getUser } from "utils/apiAuth";
import { genHexCode } from "utils/nanoid";
import { resourceUsage } from "process";

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
      if (role !== "admin") {
        res.status(403).send("Unauthorized");
        res.end;
        return;
      }

      let code: string | undefined = body["code"];

      let newCode: string;

      try {
        newCode = await createCode(code);
      } catch (e) {
        res.status(500).json({
          status: "Internal Server Error. Code could not be generated.",
          error: e as string,
        });
        return;
      }

      res.status(200).json({ code: newCode });
      res.end();
      return;

    case "POST":
      let codeToUse: string | undefined = body["code"];

      if (!codeToUse) {
        res.status(400).send("No code provided");
        res.end;
        return;
      }

      const codeData = await prisma.invite.findUnique({
        where: { token: codeToUse },
      });

      let userEmail = session?.user?.email;

      if (!userEmail) {
        res.status(500).send("Server Error: Invalid user");
        res.end;
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      if (!user) {
        res.status(401).send("Invalid user");
        res.end;
        return;
      }

      if (codeData?.used) {
        res.status(400).send("Code already used");
        res.end;
        return;
      }

      if (user?.isInvited === true) {
        res.status(400).send("User has already been invited");
        res.end;
        return;
      }

      const usedCode = await markCodeAsUsed(codeToUse, user?.id);

      if (usedCode instanceof Error) {
        res.status(500).send(usedCode.message);
        res.end;
        return;
      }

      if (usedCode === true) {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            isInvited: true,
          },
        });

        res.status(302);

        res.setHeader("Location", `/auth`);

        res.end();
      }
  }
}
