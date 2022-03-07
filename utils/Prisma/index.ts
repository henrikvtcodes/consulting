import { PrismaClient } from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";
import { warn } from "console";
let prisma: PrismaClientType;

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
