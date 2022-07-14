import { Question } from "@prisma/client";

export type CreateQuestionData = Omit<Question, "id">;

const questionService = {};
export default questionService;