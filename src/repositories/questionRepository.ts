import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function insertQuestion(question: CreateQuestionData) {
    return await prisma.question.create({
        data: question
    });
}

async function getQuestions() {
    return await prisma.question.findMany({
        include: {
            "answers": true
        }
    });
}

async function getQuestionById(questionId: number) {
    return await prisma.question.findUnique({
        where: {
            id: questionId
        },
        include: {
            "answers": true
        }
    })
}

const questionRepository = {
    getQuestions,
    getQuestionById,
    insertQuestion
};

export default questionRepository;