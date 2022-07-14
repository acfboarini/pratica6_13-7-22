import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

export async function insertAnswer(answer: CreateAnswerData) {
    return await prisma.answer.create({
        data: answer
    })
}