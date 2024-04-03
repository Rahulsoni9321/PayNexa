-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
