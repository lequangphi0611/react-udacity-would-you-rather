import { Axios } from 'axios';
import { LoginResponse } from '../types';

export default class LoginApi {
  constructor(private axios: Axios) {}

  async login(request: {
    username: string;
    password: string;
  }): Promise<LoginResponse> {
    return this.axios.post('/login', request);
  }
}
