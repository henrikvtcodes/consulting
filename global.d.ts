declare module "remark";

declare module "react-typical" {
  any;
}

import type { PrismaClient as PrismaClientType } from "@prisma/client";

declare global {
  var prisma: PrismaClientType;
}
