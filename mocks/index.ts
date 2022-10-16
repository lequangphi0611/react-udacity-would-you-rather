import UserService from './services/user.service';
import QuestionService from './services/question.service';

const questionsService = new QuestionService();
const usersService = new UserService(questionsService);

export * from './types';
export { usersService, questionsService };
