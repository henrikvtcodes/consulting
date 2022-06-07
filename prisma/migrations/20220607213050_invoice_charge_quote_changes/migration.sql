/*
  Warnings:

  - You are about to drop the column `currency` on the `charges` table. All the data in the column will be lost.
  - You are about to drop the column `quoteId` on the `charges` table. All the data in the column will be lost.
  - The `status` column on the `invoices` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `isAccepted` on the `quotes` table. All the data in the column will be lost.
  - You are about to drop the column `isDeclined` on the `quotes` table. All the data in the column will be lost.
  - The `status` column on the `quotes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `quotes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuoteStatus" AS ENUM ('awaitingApproval', 'approved', 'declined', 'invoiced', 'completed');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('draft', 'open', 'paid', 'failed', 'canceled');

-- DropForeignKey
ALTER TABLE "charges" DROP CONSTRAINT "charges_quoteId_fkey";

-- DropIndex
DROP INDEX "charges_quoteId_key";

-- AlterTable
ALTER TABLE "charges" DROP COLUMN "currency",
DROP COLUMN "quoteId";

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "status",
ADD COLUMN     "status" "InvoiceStatus" NOT NULL DEFAULT E'draft';

-- AlterTable
ALTER TABLE "quotes" DROP COLUMN "isAccepted",
DROP COLUMN "isDeclined",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "QuoteStatus" NOT NULL DEFAULT E'awaitingApproval';
