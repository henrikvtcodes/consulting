-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'client');

-- AlterTable
ALTER TABLE "users" RENAME COLUMN "role" TO "roleString";
