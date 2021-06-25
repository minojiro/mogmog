-- CreateEnum
CREATE TYPE "ProductImageType" AS ENUM ('COVER', 'NUTRITION');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amazonUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "nutritionImageUrl" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
