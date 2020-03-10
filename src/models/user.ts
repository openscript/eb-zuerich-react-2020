import { Gender } from './gender';

export interface User {
    forename: string,
    surname: string,
    email: string,
    birthday: number,
    gender: Gender
}