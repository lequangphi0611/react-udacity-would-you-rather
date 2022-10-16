import { Axios } from 'axios';
import LoginApi from './login';
import QuestionApi from './questions';
import UserApi from './user';


export default class ApiProvider {

    private loginApi: LoginApi;
    private userApi: UserApi;
    private questionApi: QuestionApi;

    constructor(axios: Axios) {
        this.loginApi = new LoginApi(axios);
        this.userApi = new UserApi(axios);
        this.questionApi = new QuestionApi(axios);
    }

    getLoginApi(): LoginApi {
        return this.loginApi;
    };

    getUserApi(): UserApi {
        return this.userApi;
    };

    getQuestionApi(): QuestionApi {
        return this.questionApi;
    };

}