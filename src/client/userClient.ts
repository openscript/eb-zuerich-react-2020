import { axiosInstance } from './client';
import { User } from "../models/user";

export const indexUsersClient = () => {
    return axiosInstance.get<User[]>('users');
};

export const createUserClient = (user: User) => {
    return axiosInstance.post<User>('users', user);
}