-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT NOT NULL DEFAULT E'client',
ALTER COLUMN "roleString" DROP NOT NULL,
ALTER COLUMN "roleString" DROP DEFAULT;