import _, { clone, isEmpty, values } from 'lodash';
import { QuestionDB, QuestionDBMetaData } from '../types';

export default class QuestionService {
  private questions: QuestionDBMetaData = {};

  

  constructor() {}

  async loadQuestions() {
    if (isEmpty(this.questions)) {
      this.questions = await import('../db/questions.json').then(
        ({ default: jsonValue }) => jsonValue as unknown as QuestionDBMetaData
      );
    }

    return this.questions;
  }

  async addQuestion(question: QuestionDB) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1500);
    });
    const questions = clone(await this.loadQuestions());
    questions[question.id] = question;
    this.questions = questions;
    return question;
  }

  async getUnAnsweredQuestions(author: string) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1500);
    });
    return _(await this.loadQuestions())
      .values()
      .filter((question) =>
        question.options.every((option) => !option.votes.includes(author))
      )
      .value();
  }

  async getAnsweredQuestions(author: string) {
    return _(await this.loadQuestions())
      .values()
      .filter((question) =>
        question.options.some((option) => option.votes.includes(author))
      )
      .value();
  }

  async getQuestion(id: string) {
    return _(await this.loadQuestions())
      .values()
      .find({ id });
  }

  async udpateQuestion(question: QuestionDB) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1500);
    });
    const questions = clone(await this.loadQuestions());
    questions[question.id] = question;
    this.questions = questions;
    return question;
  }
}
