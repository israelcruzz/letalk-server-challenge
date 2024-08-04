-- CreateEnum
CREATE TYPE "State" AS ENUM ('PENDING', 'ACTIVE', 'CANCELED');

-- AlterTable
ALTER TABLE "loans" ADD COLUMN     "state" "State" NOT NULL DEFAULT 'PENDING';
