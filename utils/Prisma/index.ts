import { PrismaClient } from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";
let prisma: PrismaClientType;

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    log: ["info", "warn"],
  });
} else {
  prisma =
    global.prisma ||
    new PrismaClient({
      log: ["info", "warn", "error"],
    });
}

export { prisma };
