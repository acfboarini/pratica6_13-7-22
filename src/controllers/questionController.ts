import { Request, Response } from "express";
import questionRepository from "../repositories/questionRepository.js";
import * as answerRepository from "../repositories/answerRepository.js";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {

  try {
    const result = await questionRepository.insertQuestion(req.body);
    return res.status(200).send(result);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function answer(req: Request, res: Response) {

  const answer = {
    questionId: parseInt(req.params.id),
    answer: req.body.answer
  }

  try {
    const result = await answerRepository.insertAnswer(answer);
    return res.status(200).send(result);
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function get(req: Request, res: Response) {

  try {
    const questions = await questionRepository.getQuestions();
    return res.status(200).send(questions);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getById(req: Request, res: Response) {

  const {id: questionId } = req.params; 

  try {
    const question = await questionRepository.getQuestionById(parseInt(questionId));
    return res.status(200).send(question);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
