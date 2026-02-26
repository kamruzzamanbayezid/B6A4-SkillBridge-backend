/*
  Warnings:

  - You are about to drop the column `endTime` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `tutorProfileId` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `tutor_profiles` table. All the data in the column will be lost.
  - You are about to drop the `availability` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slotId]` on the table `bookings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `priceSnapshot` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slotId` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('AVAILABLE', 'BOOKED');

-- DropForeignKey
ALTER TABLE "availability" DROP CONSTRAINT "availability_tutorId_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_tutorProfileId_fkey";

-- DropIndex
DROP INDEX "bookings_tutorProfileId_idx";

-- DropIndex
DROP INDEX "tutor_profiles_subject_idx";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "endTime",
DROP COLUMN "startTime",
DROP COLUMN "tutorProfileId",
ADD COLUMN     "priceSnapshot" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "slotId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tutor_profiles" DROP COLUMN "subject",
ALTER COLUMN "bio" DROP NOT NULL;

-- DropTable
DROP TABLE "availability";

-- CreateTable
CREATE TABLE "slots" (
    "id" TEXT NOT NULL,
    "tutorProfileId" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "SlotStatus" NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "slots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "slots_tutorProfileId_idx" ON "slots"("tutorProfileId");

-- CreateIndex
CREATE INDEX "slots_status_idx" ON "slots"("status");

-- CreateIndex
CREATE INDEX "slots_day_idx" ON "slots"("day");

-- CreateIndex
CREATE INDEX "slots_tutorProfileId_day_idx" ON "slots"("tutorProfileId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_slotId_key" ON "bookings"("slotId");

-- CreateIndex
CREATE INDEX "bookings_tutorId_status_idx" ON "bookings"("tutorId", "status");

-- CreateIndex
CREATE INDEX "bookings_studentId_status_idx" ON "bookings"("studentId", "status");

-- CreateIndex
CREATE INDEX "tutor_profiles_hourlyRate_idx" ON "tutor_profiles"("hourlyRate");

-- AddForeignKey
ALTER TABLE "slots" ADD CONSTRAINT "slots_tutorProfileId_fkey" FOREIGN KEY ("tutorProfileId") REFERENCES "tutor_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "slots"("id") ON DELETE CASCADE ON UPDATE CASCADE;
