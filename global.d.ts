declare module 'remark';

declare module 'react-typical';

import type { PrismaClient as PrismaClientType } from "@prisma/client";

declare global {
  var prisma: PrismaClientType | undefined; // I'm sorry, but `var` is the best I can do.
}