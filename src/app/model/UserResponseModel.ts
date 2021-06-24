import UserModel from './UserModel';

export default class UserResponseModel{
    data!: {
        userType: string;
        user: UserModel,
        token: string;
    }
    message?: string;
}