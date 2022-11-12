/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `features` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `features` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "features" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "features_name_key" ON "features"("name");
