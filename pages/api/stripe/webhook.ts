import type { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";

import { stripe } from "~utils/stripe";
import { ApiEvent } from "~utils/logger";

export const config = {
  api: {
    bodyParser: false,
  },
};

const logger = new ApiEvent("stripe/webhook");

const whSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const eventData = await buffer(req);

  const eventSignature = req.headers["stripe-signature"];

  // console.log("----- WEBHOOK PROPERTIES -----");
  // console.log(WHSEC_token);
  // console.log(eventData);
  // console.log(eventSignature);
  // console.log("----- WEBHOOK PROPERTIES -----");
  const event = stripe.webhooks.constructEvent(
    eventData,
    // @ts-ignore
    eventSignature,
    whSecret
  );

  logger.info(`Webhook received: ${event.type}`);

  switch (true) {
    default:
      res.status(200);
      res.end();
      console.error("Unhandled event:", event.type);

    case /^customer\.*/gm.test(event.type): // match "customer.*" events
      console.log("Customer Event: ", event.type);
      res.status(200);
      res.end();
      return;
  }
}
