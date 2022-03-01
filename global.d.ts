declare module 'remark';

declare module 'react-typical';

import type { PrismaClient as PrismaClientType } from "./prisma/generated";

declare global {
  var prisma: PrismaClientType; // I'm sorry, but `var` is the best I can do.
}