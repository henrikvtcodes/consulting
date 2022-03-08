import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { UserMetadata, UserMetaData_Alter } from "types/user";

import { getUserRole } from "~utils/getUserRole.server";
import { prisma } from "~utils/Prisma";
import logger from "~utils/logger";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const role = await getUserRole(req, res);
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({
      status: "Unauthenticated",
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

      if (!user) {
        res.status(500).json({
          status: "Server Error: User Not Found",
        });
        return;
      }

      const userDataObj = {
        id: user.id,
        email: user.email as string,
        name: user.name as string,
        role: role as string,
        phone: user.phone as string,
        image: user.image as string,
      };

      res.status(200).json({ data: userDataObj });
      res.end();
      return;

    case "PATCH":
      const userToUpdate = await prisma.user.findUnique({
        where: {
          // @ts-ignore
          email: session?.user.email,
        },
      });

      if (!userToUpdate) {
        res.status(500).json({
          status: "Server Error: User Not Found",
        });
        return;
      }

      const {
        name,
        phone,
        photo_url,
        street_address,
        city,
        state,
        postal_code,
      }: UserMetaData_Alter = req.body;

      const newUser = await prisma.user.update({
        where: {
          id: userToUpdate.id,
        },
        data: {
          name: name === "" ? undefined : name,
          phone: phone === "" ? undefined : phone,
          image: photo_url === "" ? undefined : photo_url,
        },
      });

      const newUserData: UserMetadata = {
        id: newUser.id,
        email: newUser.email as string,
        name: newUser.name as string,
        role: role as string,
        phone: newUser.phone as string,
        image: newUser.image as string,
      };

      res.status(200).json({
        ...newUserData,
      });
      res.end();

      return;
  }
}
