import { PrismaClient } from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";
let prisma: PrismaClientType;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  prisma =
    global.prisma ||
    new PrismaClient({
      log: ["query"],
    });
}

export { prisma };
