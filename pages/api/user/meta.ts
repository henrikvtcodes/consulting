import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Address, UserMetadata, UserMetaData_Alter } from "types/user";

import { getUserRole } from "~utils/getUserRole.server";
import { prisma } from "~utils/Prisma";
import logger from "~utils/loggerOld";

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

      const userDataObj: UserMetadata = {
        id: user.id,
        email: user.email as string,
        name: user.name as string,
        role: role as string,
        phone: user.phone as string,
        image: user.image as string,
        address_line1: user.addressLine1 as string,
        address_line2: user.addressLine2 as string,
        city: user.addressCity as string,
        state: user.addressState as string,
        postal_code: user.addressZip as string,
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
        address_line1,
        address_line2,
        city,
        state,
        postal_code,
      }: UserMetaData_Alter = req.body;

      // const userAddress: Address = {
      //   street_address: street_address === "" ? undefined : street_address,
      //   city: city === "" ? undefined : city,
      //   state: state === "" ? undefined : state,
      //   postal_code: postal_code === "" ? undefined : postal_code,
      // };

      const newUser = await prisma.user.update({
        where: {
          id: userToUpdate.id,
        },
        data: {
          name: name === "" ? undefined : name,
          phone: phone === "" ? undefined : phone,
          image: photo_url === "" ? undefined : photo_url,
          addressLine1: address_line1 === "" ? undefined : address_line1,
          addressLine2: address_line2 === "" ? undefined : address_line2,
          addressCity: city === "" ? undefined : city,
          addressState: state === "" ? undefined : state,
          addressZip: postal_code === "" ? undefined : postal_code,
        },
      });

      const newUserData: UserMetadata = {
        id: newUser.id,
        email: newUser.email as string,
        name: newUser.name as string,
        role: role as string,
        phone: newUser.phone as string,
        image: newUser.image as string,
        address_line1: newUser.addressLine1 as string,
        address_line2: newUser.addressLine2 as string,
        city: newUser.addressCity as string,
        state: newUser.addressState as string,
        postal_code: newUser.addressZip as string,
      };

      res.status(200).json({
        ...newUserData,
      });
      res.end();

      return;
  }
}
