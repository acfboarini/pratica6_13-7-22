import { prisma } from "../config/database.js";

export async function insertAnswer(questionId: number, text: string) {
    return await prisma.answer.create({
        data: {
            questionId,
            text
        }
    })
}