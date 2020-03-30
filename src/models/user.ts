import { Gender } from './gender';

export interface User {
    id: number;
    forename: string,
    surname: string,
    email: string,
    birthday: number,
    gender: Gender,
    active: boolean
}

export interface UserDraft extends Omit<User, 'id'> {
}