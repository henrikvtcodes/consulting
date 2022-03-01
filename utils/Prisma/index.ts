import { PrismaClient } from "@prisma/client";
import type { PrismaClient as PrismaClientType } from "@prisma/client";
let prisma: PrismaClientType;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (global.prisma) {
    global.prisma.$disconnect();
    console.log("Prisma Dev Client: Regenerating");

    global.prisma = new PrismaClient();
  } else if (!global.prisma) {
    console.log("Prisma Dev Client: Generating");
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

prisma = new PrismaClient();

export { prisma };
