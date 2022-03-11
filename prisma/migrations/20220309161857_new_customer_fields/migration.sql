/*
  Warnings:

  - You are about to drop the column `fullName` on the `customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stripeID]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "fullName",
ADD COLUMN     "addressCity" TEXT,
ADD COLUMN     "addressLine1" TEXT,
ADD COLUMN     "addressLine2" TEXT,
ADD COLUMN     "addressState" TEXT,
ADD COLUMN     "addressZip" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "sepBillingAddr" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "stripeID" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customers_stripeID_key" ON "customers"("stripeID");
