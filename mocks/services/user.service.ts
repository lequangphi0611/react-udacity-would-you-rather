import _, { filter, isEmpty, map, values } from 'lodash';
import { UserDB, UsersDBResult } from '../types';
import QuestionService from './question.service';

export default class UserService {
  private users: UsersDBResult = {};

  constructor(private questionService: QuestionService) {}

  async loadUsers() {
    if (isEmpty(this.users)) {
      this.users = await import('../db/user.json').then(
        ({ default: jsonValue }) => jsonValue as unknown as UsersDBResult
      );
    }

    return this.users;
  }

  async addUser(user: UserDB) {
    const users = await this.loadUsers();
    if (users[user.id]) {
      throw new Error('The User is already exists.');
    }

    this.users[user.id] = user;
  }

  async findUser(id: string) {
    const users = await this.loadUsers();
    if (!users[id]) {
      throw new Error('The User is not exists.');
    }

    return users[id];
  }

  async findByToken(token: string) {
    const users = await this.loadUsers();
    const user = _(users)
      .entries()
      .map(([, user]) => user)
      .find({ token });
    if (!user) {
      throw new Error('The User is not exists.');
    }

    return user;
  }

  async verifyAuthorizedToken(authoriedToken: string) {
    return this.findByToken(authoriedToken).then((user) => !!user);
  }

  async calcScore() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
    const questions = values(await this.questionService.loadQuestions());
    return _.map(await this.loadUsers(), (user) => {
      const totalAnsweredQuestions = filter(questions, (question) =>
        question.options.some((option) => option.votes.includes(user.id))
      ).length;
      const totalCreatedQuestion = filter(questions, {
        author: user.id,
      }).length;
      return {
        ...user,
        totalAnsweredQuestions,
        totalCreatedQuestion,
      };
    });
  }
}
