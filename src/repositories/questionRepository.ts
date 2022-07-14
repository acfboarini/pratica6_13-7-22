import { prisma } from "../config/database.js";

async function insertQuestion(text: string) {
    return await prisma.question.create({
        data: {
            text
        }
    });
}

async function getQuestions() {
    return await prisma.question.findMany({
        include: {
            "answer": true
        }
    });
}

async function getQuestionById(questionId: number) {
    return await prisma.question.findUnique({
        where: {
            id: questionId
        },
        include: {
            "answer": true
        }
    })
}

const questionRepository = {
    getQuestions,
    getQuestionById,
    insertQuestion
};

export default questionRepository;