/*
  Warnings:

  - You are about to drop the column `text` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `questions` table. All the data in the column will be lost.
  - Added the required column `answer` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "text",
ADD COLUMN     "answer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "text",
ADD COLUMN     "question" TEXT NOT NULL;
