/*
  Warnings:

  - A unique constraint covering the columns `[firebaseId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firebaseId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pronouns` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "firebaseId" TEXT NOT NULL,
ADD COLUMN     "pronouns" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseId_key" ON "User"("firebaseId");
