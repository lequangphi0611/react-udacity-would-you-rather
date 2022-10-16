import { Axios } from 'axios';
import {
  UserBaseInfoResponse,
  UserResponse,
  UsersScoreResponse,
} from '../types';

export default class UserApi {
  constructor(private axios: Axios) {}

  async getUsers(): Promise<UserResponse[]> {
    return this.axios.get('/users');
  }

  async getBaseInfo(token: string): Promise<UserBaseInfoResponse> {
    return this.axios.get('/users/base-info', {
      headers: {
        Authorization: token,
      },
    });
  }

  async score(): Promise<UsersScoreResponse> {
    return this.axios.get('/users/score');
  }
}
