import UserModel from './UserModel';

export default class ResponseModel{
    data!: {
        userType: string;
        user: UserModel
    }
    message?: string;
}