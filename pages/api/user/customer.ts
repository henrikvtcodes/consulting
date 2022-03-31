import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Address, UserMetadata, UserMetaData_Alter } from "types/user";

import { getUserRole } from "~utils/getUserRole.server";
import { prisma } from "~utils/Prisma";
import { stripe } from "~utils/stripe";
import logger from "~utils/loggerOld";
import { CreateCustomer, UpsertCustomer } from "types/customer";

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
  if (user === null) {
    res.status(500).json({
      status: "Server Error: User Not Found",
    });
    return;
  }

  const customerData = await prisma.customer.findUnique({
    where: {
      userId: user.id,
    },
  });

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

  // ---------- REQUEST HANDLER ----------
  switch (req.method) {
    default:
      res.status(501);
      return;

    case "GET": // ANCHOR Get Customer Data
      if (customerData === null) {
        res.status(200).json({ customerNotFound: true });
        res.end();
        return;
      }

      res.status(200).json({
        first_name: customerData.firstName,
        last_name: customerData.lastName,
        address_line1: customerData.addressLine1,
        address_line2: customerData.addressLine2,
        city: customerData.addressCity,
        state: customerData.addressState,
        postal_code: customerData.addressZip,
        sepBillingAddr: customerData.sepBillingAddr,
      });
      res.end();
      return;

    case "POST": // ANCHOR Create Customer
      let createCustomer: CreateCustomer = req.body;

      for (let key in createCustomer) {
        key = key as string;
        // @ts-ignore
        let value = createCustomer[key];

        // @ts-ignore
        value = value === "" ? userDataObj[key] : value;

        // @ts-ignore
        createCustomer[key] = value;
      }

      const newCustomer = await prisma.customer.create({
        data: {
          userId: user.id,
          firstName: createCustomer.first_name,
          lastName: createCustomer.last_name,
          addressLine1: createCustomer.address_line1,
          addressLine2: createCustomer.address_line2,
          addressCity: createCustomer.city,
          addressState: createCustomer.state,
          addressZip: createCustomer.postal_code,
          sepBillingAddr: createCustomer.sepBillingAddr,
        },
      });

      if (newCustomer === null) {
        res.status(500).json({
          status: "Server Error: Customer Not Created",
        });
        res.end();
        return;
      }

      let fullName = `${newCustomer.firstName} ${newCustomer.lastName}`;

      const newStripeCustomer = await stripe.customers.create(
        {
          name: fullName,
          email: user.email,
          phone: user.phone || undefined,
          address: {
            line1: newCustomer.addressLine1 || (undefined as unknown as string),
            line2: newCustomer.addressLine2 || undefined,
            city: newCustomer.addressCity || undefined,
            state: newCustomer.addressState || undefined,
            postal_code: newCustomer.addressZip || undefined,
            country: "US",
          },
          shipping: {
            name: fullName,
            phone: user.phone || undefined,

            address: {
              line1: newCustomer.addressLine1 || undefined,
              line2: newCustomer.addressLine2 || undefined,
              city: newCustomer.addressCity || undefined,
              state: newCustomer.addressState || undefined,
              postal_code: newCustomer.addressZip || undefined,
              country: "US",
            },
          },
        },
        {}
      );

      const updateStripeId = await prisma.customer.update({
        where: {
          id: newCustomer.id,
        },
        data: {
          stripeID: newStripeCustomer.id,
        },
      });

      res.status(200).json({
        customer: {
          first_name: newCustomer.firstName,
          last_name: newCustomer.lastName,
          address_line1: newCustomer.addressLine1,
          address_line2: newCustomer.addressLine2,
          city: newCustomer.addressCity,
          state: newCustomer.addressState,
          postal_code: newCustomer.addressZip,
          sepBillingAddr: newCustomer.sepBillingAddr,
        },
        stripe: {
          id: newStripeCustomer.id,
        },
      });
      res.end();
      return;

    case "PATCH": // ANCHOR Update Customer
      let upsertCustomer: UpsertCustomer = req.body;

      const addressFields = [
        "address_line1",
        "address_line2",
        "city",
        "state",
        "postal_code",
      ];

      if (!upsertCustomer.sepBillingAddr) {
        // ANCHOR If billing address is not separate, copy user address into billing addressS
        for (let key in upsertCustomer) {
          key = key as string;
          // @ts-ignore
          let value = upsertCustomer[key];

          if (addressFields.includes(key)) {
            // @ts-ignore
            value = userDataObj[key];
            console.log(key, value);
          }

          // @ts-ignore
          upsertCustomer[key] = value;
        }
      }

      upsertCustomer.first_name =
        upsertCustomer.first_name === ""
          ? undefined
          : upsertCustomer.first_name;
      upsertCustomer.last_name =
        upsertCustomer.last_name === "" ? undefined : upsertCustomer.last_name;

      if (
        // If the user is only updating their billing address, convert unchanged fields to undefined
        customerData?.sepBillingAddr === true &&
        upsertCustomer.sepBillingAddr === true
      ) {
        upsertCustomer.address_line1 =
          upsertCustomer.address_line1 === ""
            ? undefined
            : upsertCustomer.address_line1;
        // upsertCustomer.address_line2 =
        //   upsertCustomer.address_line2 === ""
        //     ? undefined
        //     : upsertCustomer.address_line2;
        upsertCustomer.city =
          upsertCustomer.city === "" ? undefined : upsertCustomer.city;
        upsertCustomer.state =
          upsertCustomer.state === "" ? undefined : upsertCustomer.state;
        upsertCustomer.postal_code =
          upsertCustomer.postal_code === ""
            ? undefined
            : upsertCustomer.postal_code;
      } else if (
        customerData?.sepBillingAddr === false &&
        upsertCustomer.sepBillingAddr === true
      ) {
        for (let key in upsertCustomer) {
          key = key as string;
          // @ts-ignore
          let value = upsertCustomer[key];
          console.log("----- Update Customer Data For:", key, "-----");
          console.log(key, value);
          value = value === "" ? undefined : value;
          console.log(key, value);
          // @ts-ignore
          upsertCustomer[key] = value;
        }
      }
      const updatedCustomer = await prisma.customer.update({
        where: {
          userId: user.id,
        },
        data: {
          firstName: upsertCustomer.first_name,
          lastName: upsertCustomer.last_name,
          addressLine1: upsertCustomer.address_line1,
          addressLine2: upsertCustomer.address_line2,
          addressCity: upsertCustomer.city,
          addressState: upsertCustomer.state,
          addressZip: upsertCustomer.postal_code,
          sepBillingAddr: upsertCustomer.sepBillingAddr,
        },
      });

      res.status(200).json({
        customer: {
          first_name: updatedCustomer.firstName,
          last_name: updatedCustomer.lastName,
          address_line1: updatedCustomer.addressLine1,
          address_line2: updatedCustomer.addressLine2,
          city: updatedCustomer.addressCity,
          state: updatedCustomer.addressState,
          postal_code: updatedCustomer.addressZip,
          sepBillingAddr: updatedCustomer.sepBillingAddr,
        },
      });
      res.end();
      return;
  }
}
