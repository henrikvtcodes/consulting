import { PrismaClient } from "../../prisma/generated";
import type { PrismaClient as PrismaClientType } from "../../prisma/generated";
let prisma: PrismaClientType;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

export { prisma };
