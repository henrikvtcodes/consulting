/*
  Warnings:

  - You are about to drop the column `addressCity` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `addressLine1` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `addressLine2` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `addressState` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `addressZip` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `sepBillingAddr` on the `customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "addressCity",
DROP COLUMN "addressLine1",
DROP COLUMN "addressLine2",
DROP COLUMN "addressState",
DROP COLUMN "addressZip",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "sepBillingAddr";
