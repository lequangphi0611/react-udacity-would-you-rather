export type Answers = {
  [index: string]: 'optionOne' | 'optionTwo' | 'optionThree';
};

export type UserDB = {
  id: string;
  name: string;
  avatarURL: string;
  answers: Answers;
  questions: string[];
  token: string;
};

export type UsersDBResult = Record<string, UserDB>;

export type QuestionDBOption = {
  votes: string[];
  text: string;
};

export type QuestionDB = {
  id: string;
  author: string;
  timestamp: number;
  options: QuestionDBOption[];
};

export type QuestionDBMetaData = {
  [index: string]: QuestionDB;
};
