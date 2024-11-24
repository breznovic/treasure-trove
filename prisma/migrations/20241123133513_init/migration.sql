-- CreateTable
CREATE TABLE "HeroClass" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "bonus" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "HeroClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroParameter" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "heroId" INTEGER NOT NULL,

    CONSTRAINT "HeroParameter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "HP" INTEGER NOT NULL,
    "maxHP" INTEGER NOT NULL,
    "XP" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "heroClassId" INTEGER NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAuthenticated" BOOLEAN NOT NULL,
    "maxScore" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hero_userId_key" ON "Hero"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "HeroParameter" ADD CONSTRAINT "HeroParameter_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_heroClassId_fkey" FOREIGN KEY ("heroClassId") REFERENCES "HeroClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hero" ADD CONSTRAINT "Hero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
