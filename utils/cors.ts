import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

import initMiddleware from "./apiMiddleware";
import { allowedOrigins } from "./config";

export const cors = initMiddleware(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
    origin: allowedOrigins,
  })
);
