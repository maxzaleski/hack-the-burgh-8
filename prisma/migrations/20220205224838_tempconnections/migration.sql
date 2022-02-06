-- CreateTable
CREATE TABLE "TempConnections" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "uid" INTEGER NOT NULL,
    "cuid" INTEGER NOT NULL,
    "met" BOOLEAN NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempConnections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TempConnections_eventId_key" ON "TempConnections"("eventId");
