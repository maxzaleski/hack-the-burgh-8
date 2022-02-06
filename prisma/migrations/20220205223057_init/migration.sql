-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT,
    "jobTitle" TEXT NOT NULL,
    "tagline" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interests" (
    "id" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "interest" TEXT NOT NULL,

    CONSTRAINT "Interests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_eventId_key" ON "User"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Languages_uid_key" ON "Languages"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Interests_uid_key" ON "Interests"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_uid_key" ON "Questions"("uid");

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interests" ADD CONSTRAINT "Interests_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
